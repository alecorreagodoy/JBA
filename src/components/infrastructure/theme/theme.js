import { ThemeProvider } from "styled-components";



const CoolTheme = {
    colors: {
        black: '#000000',
        white: '#EDEAE0',
        gray: '#F8F8F8'
    },
    fontSizes:
    {
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 40,
        xxxl: 80,
    },
    spacing: {
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 40,
        xxxl: 80,
    },
    fonts: {
        body: 'Montserrat',
        heading: "Lato_400Regular",
        monospace: "Oswald_400Regular",
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        bold: 700,
    },
    fontSizes: {
        caption: "12px",
        button: "14px",
        body: "16px",
        title: "20px",
        h5: "24px",
        h4: " 34px",
        h3: "45px",
        h2: "56px",
        h1: "112",
    },

};

export function Theme({ children }) {
    return <ThemeProvider theme={CoolTheme}>{children}</ThemeProvider>;
};