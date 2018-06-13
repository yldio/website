import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import PageSection from 'components/PageSection';
import { H2, Copy } from 'components/Typography';

const Community = () => (
  <PageSection data-selector="home:community">
    <Grid data-selector="home:community">
      <Row>
        <Col xs={12} sm={6}>
          <H2 decorated>What do we do</H2>
        </Col>
        <Col xs={12} sm={6}>
          <Copy>
            We help companies ignite radical technology innovation and through
            digital transformation, build the most relentlessly relevant brands.
          </Copy>
          <Copy>
            <br />
          </Copy>
          <Copy>
            Comfortable with digital change, we know how to create a lasting
            engineering culture of experimentation, to make sure our clients are
            too.​
          </Copy>
          <Copy>
            <br />
          </Copy>
          <Copy>
            We thrive in enabling our clients to unlock the potential of their
            talent through up-skilling and pair programming, empowering them to
            stay ahead of the competition and improve their bottom line.
          </Copy>
        </Col>
      </Row>
    </Grid>
  </PageSection>
);

export default Community;
