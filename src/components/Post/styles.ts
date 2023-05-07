import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 15px;
  max-height: 55rem; 
  max-width: 48rem;
  min-width: 30rem;
  width: 100%;
  border-radius: 32px;
  background: #FFFFFF;
  color:black;
`;

export const PostHeader = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 5fr 0.05fr;
  grid-column-gap: 25px;
`;

export const PostAuthorAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const PostAuthorInfo = styled.div`
  display: grid;
  grid-template-rows: 1.5fr 1fr;
`;

export const PostAuthorName = styled.span`
  font-size: 23px;
  font-weight: bold;
  font-family: Nunito;
  color: black;
`;

export const PostAuthorCategories = styled.div`
  font-size: 10px;
  font-family: Nunito;
  color: black;
`;

export const PostAuthorCat = styled.span`
  font-size: 10px;
  font-family: Nunito;
  font-weight: bold;
  margin: 0 5px;
  color: black;
`;

export const PostContent = styled.textarea`
  margin-top:5px;
  font-size: 22px;
  color: black;
  appearance: none;
  border: none;
  outline: none;
  resize: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const PostEventContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr .1fr;
  column-gap: 10px;
  margin: 10px;
`;

export const EventInfo = styled.div`
  display: grid;
  grid-template-column: 1fr 1fr 1fr;
`;

export const EventAddress = styled.div`
  display: grid;
  grid-template-row: 1.3fr 2fr;
  justify-content: center;
  align-items: center;
  img:{
    object-fit: cover;
  }
`;

export const Span = styled.span`
  font-family: Nunito;
  background: #9500F6;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
  width: 80%;
  margin: 10px 30px;
`;

export const Address = styled.div`
  position: absolute;
  bottom: 50;
  left: 60%;
  transform: translate(-50%, 50%);

  display: flex;
  align-items: center;
  background: #fff;
  width: 16rem;
  height: 2rem;
  padding: 20px;
  border-radius: 32px;
 
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  background: #9500F6;
  color: #fff;
  padding: 2px 10px;
  height: 2rem  ;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-family: Nunito;
  font-weight: bold;
  margin-bottom: 3px;
  color: #fff;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  font-family: Nunito;
  font-weight: bold;
  color: #9500F6;
`;

export const EditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background:#ececec;  
`;

export const GaleryContainer = styled.div`

  max-width: 40rem;
  margin: 0 auto;
  border-radius: 8px;
  max-height: 45rem;
  overflow:hidden;
  width: 100%;
  height: 100%;
`;