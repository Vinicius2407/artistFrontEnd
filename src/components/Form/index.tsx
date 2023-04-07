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
  const [isOrganizer, setIsOrganizer] = useState<"artist" | "organizer">("organizer");
  let userType = isOrganizer === "organizer";

  // State para armazenar as redes sociais e as categorias
  const [socialList, setSocialList] = useState<SocialProps[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

  // State para armazenar as categorias selecionadas
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSocial, setSelectedSocial] = useState<SocialProps[]>([]);

  // useState dos dados formulário
  const [formData, setFormData] = useState<IUser>({} as IUser);

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
      setFormData({ ...formData, user_type: "artist" });
    } else {
      setIsOrganizer("organizer");
      setFormData({ ...formData, user_type: "organizer" });
    }
    console.log(isOrganizer);
  }

  // Função para enviar os dados do formulário
  function handleSubmit() {
    const data = {
      name: formData.name,
      username: formData.username,
      password: formData.password,
      email: formData.email,
      user_type: formData.user_type,
      document: formData.document,
      cell_phone: formData.cellphone,
      social: selectedSocial,
      categories: selectedCategories,
    };

    try {
      api.post("/user", data);

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
        <Text color="#FFFFFF" fontSize={pxToRem(80)} >Arte é isso, arte é aqui!</Text>
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
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
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
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                style={{
                  width: '100%',
                  height: pxToRem(32),
                  borderRadius: pxToRem(8),
                  background: "#EFF4F9"
                }}
              />

              <div id="doble-input">
                <div>
                  <TextLabel style={{
                    color: "#FFFFFF",
                    fontFamily: "Nunito",
                    fontSize: pxToRem(20),
                    fontWeight: 600,
                  }}>Nome de Usuario:</TextLabel>
                  <Input
                    placeholder="joao123"
                    className="inputUsername"
                    value={formData.username}
                    onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                    style={{
                      width: "100%",
                      height: pxToRem(32),
                      borderRadius: pxToRem(8),
                      background: "#EFF4F9"
                    }}
                  />
                </div>

                <div>
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
                    value={formData.password}
                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                    style={{
                      width: "100%",
                      height: pxToRem(32),
                      borderRadius: pxToRem(8),
                      background: "#EFF4F9"
                    }}
                  />
                </div>
              </div>

              <div id="doble-input">
                <div>
                  <TextLabel style={{
                    color: "#FFFFFF",
                    fontFamily: "Nunito",
                    fontSize: pxToRem(20),
                    fontWeight: 600,
                  }}>CPF ou CNPJ:</TextLabel>
                  <Input
                    placeholder="111.111.111-01"
                    className="inputDocument"
                    value={formData.document}
                    onChange={(event) => setFormData({ ...formData, document: event.target.value })}
                    style={{
                      width: "100%",
                      height: pxToRem(32),
                      borderRadius: pxToRem(8),
                      background: "#EFF4F9"
                    }}
                  />
                </div>

                <div>
                  <TextLabel style={{
                    color: "#FFFFFF",
                    fontFamily: "Nunito",
                    fontSize: pxToRem(20),
                    fontWeight: 600,
                  }}>Telefone</TextLabel>
                  <Input
                    placeholder="(45) 9 9999-9999"
                    className="inputPhone"
                    value={formData.cellphone}
                    onChange={(event) => setFormData({ ...formData, cellphone: event.target.value })}
                    style={{
                      width: "100%",
                      height: pxToRem(32),
                      borderRadius: pxToRem(8),
                      background: "#EFF4F9"
                    }}
                  />
                </div>
              </div>

            </InputLabelContainer>

            {userType ? (
              <>
                <InputLabelContainer>
                  <div id="doble-input" className="organizer">
                    <div>
                      <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                      }}>Cep: </TextLabel>
                      <Input
                        placeholder="88888-888"
                        className="inputUsername"
                        // value={formData.}
                        // onChange={(event) => setFormData({ ...formData, cep: event.target.value })}
                        // onChange={handleChange}
                        style={{
                          width: "100%",
                          height: pxToRem(32),
                          borderRadius: pxToRem(8),
                          background: "#EFF4F9"
                        }}
                      />
                    </div>

                    <div>
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
                        value={formData.password}
                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                        style={{
                          width: "100%",
                          height: pxToRem(32),
                          borderRadius: pxToRem(8),
                          background: "#EFF4F9"
                        }}
                      />
                    </div>
                  </div>
                  <div id="doble-input" className="organizer">
                    <div>
                      <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                      }}>Nome de Usuario:</TextLabel>
                      <Input
                        placeholder="joao123"
                        className="inputUsername"
                        value={formData.username}
                        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                        style={{
                          width: "100%",
                          height: pxToRem(32),
                          borderRadius: pxToRem(8),
                          background: "#EFF4F9"
                        }}
                      />
                    </div>

                    <div>
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
                        value={formData.password}
                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                        style={{
                          width: "100%",
                          height: pxToRem(32),
                          borderRadius: pxToRem(8),
                          background: "#EFF4F9"
                        }}
                      />
                    </div>
                  </div>
                  <div id="doble-input" className="organizer">
                    <div>
                      <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                      }}>Nome de Usuario:</TextLabel>
                      <Input
                        placeholder="joao123"
                        className="inputUsername"
                        value={formData.username}
                        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                        style={{
                          width: "100%",
                          height: pxToRem(32),
                          borderRadius: pxToRem(8),
                          background: "#EFF4F9"
                        }}
                      />
                    </div>

                    <div>
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
                        value={formData.password}
                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                        style={{
                          width: "100%",
                          height: pxToRem(32),
                          borderRadius: pxToRem(8),
                          background: "#EFF4F9"
                        }}
                      />
                    </div>
                  </div>
                </InputLabelContainer>
              </>
            ) : (
              <>
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