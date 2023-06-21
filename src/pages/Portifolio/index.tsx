
import { useEffect, useState } from "react";
import Feed from "../../components/Feed";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Form, Column, Dados } from "../Evento/styles";
import { CardArtist, Container } from "./styles";
import { RouteComponentProps } from 'react-router-dom';
import { IUser } from "../../interfaces/IUser";
import { api } from "../../services/api.service";

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}
export function Portifolio(props: Props) {

    const id = props.match.params.id;

    const [formUser, setFormUser] = useState<IUser>({} as IUser)

    async function handleData() {
        const us = await api.get(`user/${id}`);
        setFormUser(us.data);
    }

    const userType = localStorage.getItem('user_type');

    useEffect(() => {
        handleData();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <CardArtist>
                    <Dados>
                        <div>
                            <Input
                                label="Nome"
                                id='name'
                                value={formUser.name ? formUser.name : ""}
                                placeholder="Não informado"
                                className="input" />

                            {userType != 'organizer' &&
                                <>
                                    <Input
                                        label="Facebook"
                                        id='facebookUrl'
                                        value={formUser.facebookUrl ? formUser.facebookUrl : ""}
                                        placeholder="Não informado"
                                        className="input" />
                                    <Input
                                        label="Instagram"
                                        id='instagramUrl'
                                        value={formUser.instagramUrl ? formUser.instagramUrl : ""}
                                        placeholder="Não informado"
                                        className="input" />
                                </>
                            }
                        </div>
                        <div>
                            <Input
                                label="Telefone"
                                placeholder="Não informado"
                                id='cellphone'
                                value={formUser.cel_phone ? formUser.cel_phone : ""}
                                className="input" />

                            {userType != 'organizer' &&
                                <>
                                    <Input
                                        label="TikTok"
                                        id='tiktokUrl'
                                        value={formUser.tiktokUrl ? formUser.tiktokUrl : ""}
                                        placeholder="Não informado"
                                        className="input" />
                                    <Input
                                        label="Youtube"
                                        placeholder="Não informado"
                                        id='youtubeUrl'
                                        value={formUser.youtubeUrl ? formUser.youtubeUrl : ""}
                                        className="input" />
                                </>
                            }
                        </div>
                    </Dados>
                </CardArtist>
                <Feed route="/posts" userId={id} />
            </Container>
            <Footer />
        </>

    );
}