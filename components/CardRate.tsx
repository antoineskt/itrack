import { PriceDataType } from './data';
import styled from 'styled-components';
const CardContainer = styled.div`
  width: 100%;
  padding: 16px 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-width: 800px;
  transition: 100ms ease-in-out all;
  will-change: transform;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  color: #757575;
`;
const Price = styled.h4`
  font-size: 2em;
  font-weight: 900;
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
`;

const DescriptionContainer = styled.ul`
  border-top: 1px solid rgba(183, 183, 183, 0.5);
  padding-top: 1em;
`;
const DescriptionItem = styled.li`
  list-style-type: none;
  margin: 0;
  color: rgb(116, 116, 117);
  font-weight: 500;
`;

const CardRate = ({ title, price, description }: PriceDataType) => {
  return (
    <CardContainer>
      <Title>{title} </Title>
      <Price>{price} </Price>

      <DescriptionContainer>
        {description.map((el) => (
          <DescriptionItem key={el}>{el} </DescriptionItem>
        ))}
      </DescriptionContainer>
    </CardContainer>
  );
};

export default CardRate;
