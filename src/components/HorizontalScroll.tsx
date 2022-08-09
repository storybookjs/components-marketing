import { styled } from '@storybook/theming';

interface HorizontalScrollProps {
  gap?: string;
  scrollPadding?: string;
}

export const HorizontalScroll = styled.div<HorizontalScrollProps>`
  display: flex;
  gap: ${(props) => props.gap};
  scroll-padding: ${(props) => props.scrollPadding};

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  & > * {
    flex: none;
    scroll-snap-align: start;
  }
`;
HorizontalScroll.defaultProps = {
  gap: '2rem',
  scrollPadding: '0',
};
