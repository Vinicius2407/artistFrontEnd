import styled from "styled-components";

interface FormContainerProps {
    width?: string;
}


export const FormContainer = styled.form<FormContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;
    margin: 45px 0 73px 59px;
    border-radius: 8px;
    width: 600px;
    
    background: #B23AFF;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 11px;

    input, select {
        width: 500px;
        height: 48px;
        border-radius: 8px;
        border: 0;
        
    }

    label {
        font-size: 18px;
        font-family: "Nunito", sans-serif;
        font-weight: 700;
        color: #f5f5f5;
        padding-bottom: 17px;
    } 

    input::placeholder {
        font-size: 14px;
        font-family: "Nunito", sans-serif;
        font-weight: 700;
        color: #BBCCDD;
        padding-left: 16px;
    }

`

export const InputContaineDoble = styled.div`
    display: flex;
    
    input, select {
        width: 240px;
        height: 48px;
        border-radius: 8px;
        border: 0;
    }
`

export const MidiaContainer = styled.div`
    display: flex;
`