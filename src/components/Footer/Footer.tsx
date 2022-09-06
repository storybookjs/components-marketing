import React, { FC, useContext, useMemo } from 'react';
import { Button, Icon } from '@storybook/design-system';
import {
  Title,
  Upper,
  Subscribe,
  FooterWrapper,
  IconLink,
  SocialLinks,
  Column,
  Lower,
  FooterLink,
} from './Footer.styles';
import { Services } from './Services';
import { MailingListSignup, MailingListSubscriberCount } from '../MailingList';
import { LinksContext, Links } from '../links-context';

const footerGroups = (links: Links) => ({
  why: [
    { label: 'Why Storybook', link: links.whyStorybook },
    { label: 'Component-driven UI', link: links.componentDriven },
  ],
  docs: [
    { label: 'Guides', link: links.guides },
    { label: 'Tutorials', link: links.tutorials },
    { label: 'Changelog', link: links.changelog },
    { label: 'Telemetry', link: links.telemetry },
  ],
  community: [
    { label: 'Integrations', link: links.integrations },
    { label: 'Get involved', link: links.getInvolved },
    { label: 'Blog', link: links.blog },
    { label: "We're hiring", link: links.hiring },
  ],
  showcase: [
    { label: 'Explore', link: links.showcase },
    { label: 'Projects', link: links.projects },
    { label: 'Component glossary', link: links.componentGlossary },
  ],
});

interface FooterProps {
  inverse?: boolean;
  subscriberCount?: number;
  onSubscribe?: () => void;
}

export const Footer: FC<FooterProps> = ({ onSubscribe, subscriberCount, inverse, ...props }) => {
  const links = useContext(LinksContext);
  const footerGroupsWithLinks = useMemo(() => footerGroups(links), [links]);

  return (
    <FooterWrapper inverse={inverse} {...props}>
      <Upper>
        <div>
          <Title>Join the community</Title>
          <Subscribe>
            <MailingListSignup onSubscribe={onSubscribe} />
            <MailingListSubscriberCount inverse={inverse} count={subscriberCount} />
          </Subscribe>
        </div>
        <SocialLinks>
          <IconLink
            appearance={inverse ? 'inverseOutline' : 'outline'}
            href="http://github.com/storybookjs"
          >
            <Icon aria-label="Github" icon="github" />
          </IconLink>
          <IconLink
            appearance={inverse ? 'inverseOutline' : 'outline'}
            href="https://twitter.com/storybookjs"
          >
            <Icon aria-label="Twitter" icon="twitter" />
          </IconLink>
          <IconLink
            appearance={inverse ? 'inverseOutline' : 'outline'}
            href="https://discord.gg/storybook"
          >
            <Icon aria-label="Discord" icon="discord" />
          </IconLink>
          <IconLink
            appearance={inverse ? 'inverseOutline' : 'outline'}
            href="https://www.youtube.com/channel/UCr7Quur3eIyA_oe8FNYexfg"
          >
            <Icon aria-label="YouTube" icon="youtube" />
          </IconLink>
        </SocialLinks>
      </Upper>
      <Lower>
        <Column>
          <Title>Why</Title>
          {footerGroupsWithLinks.why.map(({ label, link }) => (
            <FooterLink
              key={label}
              inverse={inverse}
              tertiary
              href={link.url}
              LinkWrapper={link.linkWrapper}
            >
              {label}
            </FooterLink>
          ))}
        </Column>
        <Column>
          <Title>Docs</Title>
          {footerGroupsWithLinks.docs.map(({ label, link }) => (
            <FooterLink
              key={label}
              inverse={inverse}
              tertiary
              href={link.url}
              LinkWrapper={link.linkWrapper}
            >
              {label}
            </FooterLink>
          ))}
        </Column>
        <Column>
          <Title>Community</Title>
          {footerGroupsWithLinks.community.map(({ label, link }) => (
            <FooterLink
              key={label}
              inverse={inverse}
              tertiary
              href={link.url}
              LinkWrapper={link.linkWrapper}
            >
              {label}
            </FooterLink>
          ))}
        </Column>
        <Column>
          <Title>Showcase</Title>
          {footerGroupsWithLinks.showcase.map(({ label, link }) => (
            <FooterLink
              key={label}
              inverse={inverse}
              tertiary
              href={link.url}
              LinkWrapper={link.linkWrapper}
            >
              {label}
            </FooterLink>
          ))}
        </Column>
      </Lower>
      <Services inverse={inverse} />
    </FooterWrapper>
  );
};
