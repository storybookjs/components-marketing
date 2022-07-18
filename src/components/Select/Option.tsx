import React, { useContext, ReactNode, Children, cloneElement } from 'react';
import { styled } from '@storybook/theming';
import { Icon } from '@storybook/design-system';
import { text, color, subheading, background } from '../shared/styles';
import { LinkWithWrapperProps } from '../LinkWithWrapper';
import { SelectContext } from './SelectContext';

const OptionGroupLabel = styled.li`
  ${subheading.small};
  font-size: 10px;
  text-transform: uppercase;
  padding: 10px 7px 10px 15px;
  height: 32px;
  list-style: none;
  color: ${color.mediumdark};
`;

const OptionGroupContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

export const OptionGroup: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ children, label }) => {
  return (
    <OptionGroupContainer key={label} role="group" aria-labelledby={`floating-ui-select-${label}`}>
      <OptionGroupLabel role="presentation" id={`floating-ui-select-${label}`} aria-hidden="true">
        {label}
      </OptionGroupLabel>
      {children}
    </OptionGroupContainer>
  );
};

const PureOption = styled('li', { shouldForwardProp: (prop) => prop !== 'hasIcon' })<{
  hasIcon?: boolean;
}>`
  ${text.small};
  color: ${color.darkest};

  display: flex;
  align-items: center;
  height: 32px;

  padding-top: 10px;
  padding-right: 7px;
  padding-bottom: 10px;
  padding-left: ${(props) => (props.hasIcon ? '10px' : '15px')};

  text-decoration: none;
  transition: color 150ms ease-out;

  outline: 0;

  &:hover,
  &:focus,
  &:active {
    background-color: ${background.calmBlue};
  }

  svg,
  img {
    flex: none;
    color: #7a858e;
    width: 12px;
    height: 12px;
    margin-right: 10px;
  }
`;

const OptionLabel = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export interface OptionProps extends LinkWithWrapperProps {
  icon?: ReactNode;
}

export const Option: React.FC<{
  label: string;
  value: string;
  index?: number;
  icon?: React.ReactNode;
}> = ({ index = 0, label, value, icon }) => {
  const {
    selectedIndex,
    setSelectedIndex,
    setSelectedOption,
    listRef,
    setOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    getItemProps,
    dataRef,
  } = useContext(SelectContext);

  function handleSelect() {
    setSelectedOption(label);
    setSelectedIndex(index);
    onChange(value);
    setOpen(false);
    setActiveIndex(null);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter' || (event.key === ' ' && !dataRef.current.typing)) {
      event.preventDefault();
      handleSelect();
    }
  }

  return (
    <PureOption
      role="option"
      ref={(node) => {
        listRef.current[index] = node;
      }}
      tabIndex={activeIndex === index ? 0 : 1}
      // activeIndex === index prevents VoiceOver stuttering.
      aria-selected={activeIndex === index && selectedIndex === index}
      data-selected={selectedIndex === index}
      {...getItemProps({
        onClick: handleSelect,
        onKeyDown: handleKeyDown,
      })}
    >
      {icon}
      <OptionLabel>
        {label} {selectedIndex === index && <Icon icon="check" />}
      </OptionLabel>
    </PureOption>
  );
};
