import { Link, useHistory, useLocation } from "react-router-dom";

import { Container, Links, Logo } from "./styles";
import logoImage from '../../assets/images/logo.svg'
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { AccountModal } from "../AccountModal";


export function Header() {
    const [isSignInPage, setIsSignInPage] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const history = useHistory();
    const token = localStorage.getItem('token');

    function handleClick(){
        setIsSignInPage(!isSignInPage);
        history.push(isSignInPage ? "/sing-up" : "/");
    }

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    function openPerfil() {
        history.push('/sing-up');
        setIsOpen(false);
    }

    function desconect() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('user_type');
        setIsOpen(false);
        history.push('/');
    }


    const location = useLocation();
    useEffect(() => {
    }, [location]);

    return (
        <>
            <Container>
                <Logo >
                    <img src={logoImage} alt="Logo do site" />
                </Logo>
                <Links>
                    {token ? (
                        <>
                            <Button
                                style={{
                                    color: '#FFF'
                                }}>Artistas</Button>

                            <Button
                                style={{
                                    color: '#FFF'
                                }}>Eventos</Button>

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
                <AccountModal isOpen={isOpen} onClose={handleCloseModal}>
                    <Button onClick={openPerfil} style={{ background: "#9747FF", color: "#FFF" }}>Perfil</Button>
                    <Button onClick={desconect} style={{ background: "#F00", color: '#FFF' }}>Desconectar</Button>
                </AccountModal>
            }
        </>
    )
}