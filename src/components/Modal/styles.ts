import styled from 'styled-components';

 export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 2rem;
`;

export const Container = styled.div`
    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        display: flex;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        border-radius: 2rem;
    }

    .modal-body {
        display: flex;
        margin-top: 1rem;
        flex-direction: column;
        gap: 15px;
    }

    .modal-close {
        color: black;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }
`

export const EventDate = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    width: 100%;
    align-items: center;
`

export const EventAddress = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
`

export const EventCategory = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-between;
`

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 30px;
  padding: 1.25rem;

  .full-width-section {
    grid-column: 1 / span 2; /* define que a seção ocupará as duas colunas */
    display: flex;
    justify-content: center; /* centraliza o conteúdo horizontalmente */
    align-items: center; /* centraliza o conteúdo verticalmente */
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: Nunito;
  font-size: 20px;
  color: #000000;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background: #E5E5E5;
  border-style: none;
`;

export const TextArea = styled.textarea`
  outline: none;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  background: #E5E5E5;
  border-style: none;
`;