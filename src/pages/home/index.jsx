import Logo from '../../assets/images/header/YANKI.svg';
import Favorites from '../../assets/images/header/favorit.svg';
import Cart from '../../assets/images/header/cart.svg';
import Profile from '../../assets/images/header/profile.svg';
import Search from '../../assets/images/header/search.svg';
import { Link } from 'react-router-dom';
import './style.css';
const Home = () => {
  const style = {
    header: 'header',
    container:
      'max-w-[1160px] w-full mx-auto block px-5 pt-5 pb-[291px] flex flex-col md:pb-[330px] lg:pb-[393px]',
    headerContainer: 'flex items-center justify-between',
    navbar: 'flex items-center justify-between w-full',
    navbarHamburgerButton:
      'w-[34px] h-[24px] cursor-pointer flex flex-col hover:animate-pulse active:animate-ping',
    navbarHamburger1: 'bg-white block w-[34px] h-1',
    navbarHamburger2: 'bg-white block w-[26px] h-1 mt-1.5',
    navbarHamburger3: 'bg-white block w-[18px] h-1 mt-1.5',
    selectLanguage:
      'flex md:hidden w-full h-[19px] ml-[22px] cursor-pointer bg-transparent font-Raleway font-light border-none text-base leading-[19px] text-white',
    logo: 'basis-38 ml-[-20px] md:ml-1',
    left: 'flex items-center',
    cart: 'ml-5 hover:animate-pulse active:animate-ping',
    right: 'flex',
    favorit: 'hover:animate-pulse active:animate-ping md:ml-5',
    profile: 'hidden md:inline hover:animate-pulse active:animate-ping md:ml-5',
    search: 'hidden md:inline hover:animate-pulse active:animate-ping',
    list: 'hidden md:flex ml-[30px] lg:ml-[104px]',
    listItem: 'ml-3 lg:ml-6',
    listLink: 'text-base text-white font-Raleway font-light hover:animate-pulse',
    selectLang:
      'hidden md:flex w-full h-[19px] ml-[22px] cursor-pointer bg-transparent font-Raleway font-light border-none text-base leading-[19px] text-white',
    selectMoney:
      'hidden md:flex w-full h-[19px] ml-[22px] cursor-pointer bg-transparent font-Raleway font-light border-none text-base leading-[19px] text-white',
    langmon: 'flex mr-5 lg:mr-[75px]',
    intro: 'self-center mt-[246px]',
    introContainer: 'flex flex-col items-center justify-center',
    introHeader:
      'font-Raleway text-white text-[32px] text-center leading-[38px] opacity-[0.85] font-normal',
    divider: 'w-[120px] h-[1px] bg-white mt-[15px] block text-center',
    promotion:
      'link font-Raleway text-white text-sm leading-4 uppercase mt-4 flex active:animate-pulse',
    arrow: 'ml-[5px] hover:fill-[#E0BEA2]'
  };
  return (
    <div className={style.header}>
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
              <ul className={style.list}>
                <li className={style.listItem}>
                  <Link className={style.listLink} to={'/catalog'}>
                    NEW
                  </Link>
                </li>
                <li className={style.listItem}>
                  <Link className={style.listLink} to={'/catalog'}>
                    КАТАЛОГ
                  </Link>
                </li>
                <li className={style.listItem}>
                  <Link className={style.listLink} to={'/catalog'}>
                    О НАС
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.logo}>
              <a className={style.logoLink} href="/">
                <img className={style.logoImage} width={79} height={20} src={Logo} />
              </a>
            </div>
            <div className={style.right}>
              <div className={style.langmon}>
                <select className={style.selectLang}>
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
                <select className={style.selectMoney}>
                  <option className={style.option} value="uah">
                    UAH
                  </option>
                  <option className={style.option} value="usd">
                    USD
                  </option>
                  <option className={style.option} value="ru">
                    RUB
                  </option>
                </select>
              </div>
              <div className={style.buttons}>
                <button className={style.search}>
                  <img src={Search} width={20} height={20} />
                </button>
                <button className={style.profile}>
                  <img src={Profile} width={20} height={20} />
                </button>
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
        <div className={style.intro}>
          <div className={style.introContainer}>
            <h1 className={style.introHeader}>Новая коллекция</h1>
            <span className={style.divider}></span>
            <Link className={style.promotion} to={'/catalog'}>
              <span>Смотреть Новинки</span>{' '}
              <svg
                className={style.arrow}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  className={style.arrow}
                  d="M7.88906 7L4 3.11094L5.11094 2L10.1109 7L5.11094 12L4 10.8891L7.88906 7Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
