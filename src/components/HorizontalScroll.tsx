import { styled } from '@storybook/theming';

interface HorizontalScrollProps {
  gap?: string;
  scrollPadding?: string;
}

export const HorizontalScroll = styled.div<HorizontalScrollProps>`
  display: flex;
  gap: ${(props) => props.gap ?? '2rem'};
  scroll-padding: ${(props) => props.scrollPadding ?? 0};

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  & > * {
    flex: none;
    scroll-snap-align: start;
  }
`;
