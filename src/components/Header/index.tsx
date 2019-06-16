import React, { FC } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import Color from '@/helpers/constants/Color';
import Link from '@/components/common/Link';
import Typography from '@/components/common/Typography';
import Root from './Root';
import Content from './Content';
import Logo from './Logo';
import IEO from './IEO';
import Logout from './Logout';

interface Props {
  /**
   * Address of the logo link.
   */
  rootAddress: string;

  /**
   * Address of the IEO link.
   */
  ieoAddress: string;

  /**
   * User first and second name.
   */
  username: string;
}

/**
 * Header component.
 */
const Header: FC<Props> = ({ rootAddress, ieoAddress, username, ...props }) => (
  <Root {...props}>
    <Grid>
      <Row>
        <Col xs={12}>
          <Content>
            <Link to={rootAddress}>
              <Logo />
            </Link>
            <Link to={ieoAddress}>
              <IEO />
            </Link>
            <Typography color={Color.white} size={13}>
              {username}
            </Typography>
            <Logout />
          </Content>
        </Col>
      </Row>
    </Grid>
  </Root>
);

export default Header;
