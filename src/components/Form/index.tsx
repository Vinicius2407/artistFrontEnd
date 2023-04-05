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

  // Função para pegar os valores dos inputs


  function handleSubmit(event) {
    
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                  }}>CPF ou CNPJ:</TextLabel>
                  <Input
                    placeholder="111.111.111-01"
                    className="inputDocument"
                    value={formData.document}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    />
                  )
                })}
              </SocialContainer>
              <Text fontSize={pxToRem(20)} color={"#FFFFFF"} >Categorias</Text>
              <CategoryContainer>
                {categoryList.map((category) => {
                  return (
                    <CategoryComponent
                      key={category.id}
                      category={category}
                      selectedCategories={selectedCategories}
                      setSelectedCategories={setSelectedCategories}
                    />
                  )
                }
                )}
              </CategoryContainer>
            </MidiaContainer>
          </FormContent>
          
          <Button className="button-submit" type="submit">Enviar Cadastro</Button>
        
        </FormContainer>
      </Container>
    </>
  )
}


interface SocialProps {
  id: string;
  name: string;
}

interface SocialComponentProps {
  social: SocialProps;
}

export function SocialComponent({ social }: SocialComponentProps) {
  const logoSocial = social.name + "Logo";

  const Icon = PhosphorIcons[logoSocial] as PhosphorIcons.Icon;

  return (
    <>
      <div className="social-item">
        <Icon size={pxToRem(48)} color={"#FFFFFF"} />
        <Input
          className="input-social"
          type="text"
          value={FormData.social}
          color="#FFFFFF"
          placeholder={social.name}
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
  selectedCategories: string[];
  setSelectedCategories: (selectedCategoreis: string[]) => void;
}

export function CategoryComponent({ category, selectedCategories, setSelectedCategories }: CategoryComponentProps ) {
  const [inputValue, setInputValue] = useState("");

  function handleCategoryChange(event: any) {
    const { value } = event.target;
    setInputValue(value);

    if (selectedCategories.includes(category.id)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== category.id))
    } else {
      setSelectedCategories([...selectedCategories, category.id])
    }
  }

  return (
    <>
      <div className="category-item">
        <Input
          id={category.id}
          type={"checkbox"}
          className="category"
          value={inputValue}
          color="#FFFFFF"
          onChange={handleCategoryChange}
        />
        
        <Text fontSize={pxToRem(16)} color={"#FFFFFF"} >{category.name}</Text>
      </div>
    </>
  )
}