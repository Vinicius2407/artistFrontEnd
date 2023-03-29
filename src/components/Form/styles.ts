import styled from "styled-components";


export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;
    margin-bottom: 38px;
    margin-left: 59px;
    margin-top: 45px;
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
    
    .socialText {
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

    .socialBox {
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

    .socialBox .name {
        font-family: "Nunito", sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: #f5f5f5;
    }

    .socialBox:hover {
        color: #000;
        background: #BBCCDD;
        transition: all 0.2s ease-in
    }

    
`

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .categoryText {
        font-family: "Nunito", sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #F5F5F5;

        padding-bottom: 10px;
    }

    .categoryComponents {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-bottom: 20px;

        .categoryBox {
            display: flex;
            align-items: center;
            width: 150px;
            
            .categoriesName {
                font-family: "Nunito", sans-serif;
                font-weight: 700;
                font-size: 18px;
                color: #F5F5F5;
                padding: 5px;

            }
        }

        input[type="checkbox"] {
            aparance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 2px solid #F5F5F5;
            outline: none;
            cursor: pointer;
        }

        input[type="checkbox"]:hover {
            background: #BBCCDD;
        }

        input[type="checkbox"]:checked {
            background: #F5F5F5;
        }

        input[type="checkbox"]:checked:hover {
            background: #BBCCDD;
        }
    }
`

export const FormFinal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 36px 24px 36px;
    margin-top: 20px;
    width: 570px;

    .license {
        display: flex;
        gap: 8px;
    }

    .license a{
        font-family: "Nunito", sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #f5f5f5;

        underline: none;
    }

    .license a:hover {
        color: #BBCCDD;
    }

`