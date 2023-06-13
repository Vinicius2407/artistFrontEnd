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
    grid-template-rows: .1 1fr 1fr .2fr; 
    max-width: 60rem;
    width:100%;
    min-width: 30rem;
    border-radius: 32px;
    background: #FFFFFF;
    color:#fff;    
    padding: 30px;
    row-gap: 10px;
`

export const CardArtist = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    width:18rem;
    height:8rem;
    border-radius: 8px;
    padding: 10px;
    background: #ededed;
    color: #000 !important;    
`
export const CardHeader = styled.div`
    display: flex; 
    width: 100%;
    border: 1px solid green;
`
export const Imagem = styled.img`
    width:2.5rem;
    height:2.5rem;
    border-radius: 50%;
    margin: 10px;
`