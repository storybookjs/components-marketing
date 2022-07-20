import React, { forwardRef, useMemo, useRef, useState } from 'react';
import {
  useFloating,
  offset,
  flip,
  shift,
  useListNavigation,
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
import { mergeRefs } from 'react-merge-refs';
import { color } from '../shared/styles';
import { MenuButton } from './MenuButton';
import { MenuItem, MenuItemProps } from './MenuItem';

export const MenuPanel = styled.ul`
  padding: 0;
  width: 200px;
  margin: 0;

  background: ${color.lightest};
  border-radius: 4px;

  box-shadow: 0px 0px 15px ${color.tr5}, 0px 1px 2px ${color.tr10};
`;

interface Item extends Omit<MenuItemProps, 'children'> {
  label: string;
}

interface MenuProps {
  label?: string;
  children?: React.ReactNode;
  primary?: boolean;
  items: Item[];
}

export const Menu = forwardRef<HTMLButtonElement, MenuProps>(
  ({ children, label, primary, items, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);

    const nodeId = useFloatingNodeId();

    const { x, y, reference, floating, strategy, context } = useFloating<HTMLButtonElement>({
      open,
      onOpenChange: setOpen,
      middleware: [offset({ mainAxis: 16, alignmentAxis: 0 }), flip(), shift()],
      placement: 'bottom-start',
      nodeId,
      whileElementsMounted: autoUpdate,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
      useClick(context, {
        toggle: true,
        pointerDown: true,
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
    ]);

    const mergedReferenceRef = useMemo(() => mergeRefs([ref, reference]), [reference, ref]);

    return (
      <>
        {/* Trigger */}
        <MenuButton
          primary={primary}
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
        </MenuButton>
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
              <MenuPanel
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
                {items.map(({ label: itemLabel, ...itemProps }, index) => (
                  <MenuItem
                    key={itemLabel}
                    {...itemProps}
                    {...getItemProps({
                      role: 'menuitem',
                      ref(node: HTMLButtonElement) {
                        listItemsRef.current[index] = node;
                      },
                      onClick() {
                        setOpen(false);
                      },
                    })}
                  >
                    {itemLabel}
                  </MenuItem>
                ))}
              </MenuPanel>
            </FloatingFocusManager>
          )}
        </FloatingPortal>
      </>
    );
  }
);
Menu.displayName = 'Menu';
