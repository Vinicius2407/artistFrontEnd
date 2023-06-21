import styled from "styled-components";

export const Container = styled.div`
    padding: 0 10rem;
`

export const CardArtist = styled.div`
    display: grid;
    grid-template-rows: 1fr .1fr;
    margin: 10px 0;
    padding: 15px;
    max-height: 55rem; 
    max-width: 48rem;
    min-width: 30rem;
    width: 90%;
    padding: 0 10rem;
    border-radius: 32px;
    background: #FFFFFF;
    color:#fff;
    background: #fff;
    padding: 30px;
    margin: 0 10rem;
    row-gap: 20px;

    .input-invalido {
        transition: 0.5s;
        background: #50e3c3 !important;
        color: #FF0000 !important;
    }

    .input {
        outline: 0;
        color: #fff;
        width: 90%;
        height: 2rem;
        border-radius: 0.5rem;
        background: #9500F6;
        padding: 5px 10px;
        border: none;
        font-size: 14px;
        font-family: Nunito;
        font-weight: bold;
        margin-bottom: 3px;
    }

    .input::placeholder {
        color: #fff;
    }
`

export const RedeSocial = styled.div<{ cor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  transition: 1s;

  &:hover {
    opacity: 1.8;
    background: ${props => props.cor};
  }
`;