import { createGlobalStyle } from "styled-components";
import { ICustomizeTheme } from "utils/theme";

const GlobalStyle = createGlobalStyle<{ theme: ICustomizeTheme }>`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    input,
    texarea,
    button {
      appearance: none;
    }

    body {
      background-color: ${(props) => props.theme.body};
      transition: background 0.25s ease-in-out;
      font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${(props) => props.theme.textPrimary}
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

`;

export { GlobalStyle };
