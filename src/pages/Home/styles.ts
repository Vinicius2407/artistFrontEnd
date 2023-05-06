import styled from "styled-components";

export const Container = styled.div`
    
`

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const AccordionHeader = styled.div`
  background-color: #f2f2f2;
  padding: 12px;
  cursor: pointer;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: 12px;
`;