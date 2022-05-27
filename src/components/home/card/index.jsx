/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
const CardBody = styled('li')`
  background-image: url(${(props) => props.image});
  width: 165px;
  height: 230px;
  background-size: ${(props) => props.backgroundSize};
  background-position: ${(props) => props.backgroundPosition};
  justify-content: center;
  align-items: flex-end;
  margin-left: 2.5px;
  margin-right: 2.5px;
  cursor: pointer;
  @media (min-width: 425px) {
    width: 185px;
    height: 256px;
  }
  @media (min-width: 500px) {
    width: 200px;
    height: 279px;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media (min-width: 550px) {
    width: 220px;
    height: 307px;
  }
  @media (min-width: 730px) {
    width: 230px;
    height: 320px;
  }

  @media (min-width: 800px) {
    width: 240px;
    height: 335px;
  }

  @media (min-width: 1130px) {
    width: 273px;
    height: 450px;
    font-size: 20px;
    line-height: 23.5px;
    margin-left: 7.5px;
    margin-right: 7.5px;
  }
`;

const CardCategory = styled('div')`
  width: 100%;
  padding-top: 7px;
  padding-bottom: 7px;
  text-align: center;
  font-family: Raleway, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  background: rgba(224, 190, 162, 0.75);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: #e0bea2;
  }
  &: active {
    background: #cca88a;
  }
`;

const Card = ({ image, backgroundSize, backgroundPosition, categoryText, cardClassName, to }) => {
  const navigate = useNavigate();
  return (
    <CardBody
      image={image}
      backgroundSize={backgroundSize}
      backgroundPosition={backgroundPosition}
      className={cardClassName}
      onClick={() => navigate(to)}>
      <CardCategory>{categoryText}</CardCategory>
    </CardBody>
  );
};

export default Card;
