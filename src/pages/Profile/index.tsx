import { ChangeEvent, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IUser } from "../../interfaces/IUser";
import { Container, Dados, DadosContainer } from "./styles";
import { api } from "../../services/api.service";
import { Input } from "../../components/Input";
import { pxToRem } from "../../utils/convertToRem.util";
import { Button } from "../../components/Button";

export function Profile() {

    const [formUser, setFormUser] = useState<IUser>({} as IUser)
    const userId = localStorage.getItem(`user_id`);

    async function handleData() {
        const us = await api.get(`user/${userId}`);
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
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#fff',
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
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#fff',
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
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#fff',
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
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#fff',
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
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#fff',
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
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#fff',
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
                                    width: '90%',
                                    height: pxToRem(32),
                                    borderRadius: pxToRem(8),
                                    background: '#fff',
                                    padding: '5px 10px',
                                    border: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'Nunito',
                                    fontWeight: 'bold',
                                    marginBottom: '3px'
                                }} />

                        </div>
                    </Dados>
                    <Button onClick={handleDadosUser} style={{ margin: '0 auto', color: '#fff' }}>Atualizar</Button>
                </DadosContainer>
            </Container>
            <Footer />
        </>
    )
}

