import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/IPost";
import { FeedContainer } from "./styles";
import { api } from "../../services/api.service";
import Post from "../Post";

interface FeedProps {
    route: string;
    userId?: string;
}

  function Feed({ route, userId }: FeedProps) {

    const [posts, setPosts] = useState<IPost[]>([]);

    async function handleList() {
        const postss = await api.get(userId ? `${route}/${userId}`: route );
        setPosts(postss.data);        
    }
    useEffect(() => {
        handleList();
      }, []);

    return (
        <>
            {posts.length == 0 && <h1> Nada por aqui.</h1>}
            <FeedContainer>
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