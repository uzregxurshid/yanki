import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AccordionImg from '../../../assets/images/category/accordion.svg';
const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
  const catAccordion = useRef();
  const style = {
    cat: '',
    container: 'max-w-[1160px] w-full mx-auto  px-5 block',
    catContainer: 'flex flex-col',
    list: 'flex items-center',
    listItem: 'list-item',
    itemLink:
      'font-Raleway not-italic font-light text-[16px] leading-[19px] color-[#252525] transition duration-500 hover:text-[#E0BEA2]',
    itemnoFirst:
      'marker:content-rightRow  marker:left-[20px] marker:absolute  marker:z-20 ml-1.5 relative list-inside',
    itemLinknoFirst:
      'font-Raleway ml-1.5 not-italic font-light text-[16px] leading-[19px] color-[#252525] transition duration-500 hover:text-[#E0BEA2]',
    accordionButton:
      'flex w-full h-10 mt-[15px] items-center justify-center bg-[#E0BEA2]  cursor-pointer transition duration-500 hover:drop-shadow-xl active:bg-[#CCA88A]  md:hidden',
    accordionSpan:
      'font-Raleway not-italic font-light text-white text-[18px] leading-[21px] mr-[9px]',
    accordionImg: 'accordion-img transition duration-500'
  };

  return (
    <div className={style.cat}>
      <div className={style.container}>
        <div className={style.catContainer}>
          <div>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link className={style.itemLink} to={'/'}>
                  Главная
                </Link>
              </li>
              <li className={style.itemnoFirst}>
                <Link className={style.itemLinknoFirst} to={'/catalog'}>
                  Каталог
                </Link>
              </li>
            </ul>
          </div>
          <button
            className={style.accordionButton}
            type="button"
            onClick={(e) => {
              catAccordion.current.classList.toggle('max-h-0');
              catAccordion.current.classList.toggle('max-h-[200px]');
              document.querySelector('.accordion-img').classList.toggle('rotate-180');
              console.log(e.target.childNodes);
            }}>
            <span className={style.accordionSpan}>Каталог</span>
            <img className={style.accordionImg} src={AccordionImg} alt="accordion" />
          </button>
          <ul
            ref={catAccordion}
            className="w-full flex flex-col items-center max-h-0 transition-all duration-500  overflow-hidden">
            <li className="py-2.5 flex justify-center items-center border-b-[.25px] border-black w-full">
              <Link
                className="font-Raleway font-light text-[#252525]  hover:animate-pulse hover:text-[#E0BEA2] transition duration-500 text-[16px] leading-[19px]"
                to={'/catalog/new'}>
                New
              </Link>
            </li>
            <li className="py-2.5 flex justify-center items-center border-b-[.25px] border-black w-full">
              <Link
                className="font-Raleway font-light text-[#252525]  hover:animate-pulse hover:text-[#E0BEA2] transition duration-500 text-[16px] leading-[19px]"
                to={'/catalog/bestsellers'}>
                Bestsellers
              </Link>
            </li>
            <li className="py-2.5 flex justify-center items-center border-b-[.25px] border-black w-full">
              <Link
                className="font-Raleway font-light text-[#252525]  hover:animate-pulse hover:text-[#E0BEA2] transition duration-500 text-[16px] leading-[19px]"
                to={'/catalog/furcoats'}>
                Шубы
              </Link>
            </li>
            <li className="py-2.5 flex justify-center items-center border-b-[.25px] border-black w-full">
              <Link
                className="font-Raleway font-light text-[#252525]  hover:animate-pulse hover:text-[#E0BEA2] transition duration-500 text-[16px] leading-[19px]"
                to={'/catalog/coats'}>
                Пальто
              </Link>
            </li>
            <li className="py-2.5 flex justify-center items-center border-b-[.25px] border-black w-full">
              <Link
                className="font-Raleway font-light text-[#252525]  hover:animate-pulse hover:text-[#E0BEA2] transition duration-500 text-[16px] leading-[19px]"
                to={'/catalog/showall'}>
                Посмотреть всё
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
