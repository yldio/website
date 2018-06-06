import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

export default function applyGlobalStyles() {
  injectGlobal`
    ${reset}

    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

    html {
      box-sizing: border-box;
      font-size: 16px;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    /* Target the application container */

    #___gatsby {
      font-family: 'Roboto', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.5;
      overflow-x: hidden;
    }
  `;
}
