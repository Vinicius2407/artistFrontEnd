import { ChangeEvent, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IUser } from "../../interfaces/IUser";
import { Categorias, Container, Dados, DadosContainer, H1, ItemCategory } from "./styles";
import { api } from "../../services/api.service";
import { Input } from "../../components/Input";
import { pxToRem } from "../../utils/convertToRem.util";
import { Button } from "../../components/Button";
import { IAddressId } from "../../interfaces/IAddressId";
import { Column, Form } from "../Evento/styles";
import { consultarCEP, ViaCepProps } from "../../services/viacep.service";
// import { useHistory } from "react-router-dom";
import { PostAuthorAvatar, PostAuthorName } from "../../components/Post/styles";
import { ICategory } from "../../interfaces/ICategory";
import { ICategories } from "../../interfaces/ICategories";

interface response {
   category: ICategories[];
}

export function Profile() {

   const [formUser, setFormUser] = useState<IUser>({} as IUser)
   const [formAddress, setFormAddress] = useState<IAddressId>({} as IAddressId);
   const [categories, setCategories] = useState<ICategory[]>([]);
   const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);

   const userId = localStorage.getItem(`user_id`);

   // const history = useHistory();

   async function handleData() {
      const us = await api.get(`user/${userId}`);
      setFormUser(us.data);
      setFormAddress(us.data.address);

      const cat = await api.get("/categories");
      setCategories(cat.data);

      if (us.data.categories != undefined || us.data.categories != null) {
         const categoryArray: ICategory[] = us.data.categories.map((categoryObj: { category: any; }) => categoryObj.category);
         setSelectedCategories(categoryArray);
      }
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

   // Atualizando categorias
   function handleChangeCategorie(event: React.MouseEvent<HTMLDivElement>) {
      const id = event.currentTarget.id;

      const categoria = categories.find((cat) => cat.id === id);
      const possuiCategoria = selectedCategories.find((cat) => cat.id === id);

      if (categoria && possuiCategoria == null) {
         setSelectedCategories([...selectedCategories, categoria]);
      } else {
         const newSelectedCategories = selectedCategories.filter((categoria) => categoria.id != id);
         setSelectedCategories([...newSelectedCategories]);
      }
   }

   function categoriaEstaNaLista(idCategoria: string): boolean {
      return selectedCategories.some((categoria: ICategory) => categoria.id === idCategoria);
   }

   // Atualizando dados do usuario
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

   function handleDadosAddress() {

      if (formAddress && formAddress.id) {
         const data = {
            id: formAddress.id,
            zip_code: formAddress.zip_code,
            street: formAddress.street,
            number: formAddress.number,
            neighborhood: formAddress.neighborhood,
            city: formAddress.city,
            contry: formAddress.contry,
            user: userId
         }

         api.put(`address/${formAddress.id}`, data)
            .then(response => {
               alert('Endereço atualizado com sucesso');
            })
            .catch(error => {
               alert('Tente Novamente');
               console.error('PUT failed:', error);
            });
      } else {
         const data = {

            zip_code: formAddress.zip_code,
            street: formAddress.street,
            number: formAddress.number,
            neighborhood: formAddress.neighborhood,
            city: formAddress.city,
            contry: formAddress.contry,
            lat: "",
            long: "",
            user: userId
         }

         api.post(`address/`, data)
            .then(response => {
               alert('Endereço cadastrado com sucesso');
            })
            .catch(error => {
               alert('Tente Novamente');
               console.error('PUT failed:', error);
            });
      }
   }

   function handleDadosCategories() {
      const categories = selectedCategories.length ? selectedCategories.map(categoria => categoria.id) : [];

      const data = {
         user: userId,
         categories: categories,
      };
      api.post(`user_categories/`, data)
         .then(response => {
            alert('Categorias atualizadas com sucesso');
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
            <PostAuthorName style={{ color: "#FFF" }}>{formUser.name}</PostAuthorName>

            {/* Parte dos dados do usuario */}
            <H1>Editar Usuario</H1>
            <DadosContainer>
               <Dados>
                  <div>
                     <Input
                        label="Nome"
                        id='name'
                        onChange={handleChange}
                        value={formUser.name ? formUser.name : ""}
                        placeholder="Não informado"
                        className="input" />
                     <Input
                        label="Usuario"
                        id='username'
                        onChange={handleChange}
                        value={formUser.username ? formUser.username : ""}
                        placeholder="Não informado"
                        className="input" />
                     <Input
                        label="Url Foto"
                        id='profile_image'
                        onChange={handleChange}
                        value={formUser.profile_image ? formUser.profile_image : ""}
                        placeholder="Não informado"
                        className="input" />
                     <Input
                        label="Senha"
                        placeholder="Não informado"
                        type="password"
                        id='password'
                        onChange={handleChange}
                        value={formUser.password ? formUser.password : ""}
                        className="input" />
                  </div>
                  <div>
                     <Input
                        label="Email"
                        id='email'
                        onChange={handleChange}
                        value={formUser.email ? formUser.email : ""}
                        placeholder="Não informado"
                        className="input" />
                     <Input
                        label="CPF/CNPJ"
                        placeholder="Não informado"
                        id='document'
                        onChange={handleChange}
                        value={formUser.document ? formUser.document : ""}
                        className="input" />

                     <Input
                        label="Telefone"
                        placeholder="Não informado"
                        id='cellphone'
                        onChange={handleChange}
                        value={formUser.cel_phone ? formUser.cel_phone : ""}
                        className="input" />

                  </div>
               </Dados>
               <Button className="buttonHandle" onClick={handleDadosUser} style={{ margin: '0 auto' }}>Atualizar</Button>
            </DadosContainer>

            {/* Parte dos endereços */}
            <H1 style={{ marginTop: "2rem" }}>Editar Endereço</H1>
            <DadosContainer>
               <Form>
                  <Column>
                     <Input
                        label="CEP"
                        placeholder="Não informado"
                        id='zip_code'
                        onChange={handleChangeAddress}
                        value={formAddress != null ? formAddress.zip_code : ""}
                        className="input" />
                     <Input
                        label="Bairro"
                        placeholder="Não informado"
                        id='neighborhood'
                        onChange={handleChangeAddress}
                        value={formAddress != null ? formAddress.neighborhood : ""}
                        className="input" />

                  </Column>
                  <Column>
                     <Input
                        label="Number"
                        placeholder="Não informado"
                        id='number'
                        onChange={handleChangeAddress}
                        value={formAddress != null ? formAddress.number : ""}
                        className="input" />
                     <Input
                        label="Cidade"
                        placeholder="Não informado"
                        id='city'
                        onChange={handleChangeAddress}
                        value={formAddress != null ? formAddress.city : ""}
                        className="input" />
                  </Column>
                  <Column>
                     <Input
                        label="Rua/Avenida"
                        placeholder="Não informado"
                        id='street'
                        onChange={handleChangeAddress}
                        value={formAddress != null ? formAddress.street : ""}
                        className="input" />
                     <Input
                        label="País"
                        placeholder="Não informado"
                        id='contry'
                        onChange={handleChangeAddress}
                        value={formAddress != null ? formAddress.contry : ""}
                        className="input" />
                  </Column>
               </Form>
               <Button className="buttonHandle" onClick={handleDadosAddress} style={{ margin: '0 auto' }}> {formAddress && formAddress.id != null ? "Atualizar" : "Inserir"}</Button>
            </DadosContainer>

            {/* Parte das categorias */}
            <H1 style={{ marginTop: "2rem" }}>Categorias</H1>
            <DadosContainer>
               <Form>
                  <Column spanAll>
                     <Categorias>
                        {categories.map((category) => {
                           return (
                              <ItemCategory
                                 key={category.id}
                                 id={category.id}
                                 onClick={handleChangeCategorie}
                                 style={{ background: categoriaEstaNaLista(category.id) ? "#50E3C2" : "#FFF" }}                              >
                                 {category.name}
                              </ItemCategory>
                           );
                        })}
                     </Categorias>
                  </Column>
               </Form>
               <Button className="buttonHandle" onClick={handleDadosCategories} style={{ margin: '0 auto' }}> {formAddress && formAddress.id != null ? "Atualizar" : "Inserir"}</Button>
            </DadosContainer>

         </Container>
         <Footer />
      </>
   )
}

