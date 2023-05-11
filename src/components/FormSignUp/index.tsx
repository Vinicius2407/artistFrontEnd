import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import carinhaMicrofone from "../../assets/images/carinhaComMic.svg";
import segundaImage from "../../assets/images/segundaImage.svg";
import TikTok from "../../assets/icons/TikTok.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import YouTube from "../../assets/icons/YouTube.svg";

import { api } from "../../services/api.service";
import { pxToRem } from "../../utils/convertToRem.util";

import { Input } from "../Input";
import { Text } from "../Text";
import { TextLabel } from "../TextLabel";

import { CategoryContainer, Container, FormContainer, ImageContainer, InputLabelContainer, MidiaContainer, SocialContainer, ToggleWrapper } from "./styles";
import { Button } from "../Button";
import { IUser } from "../../interfaces/IUser";
import { IAddressId } from "../../interfaces/IAddressId";
import { SignIn } from "../../pages/SignIn";
import { Form as FormDeFora, Column } from "../../pages/Evento/styles";
import { DadosContainer } from "../../pages/Profile/styles";
import { Files, ImportFiles, Line } from "../../pages/Post/styles";
import FileList from "../FileList";
import { set } from "react-hook-form";

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

   const history = useHistory();

   // State para o tipo de usuário
   const [isOrganizer, setIsOrganizer] = useState<"organizer" | "artist">("organizer");
   let user_type = isOrganizer === "organizer" ? "organizer" : "artist";

   function toggleTypeUser() {
      setIsOrganizer(prevType => prevType === "organizer" ? "artist" : "organizer");
   }

   // Selecionando e Verificando os arquivos
   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
   const MAX_FILE_SIZE = 10 * 1024 * 1024 * 1024; // 10 MB em bytes

   const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      const validFiles = files.filter(
         (file) => file.size <= MAX_FILE_SIZE && (file.type.startsWith("image/"))
      );
      setSelectedFiles((prevSelectedFiles) => {
         const updateFiles = [...prevSelectedFiles, ...validFiles];

         const filePromises = updateFiles.map((file) => {
            return new Promise<string>((resolve, reject) => {
               const reader = new FileReader();

               reader.onload = (event) => {
                  const fileContent = event.target?.result as string;
                  resolve(fileContent);
               };

               reader.onerror = (error) => {
                  reject(error);
               };

               reader.readAsDataURL(file);
            })
         });

         Promise.all(filePromises)
         .then((fileContents) => {
            setFormUser((prevFormUser) => {
               return {
                  ...prevFormUser,
                  profile_image: fileContents[0],
               }
            });
         })
         .catch((error) => {
            console.error(error);
         });

         return updateFiles;
      });
   };


   const [formUser, setFormUser] = useState<IUser>({
      name: "",
      username: "",
      email: "",
      password: "",
   } as IUser);

   function handleChangeUser(event: React.ChangeEvent<HTMLInputElement>) {
      const { id, value } = event.target;
      setFormUser({ ...formUser, [id]: value });
   }

   function handleSubmmitUser() {
      const data = {
         name: formUser.name,
         username: formUser.username,
         password: formUser.password,
         user_type: user_type,
         document: formUser.document,
         email: formUser.email,
         profile_image: selectedFiles[0],
         cel_phone: formUser.cel_phone,
         status: formUser.status,
         addressId: formUser.addressId,
      }

      if (!data.name || !data.username || !data.email || !data.password || !data.user_type || !data.profile_image) {
         alert("Preencha todos os campos!");
         return;
      } else {
         api.post("/users", data).then((response) => {
            alert("Usuário cadastrado com sucesso!");
            history.push("/sign-in");
         }).catch((error) => {
            alert("Erro ao cadastrar usuário!");
            console.log(error);
            return;
         });
      }
   }



   return (
      <>
         <Container>
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

               <DadosContainer style={{ paddingBottom: "0" }}>
                  <FormDeFora>
                     <Column spanAll>
                        <Input
                           label="Nome"
                           placeholder="Não informado"
                           id='name'
                           onChange={handleChangeUser}
                           value={formUser.name}
                           style={{
                              outline: 0,
                              color: '#fff',
                              width: '97.5%',
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
                     <Column spanAll>
                        <Input
                           label="Nome de usuário"
                           placeholder="Não informado"
                           id='username'
                           onChange={handleChangeUser}
                           value={formUser.username}
                           style={{
                              outline: 0,
                              color: '#fff',
                              width: '97.5%',
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
                     <Column spanAll>
                        <Input
                           label="Email"
                           placeholder="Não informado"
                           id='email'
                           onChange={handleChangeUser}
                           value={formUser.email}
                           style={{
                              outline: 0,
                              color: '#fff',
                              width: '97.5%',
                              height: pxToRem(32),
                              borderRadius: pxToRem(8),
                              background: '#9500F6',
                              padding: '5px 10px',
                              border: 'none',
                              fontSize: '14px',
                              fontFamily: 'Nunito',
                              fontWeight: 'bold',
                              marginBottom: '3px'
                           }}
                        />
                     </Column>
                     <Column spanAll>
                        <Input
                           label="Senha"
                           placeholder="Não informado"
                           type="password"
                           id='password'
                           onChange={handleChangeUser}
                           value={formUser.password}
                           style={{
                              outline: 0,
                              color: '#fff',
                              width: '97.5%',
                              height: pxToRem(32),
                              borderRadius: pxToRem(8),
                              background: '#9500F6',
                              padding: '5px 10px',
                              border: 'none',
                              fontSize: '14px',
                              fontFamily: 'Nunito',
                              fontWeight: 'bold',
                              marginBottom: '3px'
                           }}
                        />
                     </Column>
                     <Files>
                        <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }}>
                           <Text color="#000000"
                              fontSize={pxToRem(16)}
                              style={{
                                 fontFamily: "Nunito",
                                 textAlign: "left",
                                 gridColumnStart: 1,
                                 gridColumnEnd: 3
                              }}>Foto Perfil</Text>

                           <ImportFiles htmlFor="file-upload">+ Adicionar Imagem</ImportFiles>
                        </div>

                        <Line />

                        <Input id="file-upload" multiple={false} type="file" accept="image/*" onChange={handleFileSelect} style={{
                           display: "none",
                        }} />
                        {selectedFiles.length > 0 && <FileList files={selectedFiles} />}
                     </Files>
                     <span></span>
                     <Button style={{ margin: "auto auto" }} className="button-submit" type="submit" onClick={handleSubmmitUser}>Enviar Cadastro</Button>
                  </FormDeFora>
               </DadosContainer>

               <ImageContainer style={{ marginTop: "4rem" }}>
                  <img src={carinhaMicrofone} alt="" />
                  <img src={segundaImage} alt="" />
               </ImageContainer>

            </FormContainer >

         </Container >
      </>
   )
}