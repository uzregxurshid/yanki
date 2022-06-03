/* eslint-disable no-unused-vars */
import { useRef } from 'react';

import { flavourOptions } from './docs/data';
import Select from 'react-select';
import AccordionImg from '../../../assets/images/category/filterMore.svg';
import FilterImg from '../../../assets/images/category/filtr.svg';
const Filters = () => {
  const catAccordion = useRef();
  const style = {
    accordionButton:
      'flex w-full h-6 mt-[15px] items-start justify-between bg-teal-400  cursor-pointer transition duration-500 hover:drop-shadow-xl  md:hidden border-b-[.25px] border-[#252525]',
    accordFilterWrap: 'flex items-center',
    accordionSpan:
      'font-Raleway not-italic font-light text-[#252525] text-[16px] leading-[19px] mr-[9px]',
    accordionImg: 'accordion-imgf transition duration-500',
    accordionItem: 'py-2.5 flex justify-center items-center border-b-[.25px] border-black w-full',
    accordionList:
      'w-full flex flex-col items-center max-h-0 transition-all duration-500  overflow-hidden',
    accordionLink:
      'font-Raleway font-light text-[#252525]  hover:animate-pulse hover:text-[#E0BEA2] transition duration-500 text-[16px] leading-[19px]'
  };
  return (
    <>
      <button
        className={style.accordionButton}
        type="button"
        onClick={() => {
          catAccordion.current.classList.toggle('max-h-0');
          catAccordion.current.classList.toggle('max-h-[200px]');
          document.querySelector('.accordion-imgf').classList.toggle('rotate-180');
        }}>
        <div className={style.accordFilterWrap}>
          <span className={style.accordionSpan}>Фильтры</span>
          <img src={FilterImg} alt="filter" />
        </div>
        <img className={style.accordionImg} src={AccordionImg} alt="accordion" />
      </button>
      <ul ref={catAccordion} className={style.accordionList}>
        <li className={style.accordionItem}>
          <Select
            defaultValue={flavourOptions[2]}
            options={flavourOptions}
            styles={{
              menuList: (provided, state) => ({
                ...provided,
                overflow: 'scroll',
                height: 'auto'
              })
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'hotpink',
                primary: 'black'
              }
            })}
          />
        </li>
        <li className={style.accordionItem}></li>
        <li className={style.accordionItem}></li>
        <li className={style.accordionItem}></li>
      </ul>
    </>
  );
};

export default Filters;
