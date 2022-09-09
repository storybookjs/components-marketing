import React, { useRef, useState, useLayoutEffect, ElementType } from 'react';
import {
  useFloating,
  offset,
  flip,
  shift,
  useListNavigation,
  useInteractions,
  useRole,
  useDismiss,
  autoUpdate,
} from '@floating-ui/react-dom-interactions';
import { styled, css } from '@storybook/theming';
import { shadows, color, typography } from './shared/styles';
import { LinkWithWrapper } from './LinkWithWrapper';

const Result = styled(LinkWithWrapper, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>`
  display: flex;
  align-items: center;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  text-decoration: none;
  color: ${color.darkest};
  transition: color 150ms ease-out;
  outline: 0;

  margin-bottom: 12px;
  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover,
  &:focus,
  &:active {
    color: ${color.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${color.secondary};
    outline-offset: 4px;
    border-radius: 2px;
  }

  ${(props) =>
    props.active &&
    css`
      outline: 2px solid ${color.secondary};
      outline-offset: 4px;
      border-radius: 2px;
    `}
`;

export const LocalSearchPanel = styled.div`
  padding: 20px;
  min-width: 280px;

  background: ${color.lightest};
  border-radius: 5px;

  outline: 0;

  ${shadows.tooltip}
`;

interface LocalSearchProps {
  placeholder?: string;
  Input?: ElementType;
  onInputChange: (value: string) => void;
  inputValue: string;
  results: {
    link: {
      url: string;
      linkWrapper?: ElementType;
    };
    label: string;
  }[];
}

export function LocalSearch({
  placeholder = 'Search',
  Input = 'input',
  results,
  onInputChange,
  inputValue,
  ...props
}: LocalSearchProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const { x, y, reference, floating, strategy, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [offset({ mainAxis: 4, alignmentAxis: 0 }), flip(), shift()],
  });

  useLayoutEffect(() => {
    // IMPORTANT: When the floating element first opens, this runs when the
    // styles have **not yet** been applied to the element. This can cause an
    // infinite loop as `size` has not yet limited the maxHeight, so the whole
    // page tries to scroll. We must wrap it in rAF.
    requestAnimationFrame(() => {
      if (activeIndex != null) {
        listRef.current[activeIndex]?.scrollIntoView({ block: 'nearest' });
      }
    });
  }, [activeIndex]);

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    useRole(context, { role: 'listbox' }),
    useDismiss(context),
    useListNavigation(context, {
      listRef,
      activeIndex,
      onNavigate: setActiveIndex,
      virtual: true,
      loop: true,
      focusItemOnOpen: false,
      openOnArrowKeyDown: true,
    }),
  ]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    onInputChange(value);

    if (value) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  }

  return (
    <>
      <Input
        {...getReferenceProps({
          ref: reference,
          onChange,
          value: inputValue,
          placeholder,
          'aria-autocomplete': 'list',
          onKeyDown(event) {
            if (event.key === 'Enter' && activeIndex != null && listRef.current[activeIndex]) {
              listRef.current[activeIndex].click();
            }
          },
        })}
      />
      {open && (
        <LocalSearchPanel
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              left: x ?? 0,
              top: y ?? 0,
            },
          })}
        >
          {results.map((item, index) => (
            <Result
              key={item.label}
              href={item.link.url}
              LinkWrapper={item.link.linkWrapper}
              {...getItemProps({
                role: 'option',
                ref(node) {
                  listRef.current[index] = node;
                },
              })}
              active={activeIndex === index}
              aria-selected={activeIndex === index}
            >
              {item.label}
            </Result>
          ))}
        </LocalSearchPanel>
      )}
    </>
  );
}
