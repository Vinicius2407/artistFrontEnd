import { FormContainer, InputContaineDoble, InputContainer, MidiaContainer } from "./styles";


interface FormProps {
    width?: string;
    type?: string;
}

export function Form({ width }: FormProps) {
    return (
        <>
            <FormContainer>

                <InputContainer>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="phone">Email:</label>
                    <input type="text" id="phone" />
                </InputContainer>
                <InputContaineDoble>
                    <InputContainer>
                        <label htmlFor="document">CPF ou CNPJ:</label>
                        <input type="text" id="document" />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="phone">Telefone:</label>
                        <input type="text" id="phone" />
                    </InputContainer>
                </InputContaineDoble>
                <InputContaineDoble>
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
                </InputContaineDoble>
                <InputContainer>
                    <label htmlFor="budget">Orçamento:</label>
                    <input type="text" id="budget" placeholder="R$200 a 1000" />
                </InputContainer>
                
                <MidiaContainer>
                    
                </MidiaContainer>
            </FormContainer>
        </>
    )
}