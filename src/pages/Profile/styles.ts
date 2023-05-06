import styled from "styled-components";

export const Container = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
export const DadosContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr .1fr;
    max-height: 33.25rem; 
    max-width: 60rem;
    width: 100%;
    min-width: 30rem;
    border-radius: 32px;
    background: #FFFFFF;
    color:#fff;
    background: #fff;
    padding: 30px;
    margin: 0 10rem;
    row-gap: 20px;
`

export const Dados = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
   
`
export const H1 = styled.h1`
    display: block;
    font-size: 2rem;
    font-family: Nunito;
    font-weight: bold;
    color: #fff;
    max-width: 60rem;
    margin: 5px 11rem;
    width:100%;
`