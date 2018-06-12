import React from 'react';

import { Container, Copyright, SiteLinks, SiteLink, Link } from './styled';

const FooterClosing = () => (
  <Container>
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
  </Container>
);

export default FooterClosing;
