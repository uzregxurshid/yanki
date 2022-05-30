import NextImage from '../../../assets/images/category/nextVector.svg';
import CategoryImage1 from '../../../assets/images/category/categoryf.png';
import CategoryImage2 from '../../../assets/images/category/categoryt.png';
import CategoryImage3 from '../../../assets/images/category/categoryth.png';
import CategoryImage4 from '../../../assets/images/category/categoryfo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../card/index';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Category = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
  const style = {
    category: `category`,
    container:
      'lg:py-[100px] max-w-[1160px] w-full mx-auto block px-5 py-10 flex flex-col md:py-[80px]',
    categoryContainer: 'flex flex-col',
    categoryHeader:
      'md:text-[30px] lg:text-[36px] leading-[42px] font-Raleway font-light text-2xl leading-7 text-[#252525]',
    listWrapper: 'lg:mt-[50px] mt-[30px] md:mt-[40px] lg:mt-[50px]',
    list: 'flex justify-center relative',
    itemsm: 'hidden sm:flex',
    itemlg: 'hidden lg:flex',
    item: 'flex',
    nexter: 'flex relative justify-center items-center z-10',
    next: 'lg:w-10 lg:h-10 sm:right-5 active:bg-[#CCA88A] active:animate-pulse z-20 transition ease-in-out duration-500 hover:bg-[#E0BEA2] w-[30px] h-[30px] bg-[#E0BEA2] absolute flex justify-center items-center right-2 top-y-1/2 transform-center'
  };
  return (
    <div className={style.category}>
      <div className={style.container}>
        <div className={style.categoryContainer}>
          <h2 className={style.categoryHeader}>Категории</h2>
          <div className={style.listWrapper}>
            <ul className={style.list}>
              <Card
                image={CategoryImage1}
                backgroundSize="cover"
                backgroundPosition="center"
                categoryText="Куртки"
                to={'/category'}
                cardClassName={style.item}
                aos="flip-right"></Card>
              <Card
                image={CategoryImage2}
                backgroundSize="cover"
                backgroundPosition="center"
                categoryText="Пальто"
                to={'/category'}
                cardClassName={style.item}
                aos="flip-right"></Card>
              <Card
                image={CategoryImage3}
                backgroundSize="cover"
                backgroundPosition="center"
                to={'/category'}
                categoryText="Шубы"
                cardClassName={style.itemsm}
                aos="flip-right"></Card>
              <Card
                image={CategoryImage4}
                backgroundSize="cover"
                backgroundPosition="center"
                to={'/category'}
                categoryText="Парки"
                cardClassName={style.itemlg}
                aos="flip-right"></Card>
              <li className={style.nexter}>
                <button
                  type="button"
                  aria-label="Перейти к странице Категория"
                  className={style.next}
                  aria-hidden="true"
                  onClick={() => navigate('/category')}>
                  <img className={style.nextImage} src={NextImage} alt="Next button" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
