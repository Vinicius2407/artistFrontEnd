import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 30px;
  max-height: 33.25rem; 
  max-width: 48rem;
  min-width: 30rem;
  border-radius: 32px;
  background: #FFFFFF;
  color:black;
`;

export const PostHeader = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 5fr;
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

export const PostContent = styled.p`
  font-size: 22px;
  margin: 10px 0;
  color: black;
`;

export const PostImage = styled.img`
  width: 100%;
  margin: 10px 0;
`;

export const PostEventContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
  margin: 10px;
`;

export const EventInfo = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr 1fr;
`;

export const EventAddress = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr 1fr;
`;

export const Input = styled.div`

  background: #9500F6;
  color: #fff;
  padding: 5px 10px;
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
  margin-bottom: 5px;
  font-size: 14px;
  font-family: Nunito;
  font-weight: bold;
  color: #9500F6;
`;

