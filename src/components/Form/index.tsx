import { useEffect, useState } from "react";
import * as PhosphorIcons from "@phosphor-icons/react";

import { api } from "../../services/api.service";
import { pxToRem } from "../../utils/convertToRem";

import { Input } from "../Input";
import { Text } from "../Text";
import { TextLabel } from "../TextLabel";

import { CategoryContainer, Container, FormContainer, FormContent, InputLabelContainer, MidiaContainer, SocialContainer } from "./styles";

export function Form() {

    const [socialList, setSocialList] = useState<SocialProps[]>([]);
    const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

    async function handleList() {
        const socials = await api.get("/social");
        setSocialList(socials.data);
        
        const categories = await api.get("/categories");
        setCategoryList(categories.data);
    }

    useEffect(() => {
        handleList();
    }, []);

    console.log(socialList);
    return (
        <>
            <Container>
                <Text color="#FFFFFF" fontSize={ pxToRem(80) } style={{textAlign: "center"}}>Arte é isso, arte é aqui!</Text>
                <FormContainer>
                    <FormContent>
                        <InputLabelContainer>
                                <TextLabel style={{
                                    color: "#FFFFFF",
                                    fontFamily: "Nunito",
                                    fontSize: pxToRem(20),
                                    fontWeight: 600,
                                }}>Nome:</TextLabel>
                                <Input placeholder="João" className="inputName" style={{
                                    width: pxToRem(548),
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
                                <Input placeholder="joão@joão.com" className="inputEmail" style={{
                                    width: pxToRem(548),
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
                                        <Input placeholder="111.111.111-01" className="inputDocument" style={{
                                            width: pxToRem(253),
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
                                        <Input placeholder="(45) 9 9999-9999" className="inputPhone" style={{
                                            width: pxToRem(253),
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
                                        <SocialComponent social={social} key={social.id} />
                                    )
                                })}
                            </SocialContainer>
                            <Text fontSize={pxToRem(20)} color={"#FFFFFF"} >Categorias</Text>
                            <CategoryContainer>
                                {categoryList.map((category) => {
                                    return (
                                        <CategoryComponent category={category} key={category.id} />
                                    )
                                }
                                )}
                            </CategoryContainer>
                        </MidiaContainer>
                    </FormContent>
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
            <div className="socialItem">
                <Icon size={pxToRem(32)} color={ "#FFFFFF" } />
                <Text color="#FFFFFF" fontSize={pxToRem(24)}>{social.name}</Text>
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
}

export function CategoryComponent({ category }: CategoryComponentProps) {
    return (
        <>
            <div className="categoryItem">
                <Input type={"radio"} color="#FFFFFF" />
                <Text fontSize={pxToRem(14)} color={"#FFFFFF"}>{category.name}</Text>
            </div>
        </>
    )
}