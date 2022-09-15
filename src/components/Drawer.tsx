import React, { useState, Dispatch, SetStateAction, ReactNode } from 'react';
import {
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react-dom-interactions';
import { styled } from '@storybook/theming';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon, Logos } from '@storybook/design-system';
import { IconButton } from './IconButton';

const AnimatedOverlay = styled(motion(FloatingOverlay))`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 999999;
`;

interface DrawerProps {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  label: string;
  children: ReactNode;
}

const StorybookLogo = styled(Logos.Storybook)`
  height: 20px;
`;

const DialogBody = styled.div`
  background: white;
  padding: 22px 20px 20px 20px;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const DialogHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Drawer = ({ label, open, setOpen, children }: DrawerProps) => {
  const { floating, context } = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const { getFloatingProps } = useInteractions([useRole(context), useDismiss(context)]);

  return (
    <FloatingPortal>
      <AnimatePresence>
        {open && (
          <AnimatedOverlay
            lockScroll
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <FloatingFocusManager context={context}>
              <DialogBody
                {...getFloatingProps({
                  ref: floating,
                  'aria-label': label,
                })}
              >
                <DialogHeader>
                  <StorybookLogo aria-label="Storybook" />
                  <IconButton onClick={() => setOpen(false)}>
                    <Icon icon="closeAlt" aria-label="close" />
                  </IconButton>
                </DialogHeader>
                {children}
              </DialogBody>
            </FloatingFocusManager>
          </AnimatedOverlay>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};
