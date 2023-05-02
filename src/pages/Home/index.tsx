
import { useEffect, useState } from "react";
import Feed from "../../components/Feed";
import { Navigation } from "../../components/Navigation";

import { Container } from "./styles";
import { IPost } from "../../interfaces/IPost";
import { api } from "../../services/api.service";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

interface Props {
    post: IPost;
}

export function Home() {

    return (
        <>
            <Header />
            <Container>
                <Navigation />
                <Feed route="/post" />
            </Container>
            <Footer />
        </>
    );
}