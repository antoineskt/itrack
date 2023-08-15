import styled from 'styled-components';

export default function ButtonValueBlue({ children }) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  padding: 20px;
  margin: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: invert(100%);
  }
`;
