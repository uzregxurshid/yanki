import { Link } from 'react-router-dom';
import NextImage from '../../../assets/images/category/nextVector.svg';
import CategoryImage1 from '../../../assets/images/category/categoryf.png';
import CategoryImage2 from '../../../assets/images/category/categoryt.png';
import CategoryImage3 from '../../../assets/images/category/categoryth.png';
import CategoryImage4 from '../../../assets/images/category/categoryfo.png';
const Category = () => {
  const style = {
    category: `category`,
    container: 'max-w-[1160px] w-full mx-auto block px-5 py-10 flex flex-col',
    categoryContainer: 'flex flex-col',
    categoryHeader: 'font-Raleway font-light text-2xl leading-7 text-[#252525]',
    listWrapper: 'mt-[30px]',
    list: 'flex justify-center',
    items: 'w-[165px] h-[230px] mx-1.5 relative flex flex-col justify-end overflow-hidden relative',
    itemstablet: 'hidden w-[165px] h-[230px] mx-1.5',
    itemslarge: 'hidden w-[165px] h-[230px] mx-0.5',
    categoryModels: 'z-[-1] mb-[-15px]',
    itemCategory: `absolute bottom-0 w-[165px] py-1 text-[18px] leading-[21px] bg-[#e0bea2bf] text-white font-Raleway text-center  transition duration-500 hover:bg-[#E0BEA2] active:bg-[#CCA88A]`
  };
  return (
    <div className={style.category}>
      <div className={style.container}>
        <div className={style.categoryContainer}>
          <h2 className={style.categoryHeader}>Категории</h2>
          <div className={style.listWrapper}>
            <ul className={style.list}>
              <li className={style.items}>
                <Link to={'/category'}>
                  <img className={style.categoryModels} src={CategoryImage1} alt="category" />
                  <div className={style.itemCategory}>Куртки</div>
                </Link>
              </li>
              <li className={style.items}>
                <Link to={'/category'}>
                  <img className={style.categoryModels} src={CategoryImage2} alt="category" />
                  <div className={style.itemCategory}>Пальто</div>
                </Link>
              </li>
              <li className={style.itemstablet}>
                <Link to={'/category'}>
                  <img className={style.categoryModels} src={CategoryImage3} alt="category" />
                  <div className={style.itemCategory}>Шубы</div>
                </Link>
              </li>
              <li className={style.itemslarge}>
                <Link to={'/category'}>
                  <img className={style.categoryModels} src={CategoryImage4} alt="category" />
                  <div className={style.itemCategory}>Парки</div>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              aria-label="Перейти к странице Категория"
              className={style.next}
              aria-hidden="true">
              <img className={style.nextImage} src={NextImage} alt="Next button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
