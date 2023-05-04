import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, EventAddress, EventCategory, EventDate, FormContainer, Label, SectionContainer, TextArea } from './styles';
import { pxToRem } from '../../utils/convertToRem.util';
import { Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import { Descr } from '../PostForm/styles';
import { IEvent } from '../../interfaces/IEvent';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: any;
}
  
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    if (!open) return null;

    const [formData, setFormData] = useState<IEvent>({} as IEvent);

  const handleSubmit = async () => {

    const data = {
      eventName: formData.eventName,
      description: formData.description,
      dateBegin: formData.dateBegin,
      dateEnd: formData.dateEnd,
      address: formData.address,
      category: formData.category
    };
  }
  
    return (
      <Container>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-body">
              
              <FormContainer>
                <SectionContainer className='full-width-section'>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "left",
                      alignSelf: "start",
                    }}>Nome do evento:</Text>

                  <Input style={{
                    outline: 0,
                    width: "100%",
                    height: pxToRem(32),
                    borderRadius: pxToRem(8),
                    background: "#E5E5E5",
                    borderStyle: "none",
                  }} />
                </SectionContainer>

                <SectionContainer className='full-width-section'>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "right",
                    }}>Descrição do evento:</Text>

                  <Descr cols={70} rows={10} placeholder="Descreva seu evento!" />
                </SectionContainer>

                <SectionContainer>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "right",
                    }}>Data de inicio do evento:</Text>

                  <Input type="date"
                    style={{
                      outline: 0,
                      width: "100%",
                      height: pxToRem(32),
                      borderRadius: pxToRem(8),
                      background: "#E5E5E5",
                      borderStyle: "none",
                      textAlign: "center",
                    }} />
                </SectionContainer>

                <SectionContainer>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "right",
                    }}>Data de termino do evento:</Text>

                  <Input type="date"
                    style={{
                      outline: 0,
                      width: "100%",
                      height: pxToRem(32),
                      borderRadius: pxToRem(8),
                      background: "#E5E5E5",
                      borderStyle: "none",
                      textAlign: "center",
                    }} />
                </SectionContainer>

                <SectionContainer className='full-width-section'>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "center"
                    }}>Endereço do evento</Text>
                </SectionContainer>

                <SectionContainer>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "right",
                    }}>CEP:</Text>

                  <Input style={{
                    outline: 0,
                    height: pxToRem(32),
                    width: "95%",
                    borderRadius: pxToRem(8),
                    background: "#E5E5E5",
                    borderStyle: "none",
                  }} />
                </SectionContainer>

                <SectionContainer>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "right",
                    }}>Número:</Text>

                  <Input style={{
                    outline: 0,
                    height: pxToRem(32),
                    width: "95%",
                    borderRadius: pxToRem(8),
                    background: "#E5E5E5",
                    borderStyle: "none",
                  }} />
                </SectionContainer>

                <SectionContainer>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "right",
                    }}>Rua:</Text>

                  <Input style={{
                    outline: 0,
                    height: pxToRem(32),
                    width: "95%",
                    borderRadius: pxToRem(8),
                    background: "#E5E5E5",
                    borderStyle: "none",
                  }} />
                </SectionContainer>

                <SectionContainer>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "right",
                    }}>Bairro:</Text>

                  <Input style={{
                    outline: 0,
                    height: pxToRem(32),
                    width: "95%",
                    borderRadius: pxToRem(8),
                    background: "#E5E5E5",
                    borderStyle: "none",
                  }} />
                </SectionContainer>

                <SectionContainer>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "right",
                    }}>Cidade:</Text>

                  <Input style={{
                    outline: 0,
                    height: pxToRem(32),
                    width: "95%",
                    borderRadius: pxToRem(8),
                    background: "#E5E5E5",
                    borderStyle: "none",
                  }} />
                </SectionContainer>

                <SectionContainer>
                  <Text color="#000000"
                    fontSize={pxToRem(20)}
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "right",
                    }}>País:</Text>

                  <Input style={{
                    outline: 0,
                    height: pxToRem(32),
                    width: "95%",
                    borderRadius: pxToRem(8),
                    background: "#E5E5E5",
                    borderStyle: "none",
                  }} />
                </SectionContainer>
              </FormContainer>
              
              <SectionContainer>
                <Button type="submit"
                  style={{
                    background: "#50E3C2",
                    margin: "0 auto",
                  }}>Criar Evento</Button>
              </SectionContainer>

            </div>
          </div>
        </div>
      </Container>
                  
    );
};

export default Modal;