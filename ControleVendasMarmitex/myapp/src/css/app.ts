import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
    }

    html{
        overflow-x:hidden;
    }

    body{
        background-image: linear-gradient(to right, #4749b1, #455fc4, #4474d7, #4589e7, #4a9ef7);
    }
`