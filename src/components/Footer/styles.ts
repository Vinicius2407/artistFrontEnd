import styled from "styled-components";

export const Container = styled.footer`
    position: fixed;
    bottom: 0px;
    left: 0;
    background: #B23AFF;

    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 24px
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    p {
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 400;
        color:#FFFFFF;
    }
`