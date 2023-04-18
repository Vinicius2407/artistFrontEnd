import { Link, useHistory } from "react-router-dom";

import { Container, Links, Logo } from "./styles";
import logoImage from '../../assets/images/logo.svg'
import { Button } from "../Button";
import { useState } from "react";
import { pxToRem } from "../../utils/convertToRem.util";

export function Header() {
    const [isSignInPage, setIsSignInPage] = useState<boolean>(true);
    const history = useHistory();

    const handleClick = () => {
        setIsSignInPage(!isSignInPage);
        history.push(isSignInPage ? "/sing-up" : "/");
    }

    const token = localStorage.getItem('token');


    return (
        <Container>
            <Logo >
                <img src={logoImage} alt="Logo do site" />
            </Logo>

            <Links>

                {token && <><Button style={{
                    color: '#FFF'
                }}>
                    Artistas
                </Button><Button style={{
                    color: '#FFF'
                }}>
                        Eventos
                    </Button></>
                }

                {!token && <>
                    <div></div>
                    <div></div>
                </>
                }

                <Button style={{
                    color: '#FFF'
                }}
                    onClick={handleClick}
                >
                    {isSignInPage ? "Cadastrar" : "Logar"}
                </Button>
            </Links>
        </Container>
    )
}