import React, { ComponentPropsWithoutRef, FC } from 'react';
import { LinkProps as BaseLinkProps } from 'react-router-dom';
import StyledLink from './StyledLink';

/**
 * Specific props.
 */
interface CustomLinkProps {
  /**
   * Href of the link.
   */
  to?: BaseLinkProps['to'];
}

/**
 * Component props.
 */
type LinkProps = CustomLinkProps & ComponentPropsWithoutRef<'a'> & BaseLinkProps;

/**
 * Helpers anchor element.
 */
let anchor: HTMLAnchorElement | null = null;

/**
 * Returns true if this link is external.
 * @param link Link address.
 * @retunr True of false.
 */
function getIsExternal(link: string): boolean {
  anchor = anchor || (document.createElement('A') as HTMLAnchorElement);
  anchor.href = link;

  const isExternal = anchor.hostname !== location.hostname;
  return isExternal;
}

/**
 * The link component.
 */
const Link: FC<LinkProps> = ({ to, ...rest }) => {
  const address = to || '';
  const isExternal = typeof address === 'string' ? getIsExternal(address) : false;

  const Component = (isExternal ? 'a' : StyledLink) as any;

  const preset: any = {};

  if (isExternal) {
    preset.href = address;
    preset.target = '_blank';
  } else {
    preset.to = address;
  }

  const attrs = {
    ...rest,
    ...preset,
  };

  return <Component {...attrs} />;
};

export default Link;
