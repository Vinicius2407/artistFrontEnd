
import Feed from "../../components/Feed";
import { Navigation } from "../../components/Navigation";
import { useParams } from 'react-router-dom';
import { Container } from "./styles";
import { IPost } from "../../interfaces/IPost";
import { useEffect, useState } from "react";
import { api } from "../../services/api.service";


export default function Portifolio() {

    const userId  = useParams<{ id: string }>();

    return (
        <Container>
            <Feed route="/posts" userId={userId.id} />
        </Container>

    );
}