import React from 'react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import {
  faTwitter,
  faGithub,
  faYoutube,
} from '@fortawesome/fontawesome-free-brands';

import {
  Container,
  Copyright,
  SiteLinks,
  SiteLink,
  Link,
  SocialLink,
} from './styled';

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
    <ul>
      <SocialLink>
        <Link href="https://twitter.com/yldio">
          <Icon icon={faTwitter} />
        </Link>
      </SocialLink>
      <SocialLink>
        <Link href="https://github.com/yldio">
          <Icon icon={faGithub} />
        </Link>
      </SocialLink>
      <SocialLink>
        <Link href="https://youtube.com">
          <Icon icon={faYoutube} />
        </Link>
      </SocialLink>
    </ul>
  </Container>
);

export default FooterClosing;
