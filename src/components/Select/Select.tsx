import React, {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  useState,
  useLayoutEffect,
  forwardRef,
} from 'react';
import {
  useFloating,
  offset,
  flip,
  shift,
  useListNavigation,
  useTypeahead,
  useInteractions,
  useRole,
  useClick,
  useDismiss,
  FloatingFocusManager,
  autoUpdate,
  FloatingOverlay,
  useId,
} from '@floating-ui/react-dom-interactions';
import { styled, css } from '@storybook/theming';
import { color, typography } from '../shared/styles';
import { SelectContext } from './SelectContext';
import { SelectButton } from './SelectButton';
import { Option } from './Option';

const Label = styled.label<{ hidden?: boolean }>`
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  color: ${color.dark};

  ${(props) =>
    props.hidden
      ? css`
          border: 0px;
          clip: rect(0px, 0px, 0px, 0px);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0px;
          overflow: hidden;
          white-space: nowrap;
          position: absolute;
        `
      : ''};
`;

export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useLayoutEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export const OptionsPanel = styled.div`
  padding: 0;
  min-width: 200px;
  margin: 0;

  background: ${color.lightest};
  border-radius: 4px;

  box-shadow: 0px 0px 15px ${color.tr5}, 0px 1px 2px ${color.tr10};

  outline: 0;
`;

interface SelectProps {
  onChange: (value: string) => void;
  label: string;
  showLabel?: boolean;
  value?: string;
  children: React.ReactNode;
  primary?: boolean;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ label, showLabel, children, value, primary, onChange = () => {}, ...props }, ref) => {
    const id = useId();
    const listItemsRef = useRef<Array<HTMLLIElement | null>>([]);
    const listContentRef = useRef(
      Children.map(children, (child) =>
        Children.map(isValidElement(child) && child.props.children, (c) => c.props.value)
      )
    );

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(
      Math.max(0, listContentRef.current.indexOf(value))
    );
    const [selectedOption, setSelectedOption] = useState<string>(value);
    const [controlledScrolling, setControlledScrolling] = useState(false);

    const prevActiveIndex = usePrevious<number | null>(activeIndex);

    const { x, y, reference, floating, strategy, context, refs, middlewareData } = useFloating({
      open,
      onOpenChange: setOpen,
      whileElementsMounted: autoUpdate,
      middleware: [offset({ mainAxis: 16 }), flip(), shift()],
      placement: 'bottom-start',
    });

    const floatingRef = refs.floating;

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
      useClick(context),
      useRole(context, { role: 'listbox' }),
      useDismiss(context),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: open ? setActiveIndex : setSelectedIndex,
        activeIndex,
        selectedIndex,
      }),
    ]);

    // Scroll the active or selected item into view when in `controlledScrolling`
    // mode (i.e. arrow key nav).
    useLayoutEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const floating = floatingRef.current;

      if (open && controlledScrolling && floating) {
        const item =
          // eslint-disable-next-line no-nested-ternary
          activeIndex != null
            ? listItemsRef.current[activeIndex]
            : selectedIndex != null
            ? listItemsRef.current[selectedIndex]
            : null;

        if (item && prevActiveIndex != null) {
          const itemHeight = listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0;

          const floatingHeight = floating.offsetHeight;
          const top = item.offsetTop;
          const bottom = top + itemHeight;

          if (top < floating.scrollTop) {
            floating.scrollTop -= floating.scrollTop - top + 5;
          } else if (bottom > floatingHeight + floating.scrollTop) {
            floating.scrollTop += bottom - floatingHeight - floating.scrollTop + 5;
          }
        }
      }
    }, [open, controlledScrolling, prevActiveIndex, activeIndex, floatingRef, selectedIndex]);

    // Sync the height and the scrollTop values
    useLayoutEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const floating = floatingRef.current;
      if (open && floating && floating.offsetHeight < floating.scrollHeight) {
        const item = listItemsRef.current[selectedIndex];
        if (item) {
          floating.scrollTop = item.offsetTop - floating.offsetHeight / 2 + item.offsetHeight / 2;
        }
      }
    }, [
      open,
      selectedIndex,
      floatingRef,
      refs.reference,
      // Always re-run this effect when the position has been computed so the
      // .scrollTop change works with fresh sizing.
      middlewareData,
    ]);

    let optionIndex = 0;
    const options = Children.map(
      children,
      (child) =>
        isValidElement(child) &&
        cloneElement(
          child,
          // eslint-disable-next-line no-plusplus
          child.props.children ? {} : { index: optionIndex++ },
          Children.map(child.props.children, (c) =>
            // eslint-disable-next-line no-plusplus
            cloneElement(c, { index: optionIndex++ })
          )
        )
    );

    return (
      <SelectContext.Provider
        value={{
          selectedIndex,
          setSelectedIndex,
          setSelectedOption,
          activeIndex,
          setActiveIndex,
          listRef: listItemsRef,
          setOpen,
          onChange,
          getItemProps,
          dataRef: context.dataRef,
        }}
      >
        <div ref={ref} {...props}>
          <Label htmlFor={id} hidden={!showLabel}>
            {label}
          </Label>
          <SelectButton
            id={id}
            open={open}
            primary={primary}
            {...getReferenceProps({ ref: reference })}
          >
            {selectedOption || 'Select…'}
          </SelectButton>
        </div>
        {open && (
          <FloatingOverlay lockScroll>
            <FloatingFocusManager context={context} preventTabbing>
              <OptionsPanel
                {...getFloatingProps({
                  ref: floating,
                  style: {
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    overflow: 'auto',
                  },
                  onPointerEnter() {
                    setControlledScrolling(false);
                  },
                  onPointerMove() {
                    setControlledScrolling(false);
                  },
                  onKeyDown() {
                    setControlledScrolling(true);
                  },
                })}
              >
                {options}
              </OptionsPanel>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </SelectContext.Provider>
    );
  }
);
Select.displayName = 'Select';
