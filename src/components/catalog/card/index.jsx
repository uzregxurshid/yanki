import styled from '@emotion/styled';
import React from 'react';
import propTypes from 'prop-types';
import AddFavoriteImg from '../../../assets/images/category/card/favourite.svg';
import AddToCartImg from '../../../assets/images/category/card/add_to_card.svg';
import BuyNowImg from '../../../assets/images/category/card/buyNow.svg';
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
  }
  @media (min-width: 1024px) {
    width: 260px;
  }
  @media (min-width: 1080px) {
    width: 280px;
  }
  @media (min-width: 1110px) {
    width: 290px;
  }
  @media (min-width: 1140px) {
    width: 300px;
  }
  @media (min-width: 1170px) {
    width: 310px;
  }
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
  overflow: hidden;
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

const BuySection = styled('div')`
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(6px);
  height: 100%;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  top: ${(props) => (props.isOpen ? '0' : '-100%')};
`;

const Card = ({
  image,
  onFavourite,
  buyNow,
  modelname,
  isNew,
  price,
  sizes,
  colors,
  className,
  addToCart
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <CardBody className={className}>
      <CardImage image={image} onClick={() => setOpen(!open)}>
        <AddFavorite onClick={onFavourite}>
          <img src={AddFavoriteImg} alt="add to favorite" />
        </AddFavorite>
        <BuySection isOpen={open}>
          <div className="flex items-center">
            <button
              className="w-8 h-8  flex items-center justify-center bg-[#E0BEA2] rounded-full lg:w-12 lg:h-12 hover:drop-shadow-[0_5px_7px_rgba(37,37,37,0.15)]"
              type="button"
              aria-label="Buy Now"
              onClick={buyNow}
              aria-hidden="true">
              <img src={BuyNowImg} alt="add to cart" width={20} />
            </button>
            <button
              className="w-8 h-8 ml-5 flex items-center justify-center bg-[#E0BEA2] rounded-full lg:w-12 lg:h-12 hover:drop-shadow-[0_5px_7px_rgba(37,37,37,0.15)]"
              type="button"
              aria-label="add to cart"
              onClick={addToCart}
              aria-hidden="true">
              <img src={AddToCartImg} alt="add to cart" width={20} />
            </button>
          </div>
        </BuySection>
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
  className: propTypes.string,
  addToCart: propTypes.func,
  buyNow: propTypes.func
};

export default Card;
