import styled from "styled-components";


export const FormContainer = styled.form`
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

export const InputContainerDoble = styled.div`
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
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    
    .social-text {
        font-family: "Nunito", sans-serif;
        font-weight: 700;
        font-size: 20px;
        padding-top: 24px;
        padding-bottom: 10px;

        color: #f5f5f5;
    }
`

export const IconContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;

    .social-box {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 150px;
        text-align: left;
        padding: 5px;
        background: transparent;
        border: 0;
        border-radius: 8px;
    }

    .social-box .name {
        font-family: "Nunito", sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: #f5f5f5;
    }

    .social-box:hover {
        color: #000;
        background: #BBCCDD;
        transition: all 0.2s ease-in
    }

    
`

export const CategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 20px;

    .categoryBox {
        display: flex;
        align-items: center;
        gap: 8px;
       
        .categoriesName {
            font-family: "Nunito", sans-serif;
            font-weight: 700;
            font-size: 18px;
            color: #f5f5f5;
            padding: 5px;

        }
    }
        
`
