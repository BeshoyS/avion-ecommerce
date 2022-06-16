import { css } from "styled-components";

const variables = css`
  :root {
    /* Colors */
    --dark-primary: #2a254b;
    --primary: #4e4d93;
    --light-gray: #f9f9f9;
    --border-gray: #ebe8f4;
    --white: #fff;
    --border-dark: #cac6da;
    --dark-primary-overlay: rgba(42, 37, 75,0.8);
    /* Fonts */
    --font-family: "Roboto", sans-serif;
    /* Font Sizes */
    --h1-size: 2.25rem;
    --h2-size: 2rem;
    --h3-size: 1.5rem;
    --h4-size: 1.25rem;
    --h5-size: 1rem;
    --h6-size: 0.875rem;
    --body-small-size: 0.8rem;
    --body-medium-size: 1rem;
    --body-large-size: 1.125rem;
    /* Box Shadow */
    --box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    /* padding */
    --padding-large: 1rem 2rem;
    --padding-small: 1rem;
  }
`;

export default variables;
