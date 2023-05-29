
import { IPost } from "../../interfaces/IPost";
import Carousel from "../Carousel";
import { PostAuthorAvatar, PostAuthorName, PostContainer, PostContent, PostHeader, PostAuthorInfo, PostAuthorCat, PostAuthorCategories, PostEventContainer, Label, EventInfo, EventAddress, Input, EditButton, Address, Span } from "./styles";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { Pencil, MapPin } from "@phosphor-icons/react";
import Gallery from "../Gallery";
import mapa from "../../assets/images/map.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api.service";

interface Props {
    post: IPost;
}

const Post: React.FC<Props> = ({ post }) => {

    const user_type = localStorage.getItem('user_type');
    const user_id = localStorage.getItem('user_id');

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
                    {post.user.user_type == 'organizer' ? <div></div> : <Rating postUserId={post.user.id} ratingUser={post.user.rating} userId={user_id} post={post} userType={user_type} />}
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
                            {post.event && user_id == post.user.id && <Link to={`/evento/${post.event.id}`}>
                                <EditButton title="Editar Evento">
                                    <Pencil />
                                </EditButton>
                            </Link>
                            }
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

function Star({ selected, onSelect, title, post, userId, userType }: any) {
    return (
        <>
            {userId !== post.user.id && userType == "organizer" ? <span title={title} style={{ cursor: 'pointer', color: "#000" }} onClick={onSelect}>{selected ? '★' : '☆'}</span>
                : <span style={{ color: "#000" }}>{selected ? '★' : '☆'}</span>}
        </>
    )
}

function Rating({ postUserId, ratingUser, userId, post, userType }: any) {
    const [rating, setRating] = useState(!ratingUser ? 0 : ratingUser); // Valor inicial da avaliação
    const [ratingHover, setRatingHover] = useState(0); // Valor da avaliação ao passar o mouse
    
    async function handleSelect(selectedRating: number){
        setRating(selectedRating);

        const data = {
            user: postUserId,
            userRate: userId,
            value: selectedRating
        }

        await api.post("/rating", data)
            .then(response => {
                setRating(response.data);
                setRatingHover(0);
            })
            .catch(response => {
                alert(response.response.data.message);
                setRating(rating);
            });
    };
    
    useEffect(() => {
    }, [rating]);

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    selected={ratingHover == 0 ? star <= rating : star <= ratingHover}
                    onSelect={() => handleSelect(star)}
                    title={`Avaliar com ${star} estrela(s)`}
                    user_id={userId}
                    post={post}
                    userType={userType}
                />
            ))}
        </div>
    );
};

export default Post;

