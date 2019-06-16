import React, { FC } from 'react';

import Root from './Root';
import Section from './Section';
import SubSection from './SubSection';
import Link from '@/components/common/Link';
import Typography from '@/components/common/Typography';

interface Props {
  links: [
    {
      name: string;
      address: string;
      initialized?: boolean;
      subSections?: [
        {
          name: string;
          address: string;
          initialized?: boolean;
        }
      ];
    }
  ];
}

/**
 * Header component.
 */
const Sidebar: FC<Props> = ({ links, ...props }) => (
  <Root {...props}>
    {links.map((link, index) => (
      <Section key={index}>
        <div>
          <Link to={link.address}>
            <Typography lineHeight="big" size={14} opacity={link.initialized ? 1 : 0.4}>
              {link.name}
            </Typography>
          </Link>
          {link.subSections &&
            link.subSections.map((subsection, index) => (
              <SubSection key={index}>
                <Link to={subsection.address}>
                  <Typography lineHeight="big" size={12} opacity={subsection.initialized ? 1 : 0.4}>
                    {subsection.name}
                  </Typography>
                </Link>
              </SubSection>
            ))}
        </div>
      </Section>
    ))}
  </Root>
);

export default Sidebar;
