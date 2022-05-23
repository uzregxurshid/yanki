import Logo from '../../assets/images/header/YANKI.svg';
import Favorites from '../../assets/images/header/favorit.svg';
import Cart from '../../assets/images/header/cart.svg';
const Home = () => {
  const style = {
    header: 'header',
    container: 'max-w-[1160px] w-full mx-auto block px-5 pt-5 pb-20',
    headerContainer: 'flex items-center justify-between',
    navbar: 'flex items-center justify-between w-full',
    navbarHamburgerButton:
      'w-[34px] h-[24px] cursor-pointer flex flex-col hover:animate-pulse active:animate-ping',
    navbarHamburger1: 'bg-white block w-[34px] h-1',
    navbarHamburger2: 'bg-white block w-[26px] h-1 mt-1.5',
    navbarHamburger3: 'bg-white block w-[18px] h-1 mt-1.5',
    selectLanguage:
      'w-full h-[19px] ml-[22px] cursor-pointer bg-transparent font-Raleway font-light border-none text-base leading-[19px] text-white',
    logo: 'basis-38 ml-[-15px]',
    left: 'flex items-center',
    cart: 'ml-5',
    right: ''
  };
  return (
    <div
      className={style.header}
      style={{ backgroundImage: 'url(/assets/header/yankibg.png)', backgroundSize: 'cover' }}>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <div className={style.navbar}>
            <div className={style.left}>
              <button className={style.navbarHamburgerButton}>
                <span className={style.navbarHamburger1}></span>
                <span className={style.navbarHamburger2}></span>
                <span className={style.navbarHamburger3}></span>
              </button>
              <select className={style.selectLanguage}>
                <option className={style.option} value="ru">
                  RU
                </option>
                <option className={style.option} value="ua">
                  UA
                </option>
                <option className={style.option} value="en">
                  EN
                </option>
              </select>
            </div>
            <div className={style.logo}>
              <a className={style.logoLink} href="/">
                <img className={style.logoImage} width={79} height={20} src={Logo} />
              </a>
            </div>
            <div className={style.right}>
              <div className={style.buttons}>
                <button className={style.favorit} type="button">
                  <img src={Favorites} width={20} height={20} />
                </button>
                <button className={style.cart} type="button">
                  <img src={Cart} width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
