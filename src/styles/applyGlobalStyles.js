import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';

export default function applyGlobalStyles() {
  injectGlobal`
    ${normalize}

    body {
      font-family: sans-serif;
    }
  `;
}
