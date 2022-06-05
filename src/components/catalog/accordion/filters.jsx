/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { colourOptions, priceOptions, sizeOptions, sortByOptions } from './docs/data';
import Select, { components } from 'react-select';
import AccordionImg from '../../../assets/images/category/filterMore.svg';
import FilterImg from '../../../assets/images/category/filtr.svg';
import { useDispatch } from 'react-redux';
import { setSizeAction } from '../../../redux/reducers/setSize';
import chroma from 'chroma-js';
import { setColor } from '../../../redux/reducers/setColor';
import { setPrice } from '../../../redux/reducers/setPrice';
import { setOrder } from '../../../redux/reducers/setOrderBy';
const Filters = () => {
  const colorOptionStyle = (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      borderBottom: '.25px solid #E0BEA2',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined
      },
      ':hover': {
        boxShadow: 'none',
        borderBottom: isFocused ? '.25px solid #E0BEA2' : 'none'
      }
    };
  };

  const dispatch = useDispatch();
  const controlStyle = (provided, state) => ({
    ...provided,
    width: '100%',
    border: '0',
    borderRadius: '0',
    boxShadow: 'none',
    fontFamily: 'Raleway',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#0C0C0C',
    borderBottom: state.isFocused ? '.25px solid #E0BEA2' : 'none',
    ':hover': {
      boxShadow: 'none',
      borderBottom: state.isFocused ? '.25px solid #E0BEA2' : 'none'
    }
  });
  const controlStyleLast = (provided, state) => ({
    ...provided,
    width: '100%',
    border: '0',
    borderRadius: '0',
    boxShadow: 'none',
    fontFamily: 'Raleway',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#0C0C0C',
    borderBottom: state.isFocused ? '.25px solid #E0BEA2' : '.25px solid #252525',
    ':hover': {
      boxShadow: 'none',
      borderBottom: state.isFocused ? '.25px solid #E0BEA2' : 'none'
    },
    '@media only screen and (min-width: 768px)': {
      ...provided['@media only screen and (min-width: 768px)'],
      borderBottom: state.isFocused ? '.25px solid #E0BEA2' : 'none',
      width: '100%'
    }
  });
  const menuStyle = (provided, state) => ({
    ...provided,
    border: '0',
    boxShadow: 'none',
    fontFamily: 'Raleway',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#0C0C0C'
  });
  const placeholderStyle = (provided, state) => ({
    ...provided,
    color: '#0C0C0C',
    fontFamily: 'Raleway',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '19px'
  });
  const optionStyle = (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #E0BEA2',
    color: '#0C0C0C',
    backgroundColor: state.isSelected ? 'none' : 'none'
  });
  const catAccordion = useRef();
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={AccordionImg} alt="accordion" />
      </components.DropdownIndicator>
    );
  };
  const style = {
    accordionButton:
      'flex md:hidden w-full h-6 mt-[15px] items-start justify-between px-2 cursor-pointer transition duration-500 hover:drop-shadow-xl border-b-[.25px] border-[#252525]',
    accordFilterWrap: 'flex items-center',
    accordionSpan:
      'font-Raleway not-italic font-light text-[#252525] text-[16px] leading-[19px] mr-[9px]',
    accordionImg: 'accordion-imgf transition duration-500',
    accordionItem: 'py-2.5 border-b-[.25px] border-black w-full',
    accordionList: 'w-full flex flex-col items-center hidden transition-all duration-500 md:flex',
    accordionLink:
      'font-Raleway font-light text-[#252525]  hover:animate-pulse hover:text-[#E0BEA2] transition duration-500 text-[16px] leading-[19px]'
  };
  return (
    <>
      <button
        className={style.accordionButton}
        type="button"
        onClick={(e) => {
          catAccordion.current.classList.toggle('hidden');
          e.target.classList.toggle('border-b-0');
          document.querySelector('.accordion-imgf').classList.toggle('rotate-180');
        }}>
        <div className={style.accordFilterWrap}>
          <span className={style.accordionSpan}>Фильтры</span>
          <img src={FilterImg} alt="filter" />
        </div>
        <img className={style.accordionImg} src={AccordionImg} alt="accordion" />
      </button>
      <form ref={catAccordion} className={style.accordionList}>
        <div className="w-full md:flex md:flex-row">
          <Select
            placeholder="Размер"
            options={sizeOptions}
            components={{ DropdownIndicator }}
            onChange={(option) => dispatch(setSizeAction(option))}
            styles={{
              control: controlStyle,
              menu: menuStyle,
              option: optionStyle,
              placeholder: placeholderStyle,
              dropdownIndicator: (provided, state) => ({
                ...provided,
                transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }),
              indicatorSeparator: () => null
            }}
          />
          <Select
            closeMenuOnSelect={true}
            placeholder="Цвет"
            components={{ DropdownIndicator }}
            options={colourOptions}
            onChange={(option) => dispatch(setColor(option))}
            styles={{
              control: controlStyle,
              menu: menuStyle,
              option: colorOptionStyle,
              dropdownIndicator: (provided, state) => ({
                ...provided,
                transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }),
              indicatorSeparator: () => null,
              placeholder: placeholderStyle
            }}
          />
          <Select
            placeholder="По цене"
            options={priceOptions}
            components={{ DropdownIndicator }}
            onChange={(option) => dispatch(setPrice(option))}
            styles={{
              control: controlStyle,
              menu: menuStyle,
              option: optionStyle,
              placeholder: placeholderStyle,
              dropdownIndicator: (provided, state) => ({
                ...provided,
                transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }),
              indicatorSeparator: () => null
            }}
          />
          <Select
            placeholder="Сортировать по"
            options={sortByOptions}
            components={{ DropdownIndicator }}
            onChange={(option) => dispatch(setOrder(option))}
            styles={{
              control: controlStyleLast,
              menu: menuStyle,
              option: optionStyle,
              placeholder: placeholderStyle,
              dropdownIndicator: (provided, state) => ({
                ...provided,
                transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }),
              indicatorSeparator: () => null
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Filters;
