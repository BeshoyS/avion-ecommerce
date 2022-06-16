import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
${variables};
*{
    box-sizing: border-box;
    margin: 0;
    padding:0;
}

h1,h2,h3,h4,h5,h6 {
    font-weight: 400;
}

body {
    font-family: var(--font-family);
    font-size: var(--body-medium-size);
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: #333
}
`;

export default GlobalStyle;
