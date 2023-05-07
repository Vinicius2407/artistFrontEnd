import { ChangeEvent, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Event, Container, Dados, DadosContainer, Descr, Files, FormContainer, ImportFiles, Line, EditPost, Select, Titulo, H1, AddEvento } from "./styles";
import { api } from "../../services/api.service";
import { Input } from "../../components/Input";
import { pxToRem } from "../../utils/convertToRem.util";
import { Button } from "../../components/Button";
import { RouteComponentProps } from "react-router-dom";
import { IPost } from "../../interfaces/IPost";
import { Text } from "../../components/Text";
import FileList from "../../components/FileList"

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

export function Post(props: Props) {

    const id = props.match.params.id;

    const [formPost, setFormPost] = useState<IPost>({} as IPost);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const user_type = localStorage.getItem('user_type');
    const user_id = localStorage.getItem('user_id');

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB em bytes

    async function handleData() {
        const us = await api.get(`post/${id}`);
        setFormPost(us.data);
    }

    useEffect(() => {
        handleData();
    }, []);


    //Pega o posto aqui e faz os esquema
    function handleChange(post: ChangeEvent<HTMLInputElement>) {
        const { id, value } = post.target;
        setFormPost(prevFields => ({
            ...prevFields,
            [id]: value
        }));

    }

    function handleDadosPost() {

        const data = {
            description: formPost.description,
        };

        api.put(`post/${id}`, data)
            .then(response => {
                alert('Dados basicos atualizados com sucesso');
            })
            .catch(error => {
                alert('Tente Novamente');
                console.error('PUT failed:', error);
            });
    }

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        const validFiles = files.filter(
            (file) => file.size <= MAX_FILE_SIZE && (file.type.startsWith("image/") || file.type.startsWith("video/"))
        );
        setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...validFiles]);
    };

    return (
        <>
            <Header />
            <Container>
                <H1>Editar Post</H1>
                <DadosContainer>
                    <Dados>
                        <EditPost>
                            <FormContainer>
                                <Text color="#000000"
                                    fontSize={pxToRem(20)}
                                    style={{
                                        fontFamily: "Nunito",
                                        textAlign: "left",
                                        gridColumnStart: 1,
                                        gridColumnEnd: 3
                                    }}>Descrição</Text>

                                <Descr id="description" onChange={(event) => setFormPost({ ...formPost, description: event.target.value })} cols={100} rows={10} placeholder="Descreva sua publicação!" />

                                <Files>
                                    <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }}>
                                        <Text color="#000000"
                                            fontSize={pxToRem(16)}
                                            style={{
                                                fontFamily: "Nunito",
                                                textAlign: "left",
                                                gridColumnStart: 1,
                                                gridColumnEnd: 3
                                            }}>Arquivo(s)</Text>

                                        <ImportFiles htmlFor="file-upload">+ Adicionar Arquivo</ImportFiles>
                                    </div>

                                    <Line />

                                    <Input id="file-upload" multiple type="file" onChange={handleFileSelect} style={{
                                        display: "none",
                                    }} />
                                    {selectedFiles.length > 0 && <FileList files={selectedFiles} />}
                                </Files>

                                {user_type == 'organizer' &&
                                    <Event>
                                        <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }}>
                                            <Text color="#000000"
                                                fontSize={pxToRem(16)}
                                                style={{
                                                    fontFamily: "Nunito",
                                                    textAlign: "left",
                                                    gridColumnStart: 1,
                                                    gridColumnEnd: 3
                                                }}>Evento</Text>

                                            <AddEvento>+ Adicionar Evento</AddEvento>
                                        </div>
                                        <Line />
                                        
                                    </Event>
                                }

                            </FormContainer>
                            <Button onClick={handleDadosPost}
                                type="submit"
                                style={{
                                    background: "#50E3C2",
                                    margin: "0 auto",
                                    gridColumnStart: 1,
                                    gridColumnEnd: 3,
                                    marginTop: pxToRem(16),
                                }}>Atualizar</Button>
                        </EditPost>
                    </Dados>
                </DadosContainer>
            </Container>
            <Footer />
        </>
    )

}





