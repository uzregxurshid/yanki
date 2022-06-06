import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import propTypes from 'prop-types';
import AddFavoriteImg from '../../../assets/images/category/card/favourite.svg';
const CardBody = styled('div')`
  width: calc(50% - 4px);
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  @media (min-width: 640px) {
    margin-top: 30px;
    width: 280px;
  }
  @media (min-width: 680px) {
    width: 310px;
  }
  @media (min-width: 768px) {
    width: 270px;
  }
  @media (min-width: 788px) {
    width: 295px;
`;

const CardImage = styled('div')`
  width: 100%;
  height: calc(50vw + 43px);
  display: block;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  @media (min-width: 640px) {
    height: 360px;
  }
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
  @media (min-width: 640px) {
    width: 40px;
    height: 40px;
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
  @media (min-width: 640px) {
    font-size: 16px;
    line-height: 19px;
  }
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
  @media (min-width: 640px) {
    font-size: 16px;
    line-height: 19px;
    margin-left: 10px;
  }
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
  @media (min-width: 640px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const Item = styled('li')`
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;
  font-style: normal;
  text-align: center;
  color: rgba(37, 37, 37, 0.5);
  margin-left: 5px;
`;

const Color = styled('li')`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
  background: ${(props) => props.color};
  cursor: pointer;
  ${(props) =>
    props.color === '#ffffff' &&
    `
    border: .3px solid #252525;
  `}
`;

const Card = ({
  image,
  onFavourite,
  navigate,
  modelname,
  isNew,
  price,
  sizes,
  colors,
  className
}) => {
  const navigator = useNavigate();
  return (
    <CardBody className={className}>
      <CardImage image={image} onClick={() => navigator(navigate)}>
        <AddFavorite onClick={onFavourite}>
          <img src={AddFavoriteImg} alt="add to favorite" />
        </AddFavorite>
      </CardImage>
      <div className="flex items-center justify-center mt-2.5">
        <CardTitle>{modelname || 'Modelname'}</CardTitle>
        {isNew && <IsNewText>new</IsNewText>}
      </div>
      <Price>{price || '2900 грн'}</Price>
      {sizes && (
        <ul className="mt-[5px] flex justify-center">
          {sizes.map((size, index) => (
            <Item key={index} className="first:ml-0">
              {size}
            </Item>
          ))}
        </ul>
      )}
      {colors && (
        <ul className="mt-[5px] flex justify-center">
          {colors.map((color, index) => (
            <Color key={index} color={color} className="first:ml-0" />
          ))}
        </ul>
      )}
    </CardBody>
  );
};
Card.propTypes = {
  image: propTypes.string,
  onFavourite: propTypes.func,
  navigate: propTypes.string,
  modelname: propTypes.string,
  isNew: propTypes.bool,
  price: propTypes.string,
  sizes: propTypes.array,
  colors: propTypes.array,
  className: propTypes.string
};

export default Card;
