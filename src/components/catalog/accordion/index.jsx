import { useRef } from 'react';
import { Link } from 'react-router-dom';
import AccordionImg from '../../../assets/images/category/accordion.svg';

const AccordionButton = () => {
  const catAccordion = useRef();
  const style = {
    accordionButton:
      'flex w-full md:w-[150px] md:mr-[30px] md:hidden h-10 mt-[15px] items-center justify-center bg-[#E0BEA2]  cursor-pointer transition duration-500 hover:drop-shadow-xl active:bg-[#CCA88A] ',
    accordionSpan:
      'font-Raleway not-italic font-light text-white text-[18px] leading-[21px] mr-[9px]',
    accordionImg: 'accordion-img transition duration-500',
    accordionItem:
      'py-2.5 flex justify-center items-center md:justify-start border-b-[.25px] border-[#E0BEA2] w-full md:border-b-0',
    accordionMdItem:
      'py-2.5 hidden md:flex justify-center md:justify-start items-center border-b-[.25px] border-[#E0BEA2] w-full md:border-b-0',
    accordionList:
      'w-full flex flex-col items-center max-h-0 transition-all duration-500  overflow-hidden md:max-h-max  md:w-[150px] md:mr-[30px] xl:mr-4',
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
      <h1 className="hidden md:flex font-Raleway font-light not-italic text-xl leading-[23px] mb-[30px] text-[#252525] pt-1.5">
        Каталог
      </h1>
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
          <Link className={style.accordionLink} to={'/catalog/outwear'}>
            Верхняя одежда
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
        {/*  */}
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Пуховики и жилеты
          </Link>
        </li>
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Костюмы
          </Link>
        </li>{' '}
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Жакеты
          </Link>
        </li>
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Платья
          </Link>
        </li>{' '}
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Рубашки и блузы
          </Link>
        </li>{' '}
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Юбки
          </Link>
        </li>{' '}
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Футболки и топы
          </Link>
        </li>{' '}
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Аксессуары
          </Link>
        </li>{' '}
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Sale
          </Link>
        </li>{' '}
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Summer
          </Link>
        </li>{' '}
        <li className={style.accordionMdItem}>
          <Link className={style.accordionLink} to={'/catalog/coats'}>
            Пальто
          </Link>
        </li>
        {/*  */}
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
