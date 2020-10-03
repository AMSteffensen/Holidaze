import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,300&display=swap');
    

    * {
        box-sizing: border-box;
        --color-primary: #FFD165;
        --color-secondary: #FFD165;
        --color-surface: #2d312d;
        --color-background: #F6F6F6;

        --font-primary: 'Oswald', sans-serif;
        --font-secondary: 'Open Sans', sans-serif;
        --font-size-normal: 300;
        --font-size-bold: 700;
    }

    }
    body {
        margin: 0;
        padding: 0;
        background:  var(--color-background);
        font-family: var(--font-secondary);
    }

    h1 {
        font-family: var(--font-primary);
        font-weight: 700;
    }

    h2 {
        font-family: var(--font-primary);
        font-weight: 300;
    }

    #root {
    display: flex;
    flex-direction: column;
    height: 100%;
}

ul {
    list-style: none;
    background-color: var(--color-surface);
    width: 100%;
}

li {
    display: inline-block;
    padding: 1em;
   
}

footer {
    flex-shrink: 0;
    background-color: var(--color-surface);
    color: white;
    font-size: 13px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    padding: 0.5em;
}

`;

export default GlobalStyle;
