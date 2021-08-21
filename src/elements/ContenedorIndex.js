import styled from "styled-components";

const ContenedorIndex = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  align-items: center;
  width: 100%;
  @media (max-width: 60rem) {
    /* 950px */
    font-size: 1rem;
    display: flex;
    margin-top: 250px;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
`;

export default ContenedorIndex;
