import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input, 
    select, 
    textarea, 
    button {
        font-family:inherit;
    }
`;
