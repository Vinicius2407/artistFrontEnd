import styled from "styled-components";

export const GaleryContainer = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  max-height: 45rem;
  overflow: hidden;
  width: 100%;
  
  img, video {
    max-width: 100% !important;
    height: auto !important;
  }

  .image-gallery-slide .image-gallery-image {
    width: 100%;
    object-fit: contain;
  }
`;