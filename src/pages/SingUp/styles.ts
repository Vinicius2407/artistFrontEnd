import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #000000;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background: #F5F5F5;
`

interface ImageContentProps {
    background: string;
}

export const ImageContent = styled.div<ImageContentProps>`
    display: flex;
    background: url(${props => props.background});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 500px;

    .textImage {
        display: flex;
        flex-direction: column;
        
        color: #f5f5f5;
    }

    .textImage .firstText {
        padding-top: 200px;
        padding-left: 100px;

        font-size: 48px;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
    }

    .textImage .secondText {
        margin-top: 16px;
        padding-left: 100px;

        font-size: 24px;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

    .textImage .location {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 200px;
        margin-top: 100px;
        margin-left: 300px;
        padding: 10px;

        background: #B23AFF;
        border-radius: 8px;
    }
`

export const SwitchButtonProfile = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    
`