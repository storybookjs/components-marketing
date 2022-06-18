import React, { ElementType, ReactNode, forwardRef } from 'react';

export interface LinkWithWrapperProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  LinkWrapper?: ElementType;
  children: ReactNode;
  to: string;
}

/**
 * Optionally replace anchor tags with a wrapper component
 * such as Gatsby Link or Next Link.
 */
export const LinkWithWrapper = forwardRef<HTMLAnchorElement, LinkWithWrapperProps>(
  ({ children, to, LinkWrapper, ...props }, ref) => {
    if (LinkWrapper) {
      return (
        <LinkWrapper to={to} ref={ref} {...props}>
          {children}
        </LinkWrapper>
      );
    }

    return (
      <a href={to} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);
LinkWithWrapper.displayName = 'LinkWithWrapper';
