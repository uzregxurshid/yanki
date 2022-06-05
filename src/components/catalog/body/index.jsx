import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filters from '../accordion/filters';
import AccordionButton from '../accordion/index';
import Model1 from '../../../assets/images/category/card/model1.png';
import Card from '../card';
const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
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
      'font-Raleway ml-1.5 not-italic font-light text-[16px] leading-[19px] color-[#252525] transition duration-500 hover:text-[#E0BEA2]'
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
          <div className="md:flex md:mt-[34px] md:items-start">
            <div>
              <AccordionButton />
            </div>
            <div className="md:flex md:flex-col">
              <Filters />
              <div className="flex">
                <Card
                  image={Model1}
                  navigate={'/catalog/model1'}
                  onFavourite={() => {}}
                  isNew={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
