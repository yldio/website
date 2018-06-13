import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import PageSection from 'components/PageSection';
import { H2, Copy } from 'components/Typography';

const Community = () => (
  <PageSection dark data-selector="home:community">
    <Grid data-selector="home:community">
      <Row>
        <Col xs={12} sm={6}>
          <H2 decorated light>
            What are we known for?
          </H2>
        </Col>
        <Col xs={12} sm={6}>
          <Copy light>
            We help clients rethink their approach for the digital age, together
            creating a new style of technology leadership.
          </Copy>
          <Copy>
            <br />
          </Copy>
          <Copy light>
            Our team are originators, who have had a profound influence on the
            early adoption of node.js, Kubernetes and React across the global
            community and we are proud members of the Node.js Foundation.
          </Copy>
          <Copy>
            <br />
          </Copy>
          <Copy light>
            As a magnet for experimental thinkers from around the world, we like
            to partner with our clients to rewrite the Silicon Valley playbook
            on digital transformation.
          </Copy>
          <Copy>
            <br />
          </Copy>
          <Copy light>
            Market challengers, next generation leaders with the finest
            engineers in Europe.
          </Copy>
          <Copy>
            <br />
          </Copy>
          <Copy light>
            We are Open source in technology and bring a distributed working
            philosophy. The team passionately encourages a culture of giving
            back to the community and are always excited to code the future.
          </Copy>
        </Col>
      </Row>
    </Grid>
  </PageSection>
);

export default Community;
