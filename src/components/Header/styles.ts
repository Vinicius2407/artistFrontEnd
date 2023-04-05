import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    
}

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0.80rem 19rem;
    align-item: center;
`

export const Logo = styled.div`
    img{
        width: 8rem;
    }
`

export const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 1.875rem;
    justify-content: space-between;
`