import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  background-color: #000;
  color: #fff;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 16px;
  direction: ltr;
  line-height: 1.5;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, svg {
  display: block;
  max-width: 100%
}

input, button, textarea, select {
  font: inherit;
}

#root {
  isolation: isolate;
}
`;

export default GlobalStyle;
