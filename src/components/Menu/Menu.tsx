import React, { forwardRef, useMemo, useRef, useState, ReactNode, ElementType } from 'react';
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
import mergeRefs from 'react-merge-refs';
import { color, shadows } from '../shared/styles';
import { MenuButton } from './MenuButton';
import { MenuGroup, MenuItem } from './MenuItem';

export const MenuPanel = styled.div`
  width: 200px;
  margin: 0;
  z-index: 999;

  background: ${color.lightest};
  border-radius: 4px;

  ${shadows.tooltip};
`;

interface MenuItemProps {
  icon?: ReactNode;
  link: {
    url: string;
    linkWrapper?: ElementType;
  };
  label: string;
}

interface MenuGroupProps {
  label: string;
  items: MenuItemProps[];
}

interface MenuItemWithId extends MenuItemProps {
  id: number;
}

interface MenuGroupWithId {
  label: string;
  items: MenuItemWithId[];
}

interface MenuProps {
  label: string;
  children?: React.ReactNode;
  primary?: boolean;
  items: (MenuItemProps | MenuGroupProps)[];
}

export const Menu = forwardRef<any, MenuProps & React.HTMLProps<HTMLButtonElement>>(
  ({ items, children, label, primary, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);

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
        focusItemOnOpen: false,
        openOnArrowKeyDown: true,
      }),
    ]);

    const mergedReferenceRef = useMemo(() => mergeRefs([ref, reference]), [reference, ref]);

    // Attach ids to each item within the groups
    // Even though the items are nested within groups,
    // we need to attach ids based on a the top counter
    const options = useMemo(() => {
      let index = 0;
      return items.reduce((acc: (MenuItemWithId | MenuGroupWithId)[], item) => {
        if ('items' in item) {
          const itemsWithId = item.items.map((childItem) => {
            const itemWithId = {
              ...childItem,
              id: index,
            };
            index += 1;
            return itemWithId;
          });

          return acc.concat({ ...item, items: itemsWithId });
        }

        index += 1;
        return acc.concat({ ...item, id: index });
      }, []);
    }, [items]);

    return (
      <>
        {/* Trigger */}
        <MenuButton
          open={open}
          primary={primary}
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
                  },
                })}
              >
                {options.map((option) => {
                  return 'items' in option ? (
                    <MenuGroup key={option.label} label={option.label}>
                      {option.items.map((item) => (
                        <MenuItem
                          key={item.label}
                          href={item.link.url}
                          LinkWrapper={item.link.linkWrapper}
                          icon={item.icon}
                          {...getItemProps({
                            role: 'menuitem',
                            ref(node: HTMLButtonElement) {
                              listItemsRef.current[item.id] = node;
                            },
                            onClick() {
                              setOpen(false);
                            },
                          })}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </MenuGroup>
                  ) : (
                    <MenuItem
                      key={option.label}
                      href={option.link.url}
                      LinkWrapper={option.link.linkWrapper}
                      icon={option.icon}
                      {...getItemProps({
                        role: 'menuitem',
                        ref(node: HTMLButtonElement) {
                          listItemsRef.current[option.id] = node;
                        },
                        onClick() {
                          setOpen(false);
                        },
                      })}
                    >
                      {option.label}
                    </MenuItem>
                  );
                })}
              </MenuPanel>
            </FloatingFocusManager>
          )}
        </FloatingPortal>
      </>
    );
  }
);
Menu.displayName = 'Menu';
