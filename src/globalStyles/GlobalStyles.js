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

.btn {
  cursor: pointer;
    font-weight: 700;
    border-radius: 2px;
    color: #fff;
    border: transparent;
    padding: 0.5rem 2rem;
}

.btn-primary {
    background-color: #e50914;
  }

  .btn-small {
    font-size: 0.9rem;
    padding: 0.25rem 0.5rem;
    font-weight: 400;
  }

  @media screen and (min-width: 43em) {
    .btn-small  {
      padding: 0.25rem 1rem;
    }

    @media screen and (min-width: 62em) {
      .btn-small {
        padding: 0.5rem 2rem;
      }
    }
  }
`;

export default GlobalStyle;
