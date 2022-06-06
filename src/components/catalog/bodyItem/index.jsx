import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Model1 from '../../../assets/images/category/card/model1.png';
import Model2 from '../../../assets/images/category/card/model2.png';
import Model3 from '../../../assets/images/category/card/model3.png';
import Model4 from '../../../assets/images/category/card/model4.png';
import Card from '../card';
const BodyItem = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
  const style = {
    cat: '',
    container: 'max-w-[1160px] w-full mx-auto  px-5 block',
    catContainer: 'flex flex-col pb-[100px]',
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
            <div className="md:flex md:flex-col md:w-full">
              <div className="flex mt-[15px] justify-between w-full flex-wrap sm:grid sm:grid-cols-2 sm:justify-center md:w-full lg:grid-cols-3">
                <Card
                  image={Model1}
                  navigate={'/catalog/outwear/model1'}
                  onFavourite={() => {}}
                  isNew={true}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model2}
                  navigate={'/catalog/model2'}
                  onFavourite={() => {}}
                  isNew={false}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model3}
                  navigate={'/catalog/model3'}
                  onFavourite={() => {}}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model4}
                  navigate={'/catalog/model4'}
                  onFavourite={() => {}}
                  isNew={true}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model1}
                  navigate={'/catalog/model1'}
                  onFavourite={() => {}}
                  isNew={true}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model2}
                  navigate={'/catalog/model2'}
                  onFavourite={() => {}}
                  isNew={false}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model3}
                  navigate={'/catalog/model3'}
                  onFavourite={() => {}}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model4}
                  navigate={'/catalog/model4'}
                  onFavourite={() => {}}
                  isNew={true}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model1}
                  navigate={'/catalog/model1'}
                  onFavourite={() => {}}
                  isNew={true}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model2}
                  navigate={'/catalog/model2'}
                  onFavourite={() => {}}
                  isNew={false}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model3}
                  navigate={'/catalog/model3'}
                  onFavourite={() => {}}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
                <Card
                  image={Model4}
                  navigate={'/catalog/model4'}
                  onFavourite={() => {}}
                  isNew={true}
                  sizes={['XXS', 'S', 'M', 'L', 'XL']}
                  colors={['#ffffff', '#6F83A4', '#F1DDAA']}
                  className="justify-self-center xl:ml-2.5 xl:justify-self-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyItem;
