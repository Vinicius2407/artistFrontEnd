import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/IPost";
import { FeedContainer, Container, Descr, Event, Files, FormContainer, ImportFiles, Line, NewEvent, NewPost, Select, DivShowForm, AddEvento, SelectContainer, SelectLabel } from "./styles";
import { api } from "../../services/api.service";
import FileList from "../FileList"
import Post from "../Post";
import { Button } from "../Button";
import { pxToRem } from "../../utils/convertToRem.util";
import { Input } from "../Input";
import { Text } from "../Text";
import { CaretDown } from "@phosphor-icons/react";
import { IEvent } from "../../interfaces/IEvent";

interface FeedProps {
    route: string;
    userId?: string;
}

function Feed({ route, userId }: FeedProps) {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [formPost, setFormPost] = useState<IPost>({} as IPost);
    const [events, setEvents] = useState<IEvent[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [selectedEventId, setSelectedEventId] = useState<string>();
    const [showForm, setShowForm] = useState(false);
    const [attPosts, setAttPosts] = useState(false);

    const user_type = localStorage.getItem('user_type');
    const user_id = localStorage.getItem('user_id');

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB em bytes

    async function handleList() {
        const postss = await api.get(userId ? `${route}/${userId}` : route);
        setPosts(postss.data);

        if (user_type == 'organizer') {
            const evts = await api.get(`events/${user_id}`);
            setEvents(evts.data);
        }

    }

    function handleSubmit() {
        if (!formPost.description) {
            const missingFields = [];

            if (!formPost.description) missingFields.push("Descrição");

            alert(`Um ou mais campos não preenchidos: ${missingFields.join(", ")}`);
        }

        const formData = new FormData();

        selectedFiles.forEach((file) => {
            formData.append("assets", file);
        });

        formData.append('description', formPost.description);
        formData.append('user', user_id || '');
        formData.append('event', selectedEventId || '');

        if (formPost.event) {
            formData.append('event', formPost.event.id)
        }
        api.post("post", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            alert("Cadastrado com sucesso!");
            setFormPost({} as IPost);
            setShowForm(false);
            setSelectedFiles([]);
            setAttPosts(true);
        }).catch((error) => (alert("Erro ao concluir o post"), console.error(error)));

    }

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        const validFiles = files.filter(
            (file) => file.size <= MAX_FILE_SIZE && (file.type.startsWith("image/") || file.type.startsWith("video/"))
        );
        setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...validFiles]);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const eventId = event.target.value;
        setSelectedEventId(eventId);
    };


    useEffect(() => {
        handleList();
    }, [attPosts]);

    return (
        <>

            <FeedContainer>

                <Container>
                    <DivShowForm>
                        <CaretDown onClick={() => setShowForm(!showForm)} size={32} style={{ transform: showForm ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        <h1 onClick={() => setShowForm(!showForm)} style={{ fontSize: '2rem', justifySelf: 'flex-end' }}>Cadastrar Post</h1>
                    </DivShowForm>

                    {showForm &&
                        <NewPost className={showForm ? 'show' : ''}>
                            <FormContainer>
                                <Text color="#000000"
                                    fontSize={pxToRem(20)}
                                    style={{
                                        fontFamily: "Nunito",
                                        textAlign: "left",
                                        gridColumnStart: 1,
                                        gridColumnEnd: 3
                                    }}>Descrição</Text>

                                <Descr id="descricao" onChange={(event) => setFormPost({ ...formPost, description: event.target.value })} cols={100} rows={10} placeholder="Descreva sua publicação!" />

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
                                    {selectedFiles.length == 0 &&
                                        <>
                                            <h3 style={{
                                                fontFamily: "Nunito",
                                                textAlign: "left",
                                                marginLeft: '10px',
                                                color: "#000"
                                            }}>Nada por aqui.</h3>
                                        </>}
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
                                        {events.length > 0 &&
                                            <>
                                                <SelectContainer>
                                                    <Select id="event-select" value={selectedEventId} onChange={handleSelectChange}>
                                                        <option style={{ cursor: 'pointer' }} value={undefined}>Selecione...</option>
                                                        {events.map((event) => (
                                                            <option style={{ cursor: 'pointer' }} key={event.id} value={event.id}>
                                                                {event.name}
                                                            </option>
                                                        ))}
                                                    </Select>
                                                </SelectContainer>
                                            </>}
                                        {events.length == 0 &&
                                            <>
                                                <h3 style={{
                                                    fontFamily: "Nunito",
                                                    textAlign: "left",
                                                    marginLeft: '10px',
                                                    color: "#000"
                                                }}>Nada por aqui.</h3>
                                            </>}
                                    </Event>
                                }
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
                    }
                </Container>
                {posts.length == 0 && <h1 style={{ margin: '15% auto' }}> Nada por aqui.</h1>}
                {posts.map((post) => {
                    return (
                        <Post key={post.id} post={post} />
                    )
                }
                )}
            </FeedContainer>
        </>
    );
};

export default Feed;  