import { AlignCenterHorizontal } from "@phosphor-icons/react";
import { pxToRem } from "../../utils/convertToRem.util";
import { Input } from "../Input";
import { Text } from "../Text";
import { Container, Descr, Event, Files, FormContainer, ImportFiles, Line, NewPost } from "./styles";
import { Button } from "../Button";

export function EventForm() {
    return (
        <>
            <Container>
                <NewPost>
                    <Text color="#FFFFFF"
                        fontSize={pxToRem(30)}
                        style={{
                            fontFamily: "Nunito",
                        }}>Começar Post</Text>

                    <FormContainer>
                        <Text color="#000000"
                            fontSize={pxToRem(20)}
                            style={{
                                fontFamily: "Nunito",
                                textAlign: "left",
                                gridColumnStart: 1,
                                gridColumnEnd: 3
                            }}>Descrição</Text>

                        <Descr cols={100} rows={10} placeholder="Descreva sua publicação!"/>
                        
                        <Files>
                            <Text color="#000000"
                                fontSize={pxToRem(20)}
                                style={{
                                    fontFamily: "Nunito",
                                    textAlign: "left",
                                    gridColumnStart: 1,
                                    gridColumnEnd: 3
                            }}>Arquivo(s)</Text>

                            <ImportFiles>+ Novo Arquivo</ImportFiles>

                            <Line/>
                        </Files>

                        <Event>
                            <Text color="#000000"
                                fontSize={pxToRem(20)}
                                style={{
                                    fontFamily: "Nunito",
                                    textAlign: "left",
                            }}>Evento</Text>

                            <ImportFiles>+ Novo Evento</ImportFiles>

                            <Line/>

                            <Input
                                style={{
                                    width: '100%',
                                    height: pxToRem(50),
                                    borderRadius: pxToRem(8),
                                    background: "#E5E5E5",
                                    borderStyle: "none",
                                    outline: 0,
                            }}/>
                        </Event>

                        <Button type= "submit"
                            style={{
                                background: "#50E3C2",
                                margin: "0 auto",
                                gridColumnStart: 1,
                                gridColumnEnd: 3,
                                marginTop: pxToRem(16),
                            }}>Publicar</Button>
                    </FormContainer>
                </NewPost>
            </Container>
        </>
    )
}