import { pxToRem } from "../../utils/convertToRem.util";
import { Input } from "../Input";
import { Text } from "../Text";
import { Container, Descr, DescrEvent, Event, EventModal, Files, FormContainer, ImportFiles, Line, ModalDiv, NewEvent, NewPost, Select } from "./styles";
import { Button } from "../Button";
import React from "react";
import Modal from 'react-modal';


export function EventForm() {
        const [modalIsOpen, setIsOpen] = React.useState(false);
      
        function abrirModal() {
          setIsOpen(true);
        }

        function fecharModal() {
          setIsOpen(false);
        }

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

                            <NewEvent onClick={abrirModal}>+ Novo Evento</NewEvent>

                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={fecharModal}
                                contentLabel="Cadastrar Evento" 
                                style={{
                                    overlay: {
                                        backgroundColor: 'rgba(0, 0 ,0, 0.8)'
                                    },
                                    content: {
                                        // display: "grid",
                                        // gridTemplateColumns: "50% 50%",
                                        height: "90%",
                                        width: "70%",
                                        borderRadius: pxToRem(32),
                                        margin: "0 auto",
                                        overflow: "hidden"
                                    }
                                }}>

                                    <ModalDiv>
                                
                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            width: "100%",
                                            fontFamily: "Nunito",
                                            gridColumnStart: 1,
                                            gridColumnEnd: 3,
                                            alignSelf: "center",
                                    }}>Cadastrar Evento</Text>

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 1,
                                            alignSelf: "center",
                                    }}>Nome do evento</Text>

                                    <Input style={{
                                            outline: 0,
                                            width: "90%",
                                            height: pxToRem(32),
                                            borderRadius: pxToRem(8),
                                            background: "#E5E5E5",
                                            borderStyle: "none",
                                            gridColumn: 1,
                                        }} 
                                    />

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumnStart: 1,
                                            gridColumnEnd: 3,
                                        }}>Descrição do evento</Text>

                                    <DescrEvent/>

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 1,

                                        }}>Data de início do evento</Text>

                                    <Input type="date" style={{
                                        outline: 0,
                                        width: "90%",
                                        height: pxToRem(32),
                                        borderRadius: pxToRem(8),
                                        background: "#E5E5E5",
                                        borderStyle: "none",
                                        gridColumn: 1,
                                    }} />

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 2,

                                    }}>Data de término do evento</Text>

                                    <Input type="date" style={{
                                        outline: 0,
                                        width: "90%",
                                        height: pxToRem(32),
                                        borderRadius: pxToRem(8),
                                        background: "#E5E5E5",
                                        borderStyle: "none",
                                        gridColumn: 2,
                                    }} />

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 1,

                                    }}>Categorias</Text>

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 2,

                                    }}>Endereço</Text>

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 2,

                                    }}>CEP</Text>

                                    <Input style={{
                                        outline: 0,
                                        width: "90%",
                                        height: pxToRem(32),
                                        borderRadius: pxToRem(8),
                                        background: "#E5E5E5",
                                        borderStyle: "none",
                                        gridColumn: 2,
                                    }} />

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 2,

                                    }}>Número</Text>

                                    <Input style={{
                                        outline: 0,
                                        width: "90%",
                                        height: pxToRem(32),
                                        borderRadius: pxToRem(8),
                                        background: "#E5E5E5",
                                        borderStyle: "none",
                                        gridColumn: 2,
                                    }} />

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 2,

                                    }}>Rua</Text>

                                    <Input style={{
                                        outline: 0,
                                        width: "90%",
                                        height: pxToRem(32),
                                        borderRadius: pxToRem(8),
                                        background: "#E5E5E5",
                                        borderStyle: "none",
                                        gridColumn: 2,
                                    }} />

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 2,

                                    }}>Bairro</Text>

                                    <Input style={{
                                        outline: 0,
                                        width: "90%",
                                        height: pxToRem(32),
                                        borderRadius: pxToRem(8),
                                        background: "#E5E5E5",
                                        borderStyle: "none",
                                        gridColumn: 2,
                                    }} />

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 2,

                                    }}>Cidade</Text>

                                    <Input style={{
                                        outline: 0,
                                        width: "90%",
                                        height: pxToRem(32),
                                        borderRadius: pxToRem(8),
                                        background: "#E5E5E5",
                                        borderStyle: "none",
                                        gridColumn: 2,
                                    }} />

                                    <Text color="#000000"
                                        fontSize={pxToRem(20)}
                                        style={{
                                            fontFamily: "Nunito",
                                            gridColumn: 2,

                                    }}>País</Text>

                                    <Input style={{
                                        outline: 0,
                                        width: "90%",
                                        height: pxToRem(32),
                                        borderRadius: pxToRem(8),
                                        background: "#E5E5E5",
                                        borderStyle: "none",
                                        gridColumn: 2,
                                    }} />

                                </ModalDiv>
                            </Modal>

                            <Line/>

                            <Select>
                                
                            </Select>
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