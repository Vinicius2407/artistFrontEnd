import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/IPost";
import Carousel from "../Carousel";
import { PostAuthorAvatar, PostAuthorName, PostContainer, PostContent, PostHeader, PostAuthorInfo, PostAuthorCat, PostAuthorCategories, PostEventContainer, Label, EventInfo, EventAddress, Input } from "./styles";
import { api } from "../../services/api.service";
import { Button } from "../Button";
import { Link } from "react-router-dom";

interface Props {
    post: IPost;
}

const Post: React.FC<Props> = ({ post }) => {

    const user_type = localStorage.getItem('user_type');

    return (
        <>
            <PostContainer key={post.id}>
                <PostHeader>
                    <PostAuthorAvatar src={post.user.profile_image ? post.user.profile_image : 'https://picsum.photos/50'} alt="foto" />
                    <PostAuthorInfo>
                        <PostAuthorName><Link target="_blank" to={`/portifolio/${post.user.id}`}> {post.user.name} </Link> </PostAuthorName>
                        <PostAuthorCategories>
                            {post.user.user_type == 'artist' && post.user.categories.map(cat => (
                                <PostAuthorCat key={cat.categoryId}>{cat.category.name}</PostAuthorCat>
                            ))}
                            {post.user.user_type == 'organizer' && post.event.category.map(cat => (
                                <PostAuthorCat key={cat.categoryId}>{cat.category.name}</PostAuthorCat>
                            ))}
                        </PostAuthorCategories>
                    </PostAuthorInfo>
                </PostHeader>
                <PostContent>{post.description}</PostContent>
                {post.event &&
                    <>
                        <PostEventContainer>
                            <EventInfo>
                                <MyInput id="evento" label="Evento" value={post.event.name} />
                                <MyInput id="budget" label="Orçamento" value={post.event.budget} />
                                <MyInput id="people" label="Publico" value={post.event.people} />
                            </EventInfo>
                            <EventAddress>
                                <MyInput id="endereco" label="Endereço" value={post.event.address.street + ' ' + post.event.address.number} />
                                <MyInput id="bairro" label="Bairro" value={post.event.address.neighborhood} />
                                <MyInput id="cidade" label="Cidade" value={post.event.address.city} />
                            </EventAddress>
                        </PostEventContainer>
                        {user_type == 'artist' && <Button style={{ margin: '0 auto' }} >Eu quero!</Button>}
                    </>
                }

                <Carousel images={post.medias} />
            </PostContainer>
        </>
    );
};

interface Prop {
    label: string;
    id: string;
    value: string;
}

function MyInput({ id, label, value }: Prop) {
    return (
        <>
            <Label>{label}</Label>
            <Input id={id}>
                {value ? value : "Não informado"}
            </Input>
        </>
    );
}

export default Post;

