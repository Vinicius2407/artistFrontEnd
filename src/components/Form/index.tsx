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

export function Form() {

  // State para armazenar as redes sociais e as categorias
  const [socialList, setSocialList] = useState<SocialProps[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

  // State para armazenar as categorias selecionadas
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
    const data = { id: id, url: url };
    setSocialList([...socialList, data])
  }

  function handleSubmit() {
    const data = {
      name: formData.name,
      username: formData.username,
      password: formData.password,
      email: formData.email,
      user_type: "artist",
      document: formData.document,
      cellPhone: formData.cellphone,
      socialList: socialList,
      categories: selectedCategories,
    };

    try {
      api.post("/users", data);
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
              <Text fontSize={pxToRem(20)} color={"#FFFFFF"} >Redes Sociais</Text>
              <SocialContainer>
                {socialList.map((social) => {
                  return (
                    <SocialComponent
                      key={social.id}
                      social={social}
                      onSelectSocial={handleToggleSocial}
                    />
                  )
                })}
              </SocialContainer>
              <Text fontSize={pxToRem(20)} color={"#FFFFFF"} >Categorias</Text>
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
  name?: string;
  url: string;
}

interface SocialComponentProps {
  social: SocialProps;
  onSelectSocial: (id: string, url: string) => void;
}

export function SocialComponent({ social, onSelectSocial }: SocialComponentProps) {
  const [url, setUrl] = useState(social.url);
  const logoSocial = social.name + "Logo";

  function handleSocial(event: any) {
    setUrl(event.target.value);
  }

  function handleEnter(event: any) {
    if (event.key === "Enter") {
      const newSocial = { id: social.id, url: url };
      onSelectSocial(newSocial.id, newSocial.url);
    }
  }

  const Icon = PhosphorIcons[logoSocial] as PhosphorIcons.Icon;

  return (
    <>
      <div className="social-item">
        <Icon size={pxToRem(48)} color={"#FFFFFF"} />
        <Input
          className="input-social"
          type="text"
          value={url}
          placeholder={social.name}
          onChange={handleSocial}
          onKeyDown={handleEnter}
          color="#FFFFFF"
          style={{
            width: "100%",
            height: pxToRem(32),
            borderRadius: pxToRem(8),
            background: "#EFF4F9"
          }} />
      </div>
    </>
  )
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