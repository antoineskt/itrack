import styled from 'styled-components';

export default function ButtonValue({ children }) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  padding: 50px;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: invert(100%);
  }
`;
