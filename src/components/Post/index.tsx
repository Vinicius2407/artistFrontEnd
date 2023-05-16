
import { IPost } from "../../interfaces/IPost";
import Carousel from "../Carousel";
import { PostAuthorAvatar, PostAuthorName, PostContainer, PostContent, PostHeader, PostAuthorInfo, PostAuthorCat, PostAuthorCategories, PostEventContainer, Label, EventInfo, EventAddress, Input, EditButton, Address, Span } from "./styles";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { Pencil, MapPin } from "@phosphor-icons/react";
import Gallery from "../Gallery";
import mapa from "../../assets/images/map.png";

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
                        <PostAuthorName><Link to={`/portifolio/${post.user.id}`}> {post.user.name} </Link> </PostAuthorName>
                        <PostAuthorCategories>
                            {post.user.user_type == 'artist' && post.user.categories.map(cat => (
                                <PostAuthorCat key={cat.categoryId}>{cat.category.name}</PostAuthorCat>
                            ))}
                            {post.user.user_type == 'organizer' && post.event && post.event.category.map(cat => (
                                <PostAuthorCat key={cat.categoryId}>{cat.category.name}</PostAuthorCat>
                            ))}
                        </PostAuthorCategories>
                    </PostAuthorInfo>
                    {user_id == post.user.id &&
                        <>
                            <Link to={`/post/${post.id}`}>
                                <EditButton title="Editar Post">
                                    <Pencil />
                                </EditButton>
                            </Link>
                        </>}

                </PostHeader>
                <PostContent readOnly value={post.description} />
                <Gallery medias={post.medias} />
                {post.event &&
                    <>
                        <PostEventContainer>                            
                            <EventInfo>
                                <MyInput id="evento" label="Evento" value={post.event.name} />
                                <MyInput id="budget" label="Orçamento" value={post.event.budget} />
                                <MyInput id="people" label="Publico" value={post.event.people} />
                            </EventInfo>
                            <EventAddress>
                                <Span>{`Data: ${formatDateString(post.event.dh_event)} | Candidaturas: ${formatDateString(post.event.dh_expiration)}`}</Span>
                                <img src={mapa} />
                                <Address>
                                    <MapPin size={20} color='#9500F6' />
                                    <h3 style={{ color: '#9500F6', margin: '5px' }} >
                                        {`${post.event.address.street}, ${post.event.address.number}, ${post.event.address.neighborhood}`}
                                    </h3>
                                </Address>
                            </EventAddress>
                            <Link to={`/evento/${post.event.id}`}>
                                <EditButton title="Editar Evento">
                                    <Pencil />
                                </EditButton>
                            </Link>
                        </PostEventContainer>
                        {
                            user_type == 'artist' &&
                            user_id != post.user.id &&
                            <Button style={{ margin: '0 auto' }} >Eu quero!</Button>
                        }
                    </>
                }
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

