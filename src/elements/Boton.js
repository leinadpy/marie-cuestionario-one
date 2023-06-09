import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Boton = styled(Link)`
  background: ${(props) => (props.primario === 'true' ? '#D8D2EB' : '#343a40')};
  width: ${(props) =>
    props.conIcono === 'true' ? '15.62rem' : 'auto'}; /* 250px */
  margin-left: 1.25rem; /* 20px */
  border: none;
  border-radius: 0.625rem; /* 10px */
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  height: ${(props) =>
    props.small === 'true' ? 'auto' : '3.75rem'}; /* 60px */
  padding: ${(props) =>
    props.small === 'true'
      ? '0.75rem 1.0rem'
      : '1.25rem 1.87rem'}; /* 20px 30px */
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  :hover {
    color: white;
  }
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  svg {
    height: ${(props) => (props.iconoGrande ? '100%' : '0.75rem;')}; /* 12px */
    fill: white;
  }
`;

export default Boton;
