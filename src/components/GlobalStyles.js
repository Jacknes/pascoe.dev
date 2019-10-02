import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

    @font-face {
        font-family: "Inter";
        src: url("../../static/fonts/Inter/Inter-Regular.woff")   format("woff");
    }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
    color: #222;
    overflow: hidden;

}

h1 {
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
}
`;
