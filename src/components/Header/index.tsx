import { Container, Content, Links, Logo, Image} from "./styles";

import logoImage from '../../assets/images/logo.svg'
import { Button } from "../Button";

export function Header() {
    return (
        <Container>
                <Logo >
                    <img src={logoImage} />
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
                        }}>
                            Login
                        </Button>
                </Links>
        </Container>
    )
}