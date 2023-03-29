import { useState } from "react";

import singUpImgGuitar from "../../assets/images/singUpImgGuitar.svg";
import iconLocation from "../../assets/icons/iconLocation.svg";

import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";

import { Container, Content, ImageContent, SwitchButtonProfile } from "./styles";

export function SingUp() {
    const [formType, setFormType] = useState<"artist"|"organizer">("artist");

    function toggleFormType() {
        if (formType === "artist") {
            setFormType("organizer");
        } else {
            setFormType("artist");
        }
    }

    return (
        <>
            <Header />

            <Container style={{overflow: "hidden"}}>
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
                        
                    <SwitchButtonProfile >
                        <button type="button" onClick={toggleFormType}>
                            TROCAR TIPO DO FORM
                        </button>
                    </SwitchButtonProfile>

                    <Form type={formType} />
                </Content>
            </Container>

            <Footer />
        </>
    )

}