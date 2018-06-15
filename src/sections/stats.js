import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding } from 'styled-components-spacing';

import { Copy } from 'components/typography';
import Section from 'components/section';

export default () => (
  <Section>
    <Padding top={{ xs: 15, sm: 41 }} bottom={{ xs: 15, sm: 50 }}>
      <Grid>
        <Row>
          <Col xs={12} sm={6} />
          <Col xs={12} sm={6}>
            <Copy>
              YLD brings together a team of many different people - engineers,
              designers and creative thinkers – who come together to build
              amazing projects alongside our customers. Our experience stems
              from our team holding roles at companies including Digitas, Glue,
              Arc, Yahoo, Microsoft, IBM, Isobar, EuroRSG, Canonical to name a
              few, and we even have an ex Olympic qualifier who leads our
              largest client as Principal.<br />
              <br />The company prides itself on its strong leadership and a
              diverse team who come with a wide range of backgrounds including
              UK, US, Russia, Portugal, Poland, Italy, Lithuania, Belgium, South
              Africa, France, Turkey and Romania.<br />
              <br />We have worked for some of the largest multinational
              enterprise companies, private clients and for government agencies
              across B2B and B2C environments. We believe our diversity makes us
              a stronger team, which helps us better serve our clients and our
              communities.
            </Copy>
          </Col>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
