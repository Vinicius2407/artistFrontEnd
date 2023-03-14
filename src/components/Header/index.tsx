import vector from "../../assets/images/Vector.svg"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <div className="logo">
                    <h1 className="logo">Art<img src={vector} className="imgLogo" />st</h1>
                </div>
                
            </Content>
        </Container>
    )
}