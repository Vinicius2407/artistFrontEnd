
import Feed from "../../components/Feed";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}
export function Portifolio(props: Props) {

    const id = props.match.params.id;

    return (
        <>
            <Header />
            <Container>
                <Feed route="/posts" userId={id} />
            </Container>
            <Footer />
        </>

    );
}