import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import logoImage from '../../assets/images/logo.svg'

import { AccountModal } from "../AccountModal";
import { Button } from "../Button";

import { pxToRem } from "../../utils/convertToRem.util";

import { Container, Links, Logo } from "./styles";


export function Header() {
    const [isSignInPage, setIsSignInPage] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const history = useHistory();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');
    const user_type = localStorage.getItem('user_type');

    function handleClick() {
        setIsSignInPage(!isSignInPage);
        history.push(isSignInPage ? "/sign-up" : "/sign-in");
    }

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    function openPerfil() {
        history.push('/profile');
        setIsOpen(false);
    }

    function disconnect() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        setIsOpen(false);
        history.push('/sign-in');
    }


    const location = useLocation();
    useEffect(() => {
    }, [location]);

    return (
        <>
            <Container>
                <Logo >
                    <Link to="/"><img src={logoImage} alt="Logo do site" /></Link>
                </Logo>
                <Links>
                    {token ? (
                        <>
                            <div></div>
                            <Button
                                onClick={() => history.push('/')}
                                style={{
                                    color: '#FFF'
                                }}>Inicio</Button>

                            <Button
                                onClick={handleOpenModal}
                                style={{
                                    color: '#FFF'
                                }}>Conta</Button>
                        </>
                    ) : (
                        <>
                            <div></div>
                            <div></div>

                            <Button style={{
                                color: '#FFF'
                            }}
                                onClick={handleClick}
                            >
                                {isSignInPage ? "Cadastrar" : "Logar"}
                            </Button>
                        </>
                    )}
                </Links>
            </Container>

            {isOpen &&
                <>
                    <AccountModal isOpen={isOpen} onClose={handleCloseModal}>
                        <Button onClick={openPerfil} style={{ background: "#50E3C2", color: "#FFF", height: pxToRem(32), width: "100%" }}>Perfil</Button>
                        <Button style={{ background: "#50E3C2", color: "#FFF", height: pxToRem(32), width: "100%" }}><Link to={`/portifolio/${userId}`}> Meus Posts</Link></Button>
                        <Button onClick={disconnect} style={{ background: "#F00", color: "#FFF", height: pxToRem(32), width: "100%" }}>Desconectar</Button>
                    </AccountModal>
                </>
            }
        </>
    )
}