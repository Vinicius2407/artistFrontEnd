import { useEffect, useState } from "react";
import * as PhosphorIcons from "@phosphor-icons/react";

import { api } from "../../services/api.service";
import { pxToRem } from "../../utils/convertToRem.util";

import { Input } from "../Input";
import { Text } from "../Text";
import { TextLabel } from "../TextLabel";

import { CategoryContainer, Container, FormContainer, FormContent, InputLabelContainer, MidiaContainer, SocialContainer } from "./styles";
import { Button } from "../Button";
import { IUser } from "../../interfaces/IUser";
import { render } from "react-dom";

export function Form() {

  // State para armazenar as redes sociais e as categorias
  const [socialList, setSocialList] = useState<SocialProps[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

  // State para armazenar as categorias selecionadas
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSocial, setSelectedSocial] = useState<SocialProps[]>([]);

  // useState dos dados formulário
  const [formData, setFormData] = useState<IUser>({} as IUser);

  function handleToggleCategory(categoryId: string) {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  }

  function handleToggleSocial(id: string, url: string): void {
    const data = { social: id, url: url };
    setSelectedSocial([...selectedSocial, data]);
  }

  function handleBlur(event: any, id: string) {
    if (event.target.value) {
      setSelectedSocial([...selectedSocial, { social: id, url: event.target.value }]);
    }
  }

  function handleSubmit() {
    const data = {
      name: formData.name,
      username: formData.username,
      password: formData.password,
      email: formData.email,
      user_type: "artist",
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

  useEffect(() => {
    handleList();
  }, []);

  return (
    <>
      <Container>
        <Text color="#FFFFFF" fontSize={pxToRem(80)} >Arte é isso, arte é aqui!</Text>
        <FormContainer>
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
          </FormContent>

          <Button className="button-submit" type="submit" onClick={handleSubmit}>Enviar Cadastro</Button>

        </FormContainer>
      </Container>
    </>
  )
}


interface SocialProps {
  id: string;
  social?: string;
  name?: string;
  url: string;
}

interface SocialComponentProps {
  social: SocialProps;
}
export function GetIcon({social}: SocialComponentProps){
  let logoSocial = social.name + "Logo";

  const Icon = PhosphorIcons[logoSocial] as PhosphorIcons.Icon;
  return <Icon size={pxToRem(32)} color="#FFFFFF" />
}

interface CategoryProps {
  id: string;
  name: string;
  type: string;
}

interface CategoryComponentProps {
  category: CategoryProps;
  onSelectCategory: (id: string) => void;
}

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