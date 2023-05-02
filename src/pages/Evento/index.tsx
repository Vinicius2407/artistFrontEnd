import { ChangeEvent, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Dados, DadosContainer } from "./styles";
import { api } from "../../services/api.service";
import { Input } from "../../components/Input";
import { pxToRem } from "../../utils/convertToRem.util";
import { Button } from "../../components/Button";
import { RouteComponentProps } from "react-router-dom";
import { IEvent } from "../../interfaces/IEvent";

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}
export function Evento(props: Props) {

    const id = props.match.params.id;

    const [formEvent, setFormUser] = useState<IEvent>({} as IEvent)

    async function handleData() {
        const us = await api.get(`event/${id}`);
        setFormUser(us.data);

    }

    useEffect(() => {
        handleData();
    }, []);


    //Pega o evento aqui e faz os esquema
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        setFormUser(prevFields => ({
            ...prevFields,
            [id]: value
        }));
    }

    function handleDadosEvent() {
        const data = {

        };
        api.put(`event/${id}`, data)
            .then(response => {
                alert('Dados basicos atualizados com sucesso');
            })
            .catch(error => {
                alert('Tente Novamente');
                console.error('PUT failed:', error);
            });
    }

    function formatDate(date: string): string {
        if (date) {
            const isoDate = new Date(date).toISOString();
            return isoDate.substring(0, 10);
        }
        return '';
    }

    return (
        <>
            <Header />
            <Container>
                <DadosContainer>
                    <Dados>

                        <div>
                            <Input
                                label="Nome"
                                id='name'
                                onChange={handleChange}
                                value={formEvent.name}
                                placeholder="Não informado"
                                style={{
                                    outline: 0,
                                    color: '#fff',
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#9500F6',
                                    padding: '5px 10px',
                                    border: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'Nunito',
                                    fontWeight: 'bold',
                                    marginBottom: '3px'

                                }} />
                            <Input
                                label="Descrição"
                                id='description'
                                onChange={handleChange}
                                value={formEvent.name}
                                placeholder="Não informado"
                                style={{
                                    outline: 0,
                                    color: '#fff',
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#9500F6',
                                    padding: '5px 10px',
                                    border: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'Nunito',
                                    fontWeight: 'bold',
                                    marginBottom: '3px'
                                }} />
                            <Input
                                label="Orçamento"
                                id='budget'
                                onChange={handleChange}
                                value={formEvent.budget}
                                placeholder="Não informado"
                                style={{
                                    outline: 0,
                                    color: '#fff',
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#9500F6',
                                    padding: '5px 10px',
                                    border: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'Nunito',
                                    fontWeight: 'bold',
                                    marginBottom: '3px'
                                }} />
                        </div>
                        <div>
                            <Input
                                label="Público"
                                id='people'
                                onChange={handleChange}
                                value={formEvent.name}
                                placeholder="Não informado"
                                style={{
                                    outline: 0,
                                    color: '#fff',
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#9500F6',
                                    padding: '5px 10px',
                                    border: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'Nunito',
                                    fontWeight: 'bold',
                                    marginBottom: '3px'
                                }} />

                            <Input
                                label="Data do Evento"
                                id='dh_event'
                                type="date"
                                onChange={handleChange}
                                value={formatDate(formEvent.dh_event)}
                                style={{
                                    outline: 0,
                                    color: '#fff',
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#9500F6',
                                    padding: '5px 10px',
                                    border: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'Nunito',
                                    fontWeight: 'bold',
                                    marginBottom: '3px'
                                }} />

                            <Input
                                label="Data de Expiração"
                                id='dh_expiration'
                                type="date"
                                onChange={handleChange}
                                value={formatDate(formEvent.dh_expiration)}
                                style={{
                                    outline: 0,
                                    color: '#fff',
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#9500F6',
                                    padding: '5px 10px',
                                    border: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'Nunito',
                                    fontWeight: 'bold',
                                    marginBottom: '3px'
                                }} />

                        </div>
                    </Dados>
                    <Button onClick={handleDadosEvent} style={{ margin: '0 auto' }}>Atualizar</Button>
                </DadosContainer>
            </Container>
            <Footer />
        </>
    )

}

