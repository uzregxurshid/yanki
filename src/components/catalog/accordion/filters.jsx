/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';

import { sizeOptions } from './docs/data';
import Select from 'react-select';
import AccordionImg from '../../../assets/images/category/filterMore.svg';
import FilterImg from '../../../assets/images/category/filtr.svg';
const Filters = () => {
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
    borderBottom: state.isFocused ? '.25px solid #E0BEA2' : '.25px solid #E0BEA2',
    ':hover': {
      borderBottom: '.25px solid #E0BEA2'
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
  const [size, setSize] = useState(null);

  const style = {
    accordionButton:
      'flex w-full h-6 mt-[15px] items-start justify-between px-2 cursor-pointer transition duration-500 hover:drop-shadow-xl  md:hidden border-b-[.25px] border-[#252525]',
    accordFilterWrap: 'flex items-center',
    accordionSpan:
      'font-Raleway not-italic font-light text-[#252525] text-[16px] leading-[19px] mr-[9px]',
    accordionImg: 'accordion-imgf transition duration-500',
    accordionItem: 'py-2.5 border-b-[.25px] border-black w-full',
    accordionList: 'w-full flex flex-col items-center hidden transition-all duration-500',
    accordionLink:
      'font-Raleway font-light text-[#252525]  hover:animate-pulse hover:text-[#E0BEA2] transition duration-500 text-[16px] leading-[19px]'
  };
  return (
    <>
      <button
        className={style.accordionButton}
        type="button"
        onClick={() => {
          catAccordion.current.classList.toggle('hidden');
          document.querySelector('.accordion-imgf').classList.toggle('rotate-180');
        }}>
        <div className={style.accordFilterWrap}>
          <span className={style.accordionSpan}>Фильтры</span>
          <img src={FilterImg} alt="filter" />
        </div>
        <img className={style.accordionImg} src={AccordionImg} alt="accordion" />
      </button>
      <form ref={catAccordion} className={style.accordionList}>
        <div className="w-full">
          <Select
            placeholder="Размер"
            options={sizeOptions}
            onChange={(option) => setSize(option)}
            styles={{
              control: controlStyle,
              menu: menuStyle,
              option: optionStyle,
              placeholder: placeholderStyle
            }}
          />
          <Select
            placeholder="Размер"
            options={sizeOptions}
            onChange={(option) => setSize(option)}
            styles={{
              control: controlStyle,
              menu: menuStyle,
              option: optionStyle,
              placeholder: placeholderStyle
            }}
          />
          <Select
            placeholder="Размер"
            options={sizeOptions}
            onChange={(option) => setSize(option)}
            styles={{
              control: controlStyle,
              menu: menuStyle,
              option: optionStyle,
              placeholder: placeholderStyle
            }}
          />
          <Select
            placeholder="Размер"
            options={sizeOptions}
            onChange={(option) => setSize(option)}
            styles={{
              control: controlStyle,
              menu: menuStyle,
              option: optionStyle,
              placeholder: placeholderStyle
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Filters;
