import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CardArtist, CardHeader, Container, Imagem, DadosContainer, Btn } from "./styles";
import { api } from "../../services/api.service";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { IEvent } from "../../interfaces/IEvent";
import { ICategory } from "../../interfaces/ICategory";
import { ICategories } from "../../interfaces/ICategories";
import { IAddressId } from "../../interfaces/IAddressId";
import { H1 } from "../Evento/styles";
import { Camera, Check, Person } from "@phosphor-icons/react";
import { Button } from "../../components/Button";

interface MatchParams {
   id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

interface response {
   category: ICategories[];
   address: IAddressId;
}

export function Candidaturas(props: Props) {

   const id = props.match.params.id;

   const [event, setEvent] = useState<IEvent>({} as IEvent)
   const [candidaturas, setCandidaturas] = useState<ICategory[]>([]);

   const user_id = localStorage.getItem('user_id');

   const history = useHistory();

   useEffect(() => {
      handleData();
   }, []);

   async function handleData() {
      const us = await api.get(`event/${id}`);
      setEvent(us.data);

      const response: response = us.data;
   }

   return (
      <>
         <Header />
         <Container>
            <H1>Candidaturas Evento: {event.name}</H1>
            <DadosContainer>
               {event.event_artist?.map((candidatura) => (
                  <CardArtist key={candidatura.id}>
                     <CardHeader>
                        {candidatura.artist.profile_image ? <Imagem src={candidatura.artist.profile_image} /> : <Person ></Person>}
                        <span style={{ color: '#000' }}> {candidatura.artist.name}</span>
                        <Btn title={candidatura.dh_action == null ? candidatura.accept ? 'Reprovar Candidatura' : 'Aprovar Candidatura' : 'Avaliar a candidatura'} />  

                        
                     </CardHeader>
                  </CardArtist>
               ))}
            </DadosContainer>
         </Container>
         <Footer />
      </>
   )

}





