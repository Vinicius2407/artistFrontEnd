import styled from "styled-components";

export const Container = styled.div`
    padding: 0 10rem;
    min-height: 80vh;
    
`
export const DadosContainer = styled.div`
    display: grid;
    grid-template-rows: .1 1fr .1fr;
    max-height: 23rem; 
    max-width: 48rem;
    min-width: 30rem;
    border-radius: 32px;
    background: #FFFFFF;
    color:#fff;    
    padding: 30px;
    margin: 20px 10rem;
    row-gap: 10px;
`

export const Dados = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
`

export const Titulo = styled.h3`
    color: #000
`
export const Categorias = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;    
    column-gap: .1rem;
`