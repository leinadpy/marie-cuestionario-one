import styled from "styled-components";

const ContenedorIndex = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  width: 100%;
  @media (max-width: 60rem) {
    /* 950px */
    font-size: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
  }
`;

export default ContenedorIndex;
