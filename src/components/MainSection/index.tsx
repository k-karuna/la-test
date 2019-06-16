import React, { FC } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import sidebarLinks from '@/content/sidebar.json';
import greetings from '@/content/greetings.json';
import Color from '@/helpers/constants/Color';

import Typography from '@/components/common/Typography';
import Button from '@/components/common/Button';
import Sidebar from '@/components/Sidebar';
import Greetings from '@/components/Greetings';

import Form from '@/containers/Form';
import ProjectNameInput from '@/containers/ProjectNameInput';
import Whitepaper from '@/containers/Whitepaper';
import PitchDeck from '@/containers/PitchDeck';
import ImageUpload from '@/containers/ImageUpload';
import Industries from '@/containers/Industries';
import Description from '@/containers/Description';
import Website from '@/containers/Website';
import FullDescription from '@/containers/FullDescription';
import VideoFirst from '@/containers/VideoFirst';
import VideoSecond from '@/containers/VideoSecond';

interface Props {}

/**
 * Main Section component.
 */
const MainSection: FC<Props> = ({ ...props }) => (
  <Grid>
    <Row>
      <Col xs={3}>
        <Sidebar links={sidebarLinks.sections} />
      </Col>
      <Col xs={6}>
        <Greetings data={greetings.greetings} />
        <Form>
          <ProjectNameInput />
          <Description />
          <Website />
          <FullDescription />
          <Industries />
          <Row>
            <Col xs={6}>
              <Whitepaper />
            </Col>
            <Col xs={6}>
              <PitchDeck />
            </Col>
          </Row>
          <ImageUpload />
          <VideoFirst />
          <VideoSecond />
          <Row>
            <Col xs={4}>
              <Button variant="light">
                <Typography>Back</Typography>
              </Button>
            </Col>
            <Col xs={8}>
              <Button variant="dark" type="submit">
                <Typography color={Color.white}>Continue</Typography>
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  </Grid>
);

export default MainSection;
