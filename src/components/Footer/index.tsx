import { Container, Content } from "../Footer/styles"

export function Footer() {
   const year = new Date().getFullYear();
   return (
      <>
         <Container>
            <Content>
               <span className="textFooter">Artíst - todos os direitos reservados</span>
               <span className="textFooter">{year}</span>
            </Content>
         </Container>
      </>
   )
}