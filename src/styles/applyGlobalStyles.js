import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';

export default function applyGlobalStyles() {
  injectGlobal`
    ${normalize}

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }
  `;
}
