import { PureComponent } from 'react';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

export default class extends PureComponent {
  componentDidMount() {
    return injectGlobal`
      ${reset}

      @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

      body, html {
        font-size: 16px;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
        height: 100%;
      }

      * {
        box-sizing: border-box;
      }

      *, *:before, *:after {
        box-sizing: border-box;
      }

      #___gatsby {
        height: 100%;
        display: block;
      }
    `;
  }

  render() {
    return this.props.children;
  }
}
