import { Link, useHistory } from "react-router-dom";

import { Container, Links, Logo } from "./styles";
// import logoImage from '../../assets/images/logo.svg'
import { Button } from "../Button";
import { useState } from "react";

export function Header() {
    const [isSignInPage, setIsSignInPage] = useState<boolean>(true);
    const history = useHistory();

    const handleClick = () => {
        setIsSignInPage(!isSignInPage);
        history.push(isSignInPage ? "/sing-up" : "/");
    }

    return (
        <Container>
            <Logo >
                {/* <img src={logoImage} alt="Logo do site" /> */}
            </Logo>

            <Links>
                <Button style={{
                    color: '#FFF'
                }}>
                    Artistas
                </Button>

                <Button style={{
                    color: '#FFF'
                }}>
                    Eventos
                </Button>

                <Button style={{
                    color: '#FFF'
                }}
                    onClick={handleClick}
                >
                    <Link to={isSignInPage ? "/sing-up" : "/"}>
                        {isSignInPage ? 'Cadastrar' : 'Entrar'}
                    </Link>
                </Button>
            </Links>
        </Container>
    )
}