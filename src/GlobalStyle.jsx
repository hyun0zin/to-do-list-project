const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

body{
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    font-weight: 600;
}
`;

export default GlobalStyle;
