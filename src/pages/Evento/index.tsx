import { ChangeEvent, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Categorias, CategoryContainer, Container, Dados, DadosContainer, H1, ItemCategory, Titulo } from "./styles";
import { api } from "../../services/api.service";
import { Input } from "../../components/Input";
import { pxToRem } from "../../utils/convertToRem.util";
import { Button } from "../../components/Button";
import { RouteComponentProps } from "react-router-dom";
import { IEvent } from "../../interfaces/IEvent";
import { ICategory } from "../../interfaces/ICategory";
import { Text } from "../../components/Text";
import { ICategories } from "../../interfaces/ICategories";

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

interface response {
    category: ICategories[];
}

export function Evento(props: Props) {

    const id = props.match.params.id;

    const [formEvent, setFormUser] = useState<IEvent>({} as IEvent)
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);


    async function handleData() {
        const us = await api.get(`event/${id}`);
        setFormUser(us.data);

        const cat = await api.get("/categories");
        setCategories(cat.data);

        const response: response = us.data;

        const categoryArray: ICategory[] = response.category.map(categoryObj => categoryObj.category);

        setSelectedCategories(categoryArray);
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

    function handleChangeCategorie(event: React.MouseEvent<HTMLDivElement>) {

        const id = event.currentTarget.id;

        const categoria = categories.find((cat) => cat.id === id);
        const possuiCategoria = selectedCategories.find((cat) => cat.id === id);

        if (categoria && possuiCategoria == null) {
            setSelectedCategories([...selectedCategories, categoria]);
        }
        else {
            const newSelectedCategories = selectedCategories.filter((categoria) => categoria.id != id)

            setSelectedCategories([...newSelectedCategories]);
        }

    }

    function handleDadosEvent() {

        const categories = selectedCategories.length ? selectedCategories.map(categoria => categoria.id) : [];

        const data = {
            name: formEvent.name,
            budget: formEvent.budget,
            description: formEvent.description,
            people: formEvent.people,
            dh_event: formEvent.dh_event,
            dh_expiration: formEvent.dh_expiration,
            categories: categories
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

    function categoriaEstaNaLista(idCategoria: string): boolean {
        return selectedCategories.some((categoria: ICategory) => categoria.id == idCategoria);
    }

    return (
        <>
            <Header />
            <Container>
                <H1>Editar Evento</H1>
                <DadosContainer>
                    <Titulo>Dados Basicos</Titulo>
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
                                value={formEvent.description}
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
                                value={formEvent.people}
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
                    <CategoryContainer>
                        <Titulo>Categorias</Titulo>
                        <Categorias>
                            {categories.map((category) => {
                                return (
                                    <ItemCategory
                                        key={category.id}
                                        id={category.id}
                                        onClick={handleChangeCategorie}
                                        style={{ background: categoriaEstaNaLista(category.id) ? '#50E3C2' : '#ececec' }}>
                                        {category.name}
                                    </ItemCategory>
                                )
                            })}

                        </Categorias>
                    </CategoryContainer>
                    <Button onClick={handleDadosEvent} style={{ margin: '0 auto' }}>Atualizar</Button>
                </DadosContainer>
            </Container>
            <Footer />
        </>
    )

}





