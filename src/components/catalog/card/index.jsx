import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import propTypes from 'prop-types';
import AddFavoriteImg from '../../../components/catalog/card/favourite.svg';
const CardBody = styled('div')`
  width: 165px;
  display: flex;
  flex-direction: column;
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
  border-bottom-left-radius: 50%;
`;

const Card = ({ image, onFavourite, navigate }) => {
  const navigator = useNavigate();
  return (
    <CardBody onClick={() => navigator(navigate)}>
      <CardImage image={image}>
        <AddFavorite onClick={onFavourite}>
          <img src={AddFavoriteImg} alt="add to favorite" />
        </AddFavorite>
      </CardImage>
    </CardBody>
  );
};
Card.propTypes = {
  image: propTypes.string.isRequired,
  onFavourite: propTypes.func.isRequired,
  navigate: propTypes.func.isRequired
};

export default Card;
