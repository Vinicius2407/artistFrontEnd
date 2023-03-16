import { createGlobalStyle } from 'styled-components';

import InterMedium from '../assets/fonts/Inter-Medium.ttf';
import InterSemiBold from '../assets/fonts/Inter-SemiBold.ttf';
import NunitoBold from '../assets/fonts/Nunito-Bold.ttf';
import NunitoMedium from '../assets/fonts/Nunito-Medium.ttf';
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';

// Fazendo a importação das fontes para dentro do projeto,
// e depois fazendo a chamada das fontes e zerando os estilos padrões do browser.
export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Inter';
        font-weight: 500;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${InterMedium}') format('truetype');
    }

    @font-face {
        font-family: 'Inter';
        font-weight: 600;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${InterSemiBold}') format('truetype');
    }

    @font-face {
        font-family: 'Nunito';
        font-weight: 500;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${NunitoMedium}') format('truetype');
    }

    @font-face {
        font-family: 'Nunito';
        font-weight: 700;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${NunitoBold}') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 400;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${RobotoRegular}') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 500;
        font-display: 'swap';
        font-style: 'normal';
        src: url('${RobotoMedium}') format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif, font-weight: 400;
    }

    body, html {
        background: #F6F6F6;       
        overflow: auto; 
    }

    button {
        cursor: pointer;
        font-size: 1rem;
        color: #50E3C2;
    }

`