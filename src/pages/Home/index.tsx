
import { useEffect, useState } from "react";
import Feed from "../../components/Feed";
import { Navigation } from "../../components/Navigation";

import { Container } from "./styles";
import { IPost } from "../../interfaces/IPost";
import { api } from "../../services/api.service";

interface Props {
    post: IPost;
}

export function Home() {
   
    return (
        <Container>
            <Navigation />
            <Feed route="/post"/>
        </Container>
        
    );
}