import styled from 'styled-components';

export const Container = styled.header`
    background: #B23AFF;
    display: flex;
    height: 70px;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .imgLogo {
        width: 16px;
        margin-bottom: 10px;
        margin-left: 1px;
        margin-right: -6px;
    }

    h1.logo {
        margin: 24px 0 24px 62px;
        color: #FFFFFF;
        font-size: 40px;
        font-family: "Inter";
        font-weight: 600;
    }

    
   
`