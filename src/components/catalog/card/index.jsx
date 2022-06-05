import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import propTypes from 'prop-types';
import AddFavoriteImg from '../../../assets/images/category/card/favourite.svg';
const CardBody = styled('div')`
  width: 165px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardImage = styled('div')`
  width: 100%;
  height: 230px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const AddFavorite = styled('button')`
  width: 35px;
  height: 35px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e0bea2;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 50%;
  transition: all 0.5s ease-in-out;
  &:hover {
    filter: drop-shadow(0px 5px 7px rgba(37, 37, 37, 0.15));
  }
  &:active {
    box-shadow: inset 0px 3px 7px rgba(37, 37, 37, 0.15);
    background-color: #cca88a;
  }
`;

const CardTitle = styled('div')`
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  position: relative;
  color: #252525;
`;

const IsNewText = styled('div')`
  color: #e0bea2;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  margin-left: 5px;
`;

const Price = styled('div')`
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 700;
  color: #252525;
  margin-top: 5px;
  text-align: center;
`;

const Card = ({ image, onFavourite, navigate, modelname, isNew, price }) => {
  const navigator = useNavigate();
  return (
    <CardBody onClick={() => navigator(navigate)}>
      <CardImage image={image}>
        <AddFavorite onClick={onFavourite}>
          <img src={AddFavoriteImg} alt="add to favorite" />
        </AddFavorite>
      </CardImage>
      <div className="flex items-center justify-center mt-2.5">
        <CardTitle>{modelname || 'Modelname'}</CardTitle>
        {isNew && <IsNewText>new</IsNewText>}
      </div>
      <Price>{price || '2900 грн'}</Price>
    </CardBody>
  );
};
Card.propTypes = {
  image: propTypes.string,
  onFavourite: propTypes.func,
  navigate: propTypes.string,
  modelname: propTypes.string,
  isNew: propTypes.bool,
  price: propTypes.string
};

export default Card;
