import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Container, Copyright, SiteLinks, SiteLink, Link } from './styled';

const FooterClosing = () => (
  <Container>
    <Grid>
      <Row>
        <Copyright>© 2018 Made with love by YLD. All rights reserved</Copyright>
        <SiteLinks>
          <SiteLink>
            <Link href="/privacy-policy">Privacy</Link>
          </SiteLink>
          <SiteLink>
            <Link href="/terms">Terms</Link>
          </SiteLink>
          <SiteLink>
            <Link href="/sitemap">Sitemap</Link>
          </SiteLink>
        </SiteLinks>
      </Row>
    </Grid>
  </Container>
);

export default FooterClosing;
