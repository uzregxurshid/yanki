import NextImage from '../../../assets/images/category/nextVector.svg';
import CategoryImage1 from '../../../assets/images/category/categoryf.png';
import CategoryImage2 from '../../../assets/images/category/categoryt.png';
import CategoryImage3 from '../../../assets/images/category/categoryth.png';
import CategoryImage4 from '../../../assets/images/category/categoryfo.png';

import Card from '../card/index';
const Category = () => {
  const style = {
    category: `category`,
    container: 'lg:py-[100px] max-w-[1160px] w-full mx-auto block px-5 py-10 flex flex-col',
    categoryContainer: 'flex flex-col',
    categoryHeader: 'font-Raleway font-light text-2xl leading-7 text-[#252525]',
    listWrapper: 'lg:mt-[50px] mt-[30px] md:mt-[40px] lg:mt-[50px]',
    next: 'hidden',
    list: 'flex justify-center',
    itemsm: 'hidden sm:flex',
    itemlg: 'hidden lg:flex',
    item: 'flex'
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
                cardClassName={style.item}></Card>
              <Card
                image={CategoryImage2}
                backgroundSize="cover"
                backgroundPosition="center"
                categoryText="Пальто"
                cardClassName={style.item}></Card>
              <Card
                image={CategoryImage3}
                backgroundSize="cover"
                backgroundPosition="center"
                categoryText="Шубы"
                cardClassName={style.itemsm}></Card>
              <Card
                image={CategoryImage4}
                backgroundSize="cover"
                backgroundPosition="center"
                categoryText="Парки"
                cardClassName={style.itemlg}></Card>
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
