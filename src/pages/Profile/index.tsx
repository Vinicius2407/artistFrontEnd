import { ChangeEvent, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IUser } from "../../interfaces/IUser";
import { Container, Dados, DadosContainer, H1 } from "./styles";
import { api } from "../../services/api.service";
import { Input } from "../../components/Input";
import { pxToRem } from "../../utils/convertToRem.util";
import { Button } from "../../components/Button";
import { IAddressId } from "../../interfaces/IAddressId";
import { Column, Form } from "../Evento/styles";
import { consultarCEP, ViaCepProps } from "../../services/viacep.service";
import { useHistory } from "react-router-dom";
import { PostAuthorAvatar, PostAuthorName } from "../../components/Post/styles";

export function Profile() {

    const [formUser, setFormUser] = useState<IUser>({} as IUser)
    const [formAddress, setFormAddress] = useState<IAddressId>({} as IAddressId);
    const userId = localStorage.getItem(`user_id`);

    const history = useHistory();

    async function handleData() {
        const us = await api.get(`user/${userId}`);
        console.log(us.data)
        setFormUser(us.data);
        setFormAddress(us.data.address);
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

    // Atualizando o endereço
    async function handleChangeAddress(event: ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        if (id == 'zip_code') {
            if (value.length < 8) {
                setFormAddress(prevFields => ({
                    ...prevFields,
                    [id]: value
                }));
                return;
            } else {
                const cep = await consultarCEP(value);
                if (cep == undefined) {
                    alert('CEP não encontrado');
                    return;
                } else {
                    setFormAddress(prevFields => ({
                        ...prevFields,
                        zip_code: cep.cep,
                        street: cep.logradouro,
                        neighborhood: cep.bairro,
                        city: cep.localidade,
                    }));
                }
            }
        } else {
            setFormAddress(prevFields => ({
                ...prevFields,
                [id]: value
            }));
        }
    }

    function handleDadosUser() {
        const data = {
            name: formUser.name,
            username: formUser.username,
            password: formUser.password,
            user_type: formUser.user_type,
            document: formUser.document,
            email: formUser.email,
            profile_image: formUser.profile_image,
            cel_phone: formUser.cel_phone,
            status: formUser.status
        };
        api.put(`user/${userId}`, data)
            .then(response => {
                alert('Dados basicos atualizados com sucesso');
                history.goBack();
            })
            .catch(error => {
                alert('Tente Novamente');
                console.error('PUT failed:', error);
            });
    }

    function handleDadosAddress() {
        const data: IAddressId = {
            id: formAddress.id,
            zip_code: formAddress.zip_code,
            street: formAddress.street,
            number: formAddress.number,
            neighborhood: formAddress.neighborhood,
            city: formAddress.city,
            contry: formAddress.contry,
        }

        api.put(`address/${formAddress.id}`, data)
        .then(response => {
            alert('Endereço atualizado com sucesso');
            history.goBack();
        })
        .catch(error => {
            alert('Tente Novamente');
            console.error('PUT failed:', error);
        });
    }

    return (
        <>
            <Header />
            <Container>
            <PostAuthorAvatar src={formUser.profile_image ? formUser.profile_image : 'https://picsum.photos/50'} alt="foto" />
            <PostAuthorName style={{color: "#FFF"}}>{formUser.name}</PostAuthorName>
                <H1>Editar Usuario</H1>
                <DadosContainer>
                    <Dados>
                        <div>
                            <Input
                                label="Usuario"
                                id='username'
                                onChange={handleChange}
                                value={formUser.username}
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
                                label="Nome"
                                id='name'
                                onChange={handleChange}
                                value={formUser.name}
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
                                label="Url Foto"
                                id='profile_image'
                                onChange={handleChange}
                                value={formUser.profile_image}
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
                                label="Senha"
                                placeholder="Não informado"
                                type="password"
                                id='password'
                                onChange={handleChange}
                                value={formUser.password}
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
                                label="Email"
                                id='email'
                                onChange={handleChange}
                                value={formUser.email}
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
                                label="CPF/CNPJ"
                                placeholder="Não informado"
                                id='document'
                                onChange={handleChange}
                                value={formUser.document}
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
                                label="Telefone"
                                placeholder="Não informado"
                                id='cellphone'
                                onChange={handleChange}
                                value={formUser.cel_phone}
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
                    <Button onClick={handleDadosUser} style={{ margin: '0 auto' }}>Atualizar</Button>
                </DadosContainer>
                <H1 style={{ marginTop: "2rem" }}>Editar Endereço</H1>
                <DadosContainer>
                    <Form>
                        <Column>
                            <Input
                                label="CEP"
                                placeholder="Não informado"
                                id='zip_code'
                                onChange={handleChangeAddress}
                                value={formAddress.zip_code}
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
                                label="Bairro"
                                placeholder="Não informado"
                                id='neighborhood'
                                onChange={handleChangeAddress}
                                value={formAddress.neighborhood}
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

                        </Column>
                        <Column>
                            <Input
                                label="Number"
                                placeholder="Não informado"
                                id='number'
                                onChange={handleChangeAddress}
                                value={formAddress.number}
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
                                label="Cidade"
                                placeholder="Não informado"
                                id='city'
                                onChange={handleChangeAddress}
                                value={formAddress.city}
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
                        </Column>
                        <Column>
                            <Input
                                label="Rua/Avenida"
                                placeholder="Não informado"
                                id='street'
                                onChange={handleChangeAddress}
                                value={formAddress.street}
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
                                label="País"
                                placeholder="Não informado"
                                id='country'
                                onChange={handleChangeAddress}
                                value={formAddress.contry}
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
                        </Column>
                    </Form>
                    <Button onClick={handleDadosAddress} style={{ margin: '0 auto', backgroundColor: '' }}>Atualizar</Button>
                </DadosContainer>
            </Container>
            <Footer />
        </>
    )
}

