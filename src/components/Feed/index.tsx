import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/IPost";
import Carousel from "../Carousel";
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
        const postss = await api.get("/post");
        setPosts(postss.data);        
    }
    useEffect(() => {
        handleList();
      }, [userId]);

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