import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem 19rem 2rem 19rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`

export const NewPost = styled.div`
    align-self: center;
`

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 2rem;
    padding: 0.5rem 2.5rem 1rem 2.5rem;
    align-self: left;
`

export const ImportFiles = styled.a`
    color: #41D773;
    font-family: Nunito;
    margin-left: 70%;
`

export const Line = styled.hr`
    size: 50;
    width: 95%;
    align: center;
    border: 0;
    border-top: 2px solid #41D773;
`

export const Descr = styled.textarea`
    outline: 0;
    height: 6.25rem;
    border-radius: 0.5rem;
    background: #E5E5E5;
    border-style: none;
    resize: none;
    padding: 1.25rem;
    align-self: center;
    grid-column-start: 1;
    grid-column-end: 3;
`


export const Files = styled.div`
`

export const Event = styled.div`
`