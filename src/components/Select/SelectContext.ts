import React, { createContext } from 'react';
import { ContextData } from '@floating-ui/react-dom-interactions';

interface SelectContextValue {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  setSelectedOption: (option: string) => void;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>;
  setOpen: (open: boolean) => void;
  onChange: (value: string) => void;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  dataRef: ContextData;
}

export const SelectContext = createContext({} as SelectContextValue);
