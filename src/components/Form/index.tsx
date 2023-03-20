import { useState } from "react";

import * as PhosphorIcons from "@phosphor-icons/react";

import {
    CategoriesContainer,
    FormContainer,
    IconContainer,
    InputContainerDoble,
    InputContainer,
    MidiaContainer
} from "./styles";

// Form interface and components
interface FormProps {
    type?: "artist" | "organizer";
}

export function Form({ type = "artist" }: FormProps) {
    const isOrganizer = type === "organizer";

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);    

    console.log(selectedCategories);
    return (
        <>
            <FormContainer>
                {isOrganizer && (
                    <span>Texto mostrado caso seja ORGANIZADOR</span>
                )}

                {isOrganizer ? (
                    <span>Caso seja organizador</span>
                ) : (
                    <span>Caso seja artista</span>
                )}

                <InputContainer>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="phone">Email:</label>
                    <input type="text" id="phone" />
                </InputContainer>
                <InputContainerDoble>
                    <InputContainer>
                        <label htmlFor="document">CPF ou CNPJ:</label>
                        <input type="text" id="document" />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="phone">Telefone:</label>
                        <input type="text" id="phone" />
                    </InputContainer>
                </InputContainerDoble>
                <InputContainerDoble>
                    <InputContainer>
                        <label htmlFor="city">Cidade</label>
                        <select name="city" id="city">
                            <option value="Escolha" id="first">Selecione a cidade:</option>
                            <option value="Cascavel">Cascavel</option>
                            <option value="Foz do Iguacu">Foz do Iguaçu</option>
                            <option value="Francisco Beltrão">Francisco Beltrão</option>
                            <option value="Medianeira">Medianeira</option>
                            <option value="Pato Branco">Pato Branco</option>
                            <option value="São Miguel do Iguaçu">São Miguel do Iguaçu</option>
                            <option value="Santa Terezinha de Itaipu">Santa Terezinha de Itaipu</option>
                        </select>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="state">Estado:</label>
                        <select name="state" id="state">
                            <option value="Escolha" id="first">Selecione o estado:</option>
                            <option value="PR">Paraná</option>
                        </select>
                    </InputContainer>
                </InputContainerDoble>
               
                {!isOrganizer && (
                    <>
                        <InputContainer>
                            <label htmlFor="budget">Orçamento:</label>
                            <input type="text" id="budget" placeholder="R$200 a 1000" />
                        </InputContainer>

                        <MidiaContainer>
                            <span className="socialText" >Mídias sociais</span>
                            <IconContainer>
                                {socials.map(social => (
                                    <SocialComponents social={social} />
                                ))}
                            </IconContainer>
                        </MidiaContainer>
                        
                        <CategoriesContainer>
                            <span className="categoryText">Categorias</span>
                            <div className="categoryComponents">
                                {categories.map(category => (
                                    <CategoriesComponents category={category}
                                        selectedCategories={selectedCategories}
                                        setSelectedCategories={setSelectedCategories} />
                                    ))                                    
                                }
                            </div>
                        </CategoriesContainer>
                    </>
                )}
            </FormContainer>
        </>
    )
}

// Social interface and components
interface SocialProps {
    id: number;
    name: string;
    icon: keyof typeof PhosphorIcons;
}

const socials: SocialProps[] = [
    {
        id: 1,
        name: "Facebook",
        icon: "FacebookLogo"
    },
    {
        id: 2,
        name: "Instagram",
        icon: "InstagramLogo",
    },
    {
        id: 3,
        name: "TikTok",
        icon: "TiktokLogo",
    },
    {
        id: 4,
        name: "Youtube",
        icon: "YoutubeLogo",
    },
];

interface SocialComponentsProps {
    social: SocialProps;
}

export function SocialComponents({ social }: SocialComponentsProps) {    
    const Icon = PhosphorIcons[social.icon] as PhosphorIcons.Icon;
    
    function handleOpenSocial() {
        alert(`Você selecionou ${social.name}`);
    }

    return (
        <div className="buttonText">
            <button type="button" className="socialBox" onClick={handleOpenSocial}>
                <Icon size={20} color="#fff" weight="duotone" />
                <span className="name">{social.name}</span>
            </button>
        </div>
    )
}

// Category interface and components
interface CategoryProps {
    id: string;
    name: string;
}

const categories: CategoryProps[] = [
    {
        id: "1",
        name: "Sertanejo"
    },
    {
        id: "2",
        name: "Rock"
    },
    {
        id: "3",
        name: "Gospel"
    },
    {
        id: "4",
        name: "DJ"
    },
    {
        id: "5",
        name: "Cover"
    },
    {
        id: "6",
        name: "Stand Up"
    },
]

interface CategoriesComponentsProps {
    category: CategoryProps;
    selectedCategories: string[];
    setSelectedCategories: (selectedCategories: string[]) => void;
}

export function CategoriesComponents({ category, selectedCategories, setSelectedCategories }: CategoriesComponentsProps) {
    
    function handleCategoryChange() {
        if (selectedCategories.includes(category.id)) {
            setSelectedCategories(selectedCategories.filter(id => id !== category.id))
        } else {
            setSelectedCategories([...selectedCategories, category.id])
        }
    }


    return (
        <div className="categoryBox" key={category.id}>
            <input type="checkbox" id={category.id} name="inputCategoriesRadius" onChange={handleCategoryChange} />
            <span className="categoriesName">{category.name}</span>
        </div>
    )
}