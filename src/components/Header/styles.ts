import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    
}

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0.80rem 10rem;
    align-item: center;
`

export const Logo = styled.div`
    img{
        width: 20rem;
    }
`

export const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 1.875rem;
    justify-content: space-between;
`