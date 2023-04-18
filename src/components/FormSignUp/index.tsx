import { useEffect, useState } from "react";
import * as PhosphorIcons from "@phosphor-icons/react";

import carinhaMicrofone from "../../assets/images/carinhaComMic.svg";
import segundaImage from "../../assets/images/segundaImage.svg";

import { api } from "../../services/api.service";
import { pxToRem } from "../../utils/convertToRem.util";

import { Input } from "../Input";
import { Text } from "../Text";
import { TextLabel } from "../TextLabel";

import { CategoryContainer, Container, FormContainer, FormContent, ImageContainer, InputLabelContainer, MidiaContainer, SocialContainer, ToggleWrapper } from "./styles";
import { Button } from "../Button";
import { IUser } from "../../interfaces/IUser";
import { IAddressId } from "../../interfaces/IAddressId";
import { Link, useHistory } from "react-router-dom";
import { SignIn } from "../../pages/SignIn";

// Tipagem da interface dos dados Sociais
interface SocialProps {
   id: string;
   name?: string;
   url: string;
}

// Tipagem da interface do componente de ícone
interface IconComponentProps {
   social: SocialProps;
}

// Cria uma função para pegar o ícone da rede social
export function GetIcon({ social }: IconComponentProps) {
   let logoSocial = social.name + "Logo";
   const Icon = PhosphorIcons[logoSocial] as PhosphorIcons.Icon;
   return <Icon size={pxToRem(60)} color="#FFFFFF" />
}

// Tipagem das categorias
interface CategoryProps {
   id: string;
   name: string;
   type: string;
}

// Tipagem da interface do componente de categoria
interface CategoryComponentProps {
   category: CategoryProps;
   onSelectCategory: (id: string) => void;
}

// Cria o componente de categoria
export function CategoryComponent({ category, onSelectCategory }: CategoryComponentProps) {

   return (
      <>
         <div className="category-item">
            <Input
               id={category.id}
               type={"checkbox"}
               className="category"
               value={category.id}
               color="#FFFFFF"
               onChange={(event) => onSelectCategory(event.target.value)}
            />
            <Text fontSize={pxToRem(16)} color={"#FFFFFF"} >
               {category.name}
            </Text>
         </div>
      </>
   )
}

export function Form() {

   // State para o tipo de usuário
   const [isOrganizer, setIsOrganizer] = useState<"organizer" | "artist">("organizer");
   let user_type = isOrganizer === "organizer";

   // State para armazenar as redes sociais e as categorias
   const [socialList, setSocialList] = useState<SocialProps[]>([]);
   const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

   // State para armazenar as categorias selecionadas
   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
   const [selectedSocial, setSelectedSocial] = useState<SocialProps[]>([]);

   // useState dos dados formulário
   const [formDataUser, setFormDataUser] = useState<IUser>({} as IUser);
   const [formAddressId, setFormAddressId] = useState<IAddressId>({} as IAddressId);

   const history = useHistory();

   // Função para selecionar as categorias
   function handleToggleCategory(categoryId: string) {
      if (selectedCategories.includes(categoryId)) {
         setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
      } else {
         setSelectedCategories([...selectedCategories, categoryId]);
      }
   }

   // Função para pegar o valor do input de redes sociais
   function handleBlur(event: any, id: string) {
      if (event.target.value) {
         setSelectedSocial([...selectedSocial, { id: id, url: event.target.value }]);
      }
   }

   // função para trocar o tipo de usuário
   function toggleTypeUser() {
      if (isOrganizer !== "artist") {
         setIsOrganizer("artist");
         setFormDataUser({ ...formDataUser, user_type: isOrganizer });
      } else {
         setIsOrganizer("organizer");
         setFormDataUser({ ...formDataUser, user_type: isOrganizer });
      }
      console.log(isOrganizer);
   }

   // Função para enviar os dados do formulário
   function handleSubmit() {
      const data = {
         name: formDataUser.name,
         username: formDataUser.username,
         password: formDataUser.password,
         email: formDataUser.email,
         user_type: isOrganizer,
         document: formDataUser.document,
         cell_phone: formDataUser.cellphone,
         addresId: {
            street: formAddressId.street,
            number: formAddressId.number,
            neighborhood: formAddressId.neighborhood,
            city: formAddressId.city,
            contry: formAddressId.contry,
            zipCode: formAddressId.zipCode,
         },
         social: selectedSocial,
         categories: selectedCategories,
      };

      try {
         api.post("/user", data)
            .then((response) => {
               if (response.status === 201) {
                  history.push("/"); 
               }
            }).catch((error) => {
               alert(`Erro ao cadastrar: ${error}`);
            })
         console.log(data)
      } catch (error) {
         alert(`Erro ao cadastrar: ${error}`);
      }
   }

   // Useeffect para pegar as categorias e as redes sociais
   // HandleList é uma função assíncrona que faz a requisição para a API
   async function handleList() {
      const socials = await api.get("/social");
      setSocialList(socials.data);

      const categories = await api.get("/categories");
      setCategoryList(categories.data);
   }

   // useEffect para chamar a função handleList
   useEffect(() => {
      handleList();
   }, []);

   return (
      <>
         <Container>
            <TextLabel style={{ fontSize: pxToRem(80), color: "#FFF", padding: "4rem" }}>Arte é isso, arte é aqui!</TextLabel>
            <FormContainer>

               <ToggleWrapper>
                  <div className="description">
                     Artista?
                  </div>
                  <label className="switch">
                     <input type="checkbox" className="hidden-toggle" onClick={toggleTypeUser} />
                     <div className="slider">
                        <div className="button"></div>
                     </div>
                  </label>
               </ToggleWrapper>

               <TextLabel style={{ fontSize: pxToRem(40), color: "#FFF" }}>Cadastro
                  {isOrganizer === "organizer" ? " de Organizador" : " de Artista"}
               </TextLabel>

               <FormContent>
                  <InputLabelContainer>
                     <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                     }}>Nome:</TextLabel>
                     <Input
                        placeholder="João"
                        className="inputName"
                        value={formDataUser.name}
                        onChange={(event) => setFormDataUser({ ...formDataUser, name: event.target.value })}
                        style={{
                           width: '100%',
                           height: pxToRem(32),
                           borderRadius: pxToRem(8),
                           background: "#EFF4F9"
                        }}
                     />

                     <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                     }}>E-mail:</TextLabel>
                     <Input
                        type="email"
                        placeholder="joão@joão.com"
                        className="inputEmail"
                        value={formDataUser.email}
                        onChange={(event) => setFormDataUser({ ...formDataUser, email: event.target.value })}
                        style={{
                           width: '100%',
                           height: pxToRem(32),
                           borderRadius: pxToRem(8),
                           background: "#EFF4F9"
                        }}
                     />

                     <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                     }}>Nome de Usuario:</TextLabel>
                     <Input
                        placeholder="joao123"
                        className="inputUsername"
                        value={formDataUser.username}
                        onChange={(event) => setFormDataUser({ ...formDataUser, username: event.target.value })}
                        style={{
                           width: "100%",
                           height: pxToRem(32),
                           borderRadius: pxToRem(8),
                           background: "#EFF4F9"
                        }}
                     />

                     <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                     }}>Coloque sua senha:</TextLabel>
                     <Input
                        type="password"
                        placeholder="Minimo de 8 caracteres"
                        className="inputPassword"
                        value={formDataUser.password}
                        onChange={(event) => setFormDataUser({ ...formDataUser, password: event.target.value })}
                        style={{
                           width: "100%",
                           height: pxToRem(32),
                           borderRadius: pxToRem(8),
                           background: "#EFF4F9"
                        }}
                     />

                     <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                     }}>CPF ou CNPJ:</TextLabel>
                     <Input
                        placeholder="111.111.111-01"
                        className="inputDocument"
                        value={formDataUser.document}
                        onChange={(event) => setFormDataUser({ ...formDataUser, document: event.target.value })}
                        style={{
                           width: "100%",
                           height: pxToRem(32),
                           borderRadius: pxToRem(8),
                           background: "#EFF4F9"
                        }}
                     />

                     <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                     }}>Telefone</TextLabel>
                     <Input
                        placeholder="(45) 9 9999-9999"
                        className="inputPhone"
                        value={formDataUser.cellphone}
                        onChange={(event) => setFormDataUser({ ...formDataUser, cellphone: event.target.value })}
                        style={{
                           width: "100%",
                           height: pxToRem(32),
                           borderRadius: pxToRem(8),
                           background: "#EFF4F9"
                        }}
                     />

                  </InputLabelContainer>

                  {user_type ? (
                     <> {/* Organizador */}
                        <InputLabelContainer>

                           <TextLabel style={{
                              color: "#FFFFFF",
                              fontFamily: "Nunito",
                              fontSize: pxToRem(20),
                              fontWeight: 600,
                           }}>Cep: </TextLabel>
                           <Input
                              type="number"
                              placeholder="Ex: 12345-678"
                              className="inputZipCode"
                              value={formAddressId.zipCode}
                              onChange={(event) => setFormAddressId({ ...formAddressId, zipCode: event.target.value })}
                              // onChange={handleChange}
                              style={{
                                 width: "100%",
                                 height: pxToRem(32),
                                 borderRadius: pxToRem(8),
                                 background: "#EFF4F9"
                              }}
                           />

                           <TextLabel style={{
                              color: "#FFFFFF",
                              fontFamily: "Nunito",
                              fontSize: pxToRem(20),
                              fontWeight: 600,
                           }}>Número da Casa: </TextLabel>
                           <Input
                              type="number"
                              placeholder="Ex: 240"
                              className="inputNumber"
                              value={formAddressId.number}
                              onChange={(event) => setFormAddressId({ ...formAddressId, number: event.target.value })}
                              style={{
                                 width: "100%",
                                 height: pxToRem(32),
                                 borderRadius: pxToRem(8),
                                 background: "#EFF4F9"
                              }}
                           />

                           <TextLabel style={{
                              color: "#FFFFFF",
                              fontFamily: "Nunito",
                              fontSize: pxToRem(20),
                              fontWeight: 600,
                           }}>Avenida/Rua/Logradouro: </TextLabel>
                           <Input
                              placeholder="Av. Silvio Américo Sasdelli"
                              className="inputStreet"
                              value={formAddressId.street}
                              onChange={(event) => setFormAddressId({ ...formAddressId, street: event.target.value })}
                              style={{
                                 width: "100%",
                                 height: pxToRem(32),
                                 borderRadius: pxToRem(8),
                                 background: "#EFF4F9"
                              }}
                           />

                           <TextLabel style={{
                              color: "#FFFFFF",
                              fontFamily: "Nunito",
                              fontSize: pxToRem(20),
                              fontWeight: 600,
                           }}>Bairro:</TextLabel>
                           <Input
                              type="text"
                              placeholder="Ex: Centro"
                              className="inputNeighborhood"
                              value={formAddressId.neighborhood}
                              onChange={(event) => setFormAddressId({ ...formAddressId, neighborhood: event.target.value })}
                              style={{
                                 width: "100%",
                                 height: pxToRem(32),
                                 borderRadius: pxToRem(8),
                                 background: "#EFF4F9"
                              }}
                           />

                           <TextLabel style={{
                              color: "#FFFFFF",
                              fontFamily: "Nunito",
                              fontSize: pxToRem(20),
                              fontWeight: 600,
                           }}>Cidade:</TextLabel>
                           <Input
                              placeholder="Ex: Foz do Iguaçu"
                              className="inputCity"
                              value={formAddressId.city}
                              onChange={(event) => setFormAddressId({ ...formAddressId, city: event.target.value })}
                              style={{
                                 width: "100%",
                                 height: pxToRem(32),
                                 borderRadius: pxToRem(8),
                                 background: "#EFF4F9"
                              }}
                           />

                           <TextLabel style={{
                              color: "#FFFFFF",
                              fontFamily: "Nunito",
                              fontSize: pxToRem(20),
                              fontWeight: 600,
                           }}>País:</TextLabel>
                           <Input
                              type="text"
                              placeholder="Ex: Brasil"
                              className="inputContry"
                              value={formAddressId.contry}
                              onChange={(event) => setFormAddressId({ ...formAddressId, contry: event.target.value })}
                              style={{
                                 width: "100%",
                                 height: pxToRem(32),
                                 borderRadius: pxToRem(8),
                                 background: "#EFF4F9"
                              }}
                           />

                        </InputLabelContainer>
                     </>
                  ) : (
                     <> {/* Artista */},
                        <MidiaContainer>
                           <TextLabel style={{
                              color: "#FFFFFF",
                              fontFamily: "Nunito",
                              fontSize: pxToRem(20),
                              fontWeight: 600,
                           }}>Redes Sociais</TextLabel>

                           <SocialContainer>
                              {socialList.map((social) => {
                                 return (
                                    <div className="social-item">
                                       <GetIcon
                                          social={social}
                                       />
                                       <Input
                                          className="input-social"
                                          type="text"
                                          placeholder={social.name}
                                          key={social.id}
                                          // onChange={handleSocial}
                                          onBlur={(event) => handleBlur(event, social.id)}
                                          color="#FFFFFF"
                                          style={{
                                             width: "100%",
                                             height: pxToRem(32),
                                             borderRadius: pxToRem(8),
                                             background: "#EFF4F9",
                                          }} />

                                    </div>
                                 )
                              })}
                           </SocialContainer>

                           <TextLabel style={{
                              color: "#FFFFFF",
                              fontFamily: "Nunito",
                              fontSize: pxToRem(20),
                              fontWeight: 600,
                           }}>Categorias</TextLabel>

                           <CategoryContainer>
                              {categoryList.map((category) => {
                                 return (
                                    <CategoryComponent
                                       category={category}
                                       onSelectCategory={handleToggleCategory}
                                    />
                                 )
                              }
                              )}
                           </CategoryContainer>

                        </MidiaContainer>
                     </>
                  )}

               </FormContent>

               <ImageContainer>
                  <img src={carinhaMicrofone} alt="" />
                  <img src={segundaImage} alt="" />
               </ImageContainer>

               <Button className="button-submit" type="submit" onClick={handleSubmit}>Enviar Cadastro</Button>

            </FormContainer >

         </Container >
      </>
   )
}