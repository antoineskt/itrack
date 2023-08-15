import styled from 'styled-components';

const Div = styled.div`
  background: rgb(3, 111, 136);
  background: radial-gradient(
    circle,
    rgba(3, 111, 136, 1) 0%,
    rgba(3, 3, 3, 1) 100%
  );
`;

function ReusableBackground({ children }) {
  return <Div>{children}</Div>;
}

export default ReusableBackground;
