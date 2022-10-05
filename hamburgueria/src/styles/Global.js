import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   
   :root{
    --Color-primary: #27AE60;
    --Color-primary-50: #93D7AF;
    --Color-secondary: #EB5757;
    --gray-100:#333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;
    --white: #FFFFFF;
    --Negative: #E60000;
    --Warning: #FFCD07;
    --Sucess: #168821;
    --Information: #155BCB;
    --Heading-1: 26px;
    --Heading-2: 22px;
    --Heading-3: 18px;
    --Heading-4: 14px;
    --Headline: 16px;
    --body: 14px;
    --body-600: 14px;
    --caption: 12px;
    --bold: 700;
    --semibold: 600;
    --regular: 400;


   }
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    html{
        min-width: 414px;
    }

    body{
        min-width: 414px;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    ul, ol, li{
        list-style: none;
    }
    img{
        max-width: 80%;
    }
    input, select{
        background: transparent;
        border: none;
    } 

    
`
export default GlobalStyle