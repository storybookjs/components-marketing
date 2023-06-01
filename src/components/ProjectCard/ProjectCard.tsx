import React from 'react';
import { styles } from '@storybook/design-system';
import { css, styled } from '@storybook/theming';
import { NormalizeArea } from '../NormalizeArea';
import { LinkCard } from './LinkCard';

interface ProjectCardProps
  extends Omit<React.ComponentProps<typeof LinkCard>, 'children' | 'href' | 'LinkWrapper'>,
    Omit<Partial<React.ComponentProps<typeof NormalizeArea>>, 'dangerouslySetInnerHTML'> {
  name: string;
  accentColor: { hex: string };
  logoAlt: string;
  logoUrl?: string;
  projectUrl?: string;
  size?: 'regular' | 'jumbo';
}

const Logotype = styled.span<Pick<ProjectCardProps, 'size'>>`
  font-size: ${(props) =>
    props.size === 'jumbo' ? styles.typography.size.l2 : styles.typography.size.m2}px;
  font-weight: 900;
`;

const Thumb = styled.div<
  Pick<ProjectCardProps, 'size'> & {
    shouldNormalizeArea: boolean;
  }
>`
  align-items: center;
  color: ${styles.color.lightest};
  display: flex;
  flex-direction: column;
  font-size: ${(props) => (props.size === 'jumbo' ? `${styles.typography.size.m2}px` : 'inherit')};
  font-weight: ${styles.typography.weight.bold};
  gap: 15px;
  justify-content: center;
  padding: 10px 20px 0;
  text-align: center;

  img {
    filter: brightness(0) invert(1);
  }

  ${(props) =>
    !props.shouldNormalizeArea &&
    css`
      img {
        max-width: 120px;
        object-fit: contain;
      }
    `}
`;

export const ProjectCard = ({
  accentColor,
  height,
  width,
  logoAlt,
  logoUrl,
  name,
  onClick,
  projectUrl,
  size = 'regular',
  idealArea = size === 'jumbo' ? 40000 : 11000,
  ...restProps
}: ProjectCardProps) => {
  let image = logoUrl ? (
    <img src={logoUrl} alt={logoAlt} loading="lazy" />
  ) : (
    <Logotype size={size}>{logoAlt}</Logotype>
  );

  const shouldNormalizeArea = Boolean(logoUrl && height && idealArea && width);

  if (shouldNormalizeArea) {
    image = (
      <NormalizeArea
        height={height as number}
        idealArea={idealArea as number}
        width={width as number}
      >
        {image}
      </NormalizeArea>
    );
  }

  return (
    <LinkCard backgroundColor={accentColor.hex} href={projectUrl} {...restProps}>
      <Thumb shouldNormalizeArea={shouldNormalizeArea} size={size}>
        {image}
        {name}
      </Thumb>
    </LinkCard>
  );
};
