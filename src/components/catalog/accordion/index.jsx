import { useRef } from 'react';
import { Link } from 'react-router-dom';
import AccordionImg from '../../../assets/images/category/accordion.svg';

const AccordionButton = () => {
  const catAccordion = useRef();
  const style = {
    accordionButton:
      'flex w-full h-10 mt-[15px] items-center justify-center bg-[#E0BEA2]  cursor-pointer transition duration-500 hover:drop-shadow-xl active:bg-[#CCA88A]  md:hidden',
    accordionSpan:
      'font-Raleway not-italic font-light text-white text-[18px] leading-[21px] mr-[9px]',
    accordionImg: 'accordion-img transition duration-500',
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
          document.querySelector('.accordion-img').classList.toggle('rotate-180');
        }}>
        <span className={style.accordionSpan}>Каталог</span>
        <img className={style.accordionImg} src={AccordionImg} alt="accordion" />
      </button>
      <ul ref={catAccordion} className={style.accordionList}>
        <li className={style.accordionItem}>
          <Link className={style.accordionLink} to={'/catalog/new'}>
            New
          </Link>
        </li>
        <li className={style.accordionItem}>
          <Link className={style.accordionLink} to={'/catalog/bestsellers'}>
            Bestsellers
          </Link>
        </li>
        <li className={style.accordionItem}>
          <Link className={style.accordionLink} to={'/catalog/furcoats'}>
            Шубы
          </Link>
        </li>
        <li className={style.accordionItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Пальто
          </Link>
        </li>
        <li className={style.accordionItem}>
          <Link className={style.accordionLink} to={'/catalog/showall'}>
            Посмотреть всё
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AccordionButton;
