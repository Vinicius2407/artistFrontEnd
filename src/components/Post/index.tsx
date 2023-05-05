
import { IPost } from "../../interfaces/IPost";
import Carousel from "../Carousel";
import { PostAuthorAvatar, PostAuthorName, PostContainer, PostContent, PostHeader, PostAuthorInfo, PostAuthorCat, PostAuthorCategories, PostEventContainer, Label, EventInfo, EventAddress, Input, EditButton } from "./styles";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { Pencil } from "@phosphor-icons/react";

interface Props {
    post: IPost;
}

const Post: React.FC<Props> = ({ post }) => {

    const user_type = localStorage.getItem('user_type');
    const user_id = localStorage.getItem('user_id');

    function formatDateString(dateString: string): string {

        if (dateString) {
            const dateObj = new Date(dateString);
            const day = dateObj.getUTCDate().toString().padStart(2, "0");
            const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
            const year = dateObj.getUTCFullYear();
            return `${day}/${month}/${year}`;
        }
        return 'Não informado.'
    }

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
                    {user_id == post.user.id &&
                        <>
                            <Link target="_blank" to={post.event ? `/evento/${post.event.id}` : `/post/${post.id}`}>
                                <EditButton title="Editar">
                                    <Pencil />
                                </EditButton>
                            </Link>
                        </>}

                </PostHeader>
                <PostContent>{post.description}</PostContent>
                {post.event &&
                    <>
                        <PostEventContainer>
                            <EventInfo>
                                <MyInput id="evento" label="Evento" value={post.event.name} />
                                <MyInput id="budget" label="Orçamento" value={post.event.budget} />
                                <MyInput id="people" label="Publico" value={post.event.people} />
                                <MyInput id="budget" label="Data do Evento" value={formatDateString(post.event.dh_event)} />
                                <MyInput id="people" label="Data de Expiração" value={formatDateString(post.event.dh_expiration)} />
                            </EventInfo>
                            <EventAddress>
                                <MyInput id="numero" label="Numero" value={post.event.address.number} />
                                <MyInput id="rua" label="Rua" value={post.event.address.street} />
                                <MyInput id="bairro" label="Bairro" value={post.event.address.neighborhood} />
                                <MyInput id="cidade" label="Cidade" value={post.event.address.city} />
                                <MyInput id="pais" label="Pais" value={post.event.address.contry} />
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

