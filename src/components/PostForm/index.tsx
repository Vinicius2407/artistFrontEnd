import { pxToRem } from "../../utils/convertToRem.util";
import { Input } from "../Input";
import { Text } from "../Text";
import { Container, Descr, Event, Files, FormContainer, ImportFiles, Line, NewEvent, NewPost, Select } from "./styles";
import { Button } from "../Button";
import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import { IPost } from "../../interfaces/IPost";

type EventFormModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export function EventForm({ isOpen, onClose }: EventFormModalProps) {

    const [formData, setFormData] = useState<IPost>({} as IPost);
    const [modalOpen, setModalOpen] = useState(false);

    const handleButtonClick = () => {
        setModalOpen(true);
    };

    const handleSubmit = async () => {

        const data = {
           description: formData.description,
           id: formData.id,
           dh_create: formData.dh_create,
           medias: formData.medias,
           user: formData.user,
           event: formData.event, 
        };
     }

    if (!isOpen) return null;

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if ((event.target as HTMLElement).classList.contains('modal')) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [isOpen, onClose]);

    return (
        <>
            <Container>
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-body">
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

                                    <Descr onChange={(event) => setFormData({ ...formData, description: event.target.value })} cols={100} rows={10} placeholder="Descreva sua publicação!" />

                                    <Files>
                                        <Text color="#000000"
                                            fontSize={pxToRem(20)}
                                            style={{
                                                fontFamily: "Nunito",
                                                textAlign: "left",
                                                gridColumnStart: 1,
                                                gridColumnEnd: 3
                                            }}>Arquivo(s)</Text>

                                        <ImportFiles htmlFor="file-upload">+ Adicionar Arquivo</ImportFiles>

                                        <Line />

                                        <Input id="file-upload" type="file" style={{
                                            display: "none",
                                        }} />
                                    </Files>

                                    <Event>
                                        <Text color="#000000"
                                            fontSize={pxToRem(20)}
                                            style={{
                                                fontFamily: "Nunito",
                                                textAlign: "left",
                                            }}>Evento</Text>

                                        <NewEvent onClick={handleButtonClick}>+ Novo Evento</NewEvent>

                                        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>

                                        </Modal>

                                        <Line />

                                        <Select>

                                        </Select>
                                    </Event>

                                    <Button onClick={handleSubmit}
                                        type="submit"
                                        style={{
                                            background: "#50E3C2",
                                            margin: "0 auto",
                                            gridColumnStart: 1,
                                            gridColumnEnd: 3,
                                            marginTop: pxToRem(16),
                                        }}>Publicar</Button>
                                </FormContainer>
                            </NewPost>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}