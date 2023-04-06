import { pxToRem } from "../../utils/convertToRem.util";
import { Button } from "../Button";
import { Input } from "../Input";
import { Text } from "../Text"
import { TextLabel } from "../TextLabel";
import { Container, FormContainer, InputLabelContainer } from "./styles";
import { useState } from "react";
import { IUser } from "../../interfaces/IUser";

export function FormSingIn() {
    const [formData, setFormData] = useState<IUser>({} as IUser);

    function handleSubmit() {
        const data = {
            username: formData.username,
            password: formData.password
        }
    }

    return(
        <>
        <Container>
        
        <Text color="#FFFFFF" fontSize={ pxToRem(80) } style={{textAlign: "center"}}>Arte é isso, arte é aqui!</Text>
        
        <FormContainer>
                <InputLabelContainer>
                    <TextLabel style={{
                        color: "#FFFFFF",
                        fontFamily: "Nunito",
                        fontSize: pxToRem(20),
                        fontWeight: 600,
                        }}>Username:</TextLabel>
                
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
                        }}>Senha:</TextLabel>

                    <Input placeholder="**********" className="inputName" style={{
                        width: pxToRem(548),
                        height: pxToRem(32),
                        borderRadius: pxToRem(8),
                        background: "#EFF4F9"
                        }}
                    />
                </InputLabelContainer>
            
            <Button style={{
                    color: '#FFF',
                    margin: "0 auto"
                    }}>Login</Button>
        </FormContainer>

        <Text color="#FFFFFF" fontSize={ pxToRem(25) } style={{textAlign: "center"}}>Entre para a festa você tambem!!</Text>
        
        </Container>
        </>
    )
}