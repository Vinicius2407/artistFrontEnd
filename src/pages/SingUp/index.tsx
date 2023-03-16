import singUpImgGuitar from "../../assets/images/singUpImgGuitar.svg";
import iconLocation from "../../assets/images/iconLocation.svg";

import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";

import { Container, Content, ImageContent, MidiaContent } from "./styles";

export function SingUp() {

    return (
        <>
            <Header />

            <Container>
                <Content>
                    <ImageContent background = {singUpImgGuitar}>
                        <div className="textImage">
                            <p className="firstText">Arte é isso, arte é aqui</p>
                            <p className="secondText">Encontre os artistas perfeitos para o seu evento.</p>
                            
                            <div className="location">
                                <p className="city">Foz do Iguaçu</p>
                                <img src={iconLocation} alt="Local da cidade" className="pin" />
                            </div>
                        </div>
                    </ImageContent>
                        
                    <Form />
                </Content>
            </Container>

            <Footer />
        </>
    )

}