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
import { Icon } from '@storybook/design-system';
import { styled } from '@storybook/theming';
import { mergeRefs } from 'react-merge-refs';
import { shadows, color } from './shared/styles';
import { StackedNav, StackedNavItem } from './StackedNav';
import { IconButton } from './IconButton';

export const CollapsedNavPanel = styled.div`
  padding: 20px 20px 20px 24px;
  width: 280px;

  background: ${color.lightest};
  border-radius: 5px;

  outline: 0;

  ${shadows.tooltip}
`;

interface MenuItem {
  icon: ReactNode;
  link: {
    url: string;
    linkWrapper?: ElementType;
  };
  label: string;
}

interface MenuGroup {
  label: string;
  items: MenuItem[];
}

interface MenuItemWithId extends MenuItem {
  id: number;
}

interface MenuGroupWithId {
  label: string;
  items: MenuItemWithId[];
}

interface CollapsedNavProps {
  label?: string;
  children?: React.ReactNode;
  inverse?: boolean;
  groups: MenuGroup[];
}

export const CollapsedNav = forwardRef<any, CollapsedNavProps & React.HTMLProps<HTMLButtonElement>>(
  ({ groups, children, label, inverse, ...props }, ref) => {
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
        focusItemOnOpen: false,
        openOnArrowKeyDown: true,
      }),
    ]);

    const mergedReferenceRef = useMemo(() => mergeRefs([ref, reference]), [reference, ref]);

    // Attach ids to each item within the groups
    // Even though the items are nested within groups,
    // we need to attach ids based on a the top counter
    const menuGroups = useMemo(() => {
      let index = 0;
      return groups.reduce((acc: MenuGroupWithId[], group) => {
        const itemsWithId = group.items.map((item) => {
          const itemWithId = {
            ...item,
            id: index,
          };
          index += 1;
          return itemWithId;
        });

        return acc.concat({ ...group, items: itemsWithId });
      }, []);
    }, [groups]);

    return (
      <>
        {/* Trigger */}
        <IconButton
          inverse={inverse}
          {...getReferenceProps({
            ...props,
            ref: mergedReferenceRef,
            onClick(event) {
              event.stopPropagation();
              (event.currentTarget as HTMLButtonElement).focus();
            },
          })}
        >
          {open ? (
            <Icon icon="closeAlt" aria-label="Close nav menu" />
          ) : (
            <Icon icon="menualt" aria-label="Open nav menu" />
          )}
        </IconButton>
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
              <CollapsedNavPanel
                {...getFloatingProps({
                  ref: floating,
                  style: {
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                  },
                })}
              >
                {menuGroups.map((group) => (
                  <StackedNav key={group.label} label={group.label}>
                    {group.items.map((item) => (
                      <StackedNavItem
                        key={item.label}
                        to={item.link.url}
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
                      </StackedNavItem>
                    ))}
                  </StackedNav>
                ))}
              </CollapsedNavPanel>
            </FloatingFocusManager>
          )}
        </FloatingPortal>
      </>
    );
  }
);
CollapsedNav.displayName = 'CollapsedNav';
