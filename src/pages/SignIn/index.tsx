import { Container } from "../SignIn/styles"

import { FormSingIn } from "../../components/FormSignIn";
import { Text } from "../../components/Text";
import { pxToRem } from "../../utils/convertToRem.util";

export function SignIn() {
    return (
        <>
            <Container>
                <Text color="#FFFFFF" fontSize={pxToRem(80)} className="tituloSignIn">Arte é isso, arte é aqui!</Text>
                <FormSingIn />
            </Container>
        </>
    );
}