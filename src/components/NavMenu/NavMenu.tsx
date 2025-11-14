import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
  useRef,
  useState,
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
  autoUpdate,
  FloatingPortal,
  useFloatingNodeId,
  FloatingFocusManager,
} from '@floating-ui/react-dom-interactions';
import { styled } from '@storybook/theming';
import mergeRefs from 'react-merge-refs';
import { MenuPanel } from '../Menu/Menu';
import { NavMenuButton } from './NavMenuButton';

export const NavMenuPanel = styled(MenuPanel)`
  padding: 12px;
  width: 288px;
`;

interface NavMenuProps {
  label?: string;
  children?: React.ReactNode;
  inverse?: boolean;
  monochrome?: boolean;
  active?: boolean;
}

export const NavMenu = forwardRef<HTMLButtonElement, NavMenuProps>(
  ({ children, label, active, inverse, monochrome, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);
    const listContentRef = useRef(
      Children.map(children, (child) =>
        isValidElement(child) && typeof child.props === 'object' && 'label' in child.props
          ? child.props.label
          : null
      ) as Array<string | null>
    );

    const nodeId = useFloatingNodeId();

    const { x, y, reference, floating, strategy, context } = useFloating<HTMLButtonElement>({
      open,
      onOpenChange: setOpen,
      middleware: [offset({ mainAxis: 4, alignmentAxis: 0 }), flip(), shift()],
      placement: 'bottom-start',
      nodeId,
      whileElementsMounted: autoUpdate,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
      useClick(context, {
        toggle: true,
        ignoreMouse: false,
      }),
      useRole(context, { role: 'menu' }),
      useDismiss(context),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        onNavigate: setActiveIndex,
        loop: true,
        openOnArrowKeyDown: true,
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: open ? setActiveIndex : undefined,
        activeIndex,
      }),
    ]);

    const mergedReferenceRef = useMemo(() => mergeRefs([ref, reference]), [reference, ref]);

    return (
      <>
        {/* Trigger */}
        <NavMenuButton
          active={active}
          inverse={inverse}
          monochrome={monochrome}
          open={open}
          {...getReferenceProps({
            ...props,
            ref: mergedReferenceRef,
            onClick(event) {
              event.stopPropagation();
              (event.currentTarget as HTMLButtonElement).focus();
            },
          })}
        >
          {label}
        </NavMenuButton>
        <FloatingPortal>
          {/* Menu Panel */}
          {open && (
            <FloatingFocusManager
              context={context}
              modal
              // Touch-based screen readers will be able to navigate back to the
              // reference and click it to dismiss the menu without clicking an item.
              // This acts as a touch-based `Esc` key. A visually-hidden dismiss button
              // is an alternative.
              order={['reference', 'content']}
            >
              <NavMenuPanel
                {...getFloatingProps({
                  ref: floating,
                  style: {
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    transformOrigin: 'top left',
                  },
                })}
              >
                {Children.map(
                  children,
                  (child, index) =>
                    isValidElement(child) &&
                    cloneElement(
                      child,
                      getItemProps({
                        role: 'menuitem',
                        ref(node: HTMLButtonElement) {
                          listItemsRef.current[index] = node;
                        },
                        onClick() {
                          setOpen(false);
                        },
                      })
                    )
                )}
              </NavMenuPanel>
            </FloatingFocusManager>
          )}
        </FloatingPortal>
      </>
    );
  }
);
NavMenu.displayName = 'NavMenu';
