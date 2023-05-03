import styled from 'styled-components';
import theme from './../theme';

const ContenedorFiltros = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem; /* 30px */

  @media (max-width: 60rem) {
    /* 950px */
    flex-direction: column;

    & > * {
      width: 100%;
      margin-bottom: 0.62rem; /* 10px */
    }
  }
`;

const ContenedorInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const ContenedorInputCheckbox = styled.div`
  display: flex;
  flex-direction: row;
`;

const FormularioDiv = styled.form`
  padding: 0 1rem; /* 40px */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  label {
    width: 20%;
    text-align: right;
    align-self: center;
  }
  span {
    width: 50%;
  }
  textarea,
  select {
    width: 30%;
    text-align: center;
    padding: 0.1m 0;
    font-family: 'Work Sans', sans-serif;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }
  select {
    margin-left: 5px;
  }

  @media (max-width: 60rem) {
    /* 950px */
    label {
      width: 50%;
    }
    textarea,
    select {
      width: 50%;
    }
  }
`;

const Input = styled.input`
  font-size: 1.5rem;
  border: none;
  border-bottom: 2px solid ${theme.grisClaro};
  outline: none;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 60rem) {
    /* 950px */
    font-size: 1rem;
    width: 50%;
  }
`;

const InputChico = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid ${theme.grisClaro};
  outline: none;
  margin: 0;
  width: 30%;
  text-align: center;
  padding: 0.1m 0;
  font-family: 'Work Sans', sans-serif;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 60rem) {
    /* 950px */
    width: 50%;
    font-size: 1rem;
  }
`;

const ContenedorInputRadio = styled.div`
  width: 30%;
  @media (max-width: 60rem) {
    width: 50%;
    label {
      width: 50%;
    }
  }
`;

const InputRadio = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid ${theme.grisClaro};
  outline: none;
  margin: 0;
  width: 5%;
  text-align: center;
  padding: 5px;
  margin: 5px;
  font-family: 'Work Sans', sans-serif;
  @media (max-width: 60rem) {
    /* 950px */
    font-size: 1rem;
  }
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid ${theme.grisClaro};
  outline: none;
  margin: 0;

  @media (max-width: 60rem) {
    /* 950px */
    font-size: 1rem;
  }
`;

const ContenedorBoton = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0; /* 40px */
`;

export {
  ContenedorFiltros,
  FormularioDiv,
  Input,
  InputChico,
  ContenedorBoton,
  ContenedorInput,
  ContenedorInputCheckbox,
  TextArea,
  InputRadio,
  ContenedorInputRadio,
};
