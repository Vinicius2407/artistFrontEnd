
import { useEffect, useState } from "react";
import Feed from "../../components/Feed";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Form, Column, Dados } from "../Evento/styles";
import { CardArtist, Container, RedeSocial } from "./styles";
import { RouteComponentProps } from 'react-router-dom';
import { IUser } from "../../interfaces/IUser";
import { api } from "../../services/api.service";
import { PostAuthorAvatar, PostAuthorName } from "../../components/Post/styles";
import { TiktokLogo, FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react'

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
                        </div>
                        <div>
                            <Input
                                label="Telefone"
                                placeholder="Não informado"
                                id='cellphone'
                                value={formUser.cel_phone ? formUser.cel_phone : ""}
                                className="input" />
                        </div>
                    </Dados>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        {formUser.user_type != 'organizer' &&
                            <>
                                <RedeSocial
                                    cor="#3b5998"
                                    id='facebookUrl'>
                                    <FacebookLogo size={25} />
                                </RedeSocial>
                                <RedeSocial
                                    cor="#BD5DAE"
                                    id='instagramUrl'>
                                    <InstagramLogo size={25} />
                                </RedeSocial>
                                <RedeSocial
                                    cor="#72E2ED"
                                    id='tiktokUrl'>
                                    <TiktokLogo size={25} />
                                </RedeSocial>
                                <RedeSocial
                                    cor="#c4302b"
                                    id='youtubeUrl'>
                                    <YoutubeLogo size={25} />
                                </RedeSocial>
                            </>
                        }
                    </div>

                </CardArtist>
                <Feed route="/posts" userId={id} />
            </Container>
            <Footer />
        </>

    );
}