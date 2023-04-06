import styled from "styled-components"

export const Container = styled.div`
    margin: 1rem 19rem 2rem 19rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`
    background: linear-gradient(180deg, #201D1D 0%, rgba(32, 29, 29, 0.2) 100%);
    padding: 10rem 18rem 1.5rem 18rem;
    border-radius: 2rem;
    margin-bottom: 2rem;
`

export const InputLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 12rem;

    label, input {
        margin-top: 0.875rem;
    }
`