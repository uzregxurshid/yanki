import Logo from '../../../assets/images/header/YANKI.svg';
import Favorites from '../../../assets/images/header/favorit.svg';
import Cart from '../../../assets/images/header/cart.svg';
import Profile from '../../../assets/images/header/profile.svg';
import Search from '../../../assets/images/header/search.svg';
import Searching from '../../../assets/images/header/searchingblack.svg';
import ProfilePic from '../../../assets/images/header/human.svg';
import Instagram from '../../../assets/images/footer/instagram.min.svg';
import Telegram from '../../../assets/images/footer/telegram.svg';
import { Link } from 'react-router-dom';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);

  const [open, setOpen] = useState(false);
  const navbar = useRef();
  const [hamburgerStyle, setHamburgerStyle] = useState({
    navbarHamburger1: 'bg-white block w-[34px] h-1',
    navbarHamburger2: 'bg-white block w-[26px] h-1 mt-1.5',
    navbarHamburger3: 'bg-white block w-[18px] h-1 mt-1.5'
  });
  const style = {
    header: 'header',
    container:
      'max-w-[1160px] w-full mx-auto block px-5 pt-5 pb-[291px] flex flex-col md:pb-[330px] lg:pb-[393px]',
    headerContainer: 'flex items-center justify-between relative z-10',
    navbar: 'flex items-center justify-between w-full',
    navbarHamburgerButton:
      'w-[34px] h-[24px] cursor-pointer flex flex-col hover:animate-pulse active:animate-ping',

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
    listLink:
      'text-base text-white font-Raleway font-light hover:animate-pulse hover:text-[#E0BEA2] transition duration-500',
    selectLang:
      'hidden md:flex w-full h-[19px] ml-[22px] cursor-pointer bg-transparent font-Raleway font-light border-none text-base leading-[19px] text-white',
    selectMoney:
      'hidden md:flex w-full h-[19px] ml-[22px] cursor-pointer bg-transparent font-Raleway font-light border-none text-base leading-[19px] text-white',
    langmon: 'flex mr-5 lg:mr-[75px]',
    intro: 'self-center mt-[246px]',
    introContainer: 'flex flex-col items-center justify-center',
    introHeader:
      'lg:text-[46px] lg:leading-[54px] md:text-[38px] md:leading-[48px]  font-Raleway text-white text-[32px] text-center leading-[38px] opacity-[0.85] font-normal',
    divider: 'w-[120px] h-[1px] bg-white mt-[15px] block text-center lg:mt-5',
    promotion:
      'lg:mt-5 md:text-[16px] md:leading-[18px] link font-Raleway text-white text-sm leading-4 uppercase mt-4 flex active:animate-pulse',
    arrow: 'ml-[5px] hover:fill-[#E0BEA2]'
  };

  const HamburgerOpen = () => {
    navbar.current.classList.toggle('translate-x-[calc(100vw)]');
    if (!open) {
      setHamburgerStyle({
        navbarHamburger1:
          'bg-white block w-[34px] h-1 rotate-45 translate-y-[9.5px] rounded transition duration-500 ease-in-out',
        navbarHamburger2: 'bg-white hidden w-[26px] h-1 mt-1.5',
        navbarHamburger3:
          'bg-white block w-[34px] h-1 mt-1.5 -rotate-45 rounded transition duration-500 ease-in-out'
      });
      setOpen(!open);
    } else {
      setHamburgerStyle({
        navbarHamburger1: 'bg-white block w-[34px] h-1 transition duration-500 ease-in-out',
        navbarHamburger2: 'bg-white block w-[26px] h-1 mt-1.5 transition duration-500 ease-in-out',
        navbarHamburger3: 'bg-white block w-[18px] h-1 mt-1.5 transition duration-500 ease-in-out'
      });
      setOpen(!open);
    }
  };
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <div
            ref={navbar}
            className="absolute md:top-[-25px] z-10 flex flex-col items-center w-screen md:pb-0 pb-[30px] bg-white left-[calc(-100vw-20px)] clg:left-[calc(calc(-100vw-(calc(calc(100vw-1160px)/2)))-20px)] top-10 transition ease-in-out duration-500  overflow-hidden ">
            <ul className="flex flex-col w-full md:flex-row md:items-center">
              <li className="pb-5 border-b-[0.3px] border-solid border-[#252525]  mt-5 flex justify-center md:hidden">
                <div className="flex">
                  <div className="flex relative">
                    <input
                      className="w-[261px] rounded-full pl-5 py-2.5 border-[0.3px] border-[#252525] outline-none"
                      type="search"
                      name="search"
                      id="search"
                      placeholder="?????????????? ?????? ????????????"
                    />
                    <img
                      className="absolute right-3 top-3 cursor-pointer"
                      src={Searching}
                      alt="SearchIcon"
                    />
                  </div>
                  <select
                    className="ml-5 border-none bg-white cursor-pointer"
                    name="money"
                    id="money">
                    <option value="uah">UAH</option>
                    <option value="rub">RUB</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </li>
              <li className="mt-5 pb-5 border-b-[0.3px] border-solid border-[#252525] md:hidden">
                <a
                  className="flex cursor-pointer items-center justify-center hover:opacity-75 transition duration-500 active:opacity-50"
                  href="#">
                  <img src={ProfilePic} alt="human" />
                  <span className="hover:text-[#E0BEA2] transition duration-500  font-Raleway not-italic uppercase text-base leading-5 text-[#252525] ml-[5px]">
                    ???????????? ??????????????
                  </span>
                </a>
              </li>
              <li className="mt-5 pb-5 border-b-[0.3px] border-solid border-[#252525] md:hidden">
                <a
                  className="cursor-pointer flex items-center justify-center hover:opacity-75 transition duration-500 active:opacity-50"
                  href="#">
                  <span className="hover:text-[#E0BEA2] transition duration-500  font-Raleway not-italic uppercase text-base leading-5 text-[#252525]">
                    NEW
                  </span>
                </a>
              </li>
              <li className="mt-5 pb-5 border-b-[0.3px] border-solid border-[#252525] md:hidden">
                <Link
                  to={'/catalog'}
                  className="cursor-pointer flex items-center justify-center hover:opacity-75 transition duration-500 active:opacity-50">
                  <span className="hover:text-[#E0BEA2] transition duration-500  font-Raleway not-italic uppercase text-base leading-5 text-[#252525]">
                    ??????????????
                  </span>
                </Link>
              </li>
              <li className="mt-5 pb-5 border-b-[0.3px] border-solid border-[#252525] md:hidden">
                <a className="cursor-pointer flex items-center justify-center hover:opacity-75 transition duration-500 active:opacity-50">
                  <span className="hover:text-[#E0BEA2] transition duration-500  font-Raleway not-italic uppercase text-base leading-5 text-[#252525]">
                    ?? ??????
                  </span>
                </a>
              </li>
              <li className="hidden clg:ml-[calc(calc(calc(100vw-1160px)/2)+24px)] md:flex ml-5 md:mt-5 md:pb-5 mt-5 pb-5 md:border-b-0 border-b-[0.3px] border-solid border-[#252525]">
                <button className="py-3" type="button" onClick={HamburgerOpen}>
                  <span className="h-1 w-[34px] block bg-[#CCA88A] rotate-[-45deg] translate-x-[-1px] translate-y-[3.5px]"></span>
                  <span className="h-1 w-[34px] block bg-[#CCA88A] rotate-45"></span>
                </button>
              </li>
              <li className="hidden md:flex lg:ml-[128px] md:ml-10 md:mt-5 md:pb-5 mt-5 pb-5 md:border-b-0 border-b-[0.3px] border-solid border-[#252525]">
                <a className="cursor-pointer flex items-center justify-center hover:opacity-75 transition duration-500 active:opacity-50">
                  <span className="hover:text-[#E0BEA2] transition duration-500  font-Raleway not-italic uppercase text-base leading-5 text-[#252525]">
                    ???????????? ?? ????????????????
                  </span>
                </a>
              </li>
              <li className="md:ml-3 lg:ml-6 md:mt-5 md:pb-5 mt-5 pb-5 md:border-b-0 border-b-[0.3px] border-solid border-[#252525]">
                <a className="cursor-pointer flex items-center justify-center hover:opacity-75 transition duration-500 active:opacity-50">
                  <span className="hover:text-[#E0BEA2] transition duration-500  font-Raleway not-italic uppercase text-base leading-5 text-[#252525]">
                    ?????????????? ????????????????
                  </span>
                </a>
              </li>
              <li className="md:ml-3 lg:ml-6 md:mt-5 md:pb-5 mt-5 pb-5 md:border-b-0 border-b-[0.3px] border-solid border-[#252525]">
                <a className="cursor-pointer flex items-center justify-center hover:opacity-75 transition duration-500 active:opacity-50">
                  <span className="hover:text-[#E0BEA2] transition duration-500  font-Raleway not-italic uppercase text-base leading-5 text-[#252525]">
                    ????????????????
                  </span>
                </a>
              </li>
            </ul>
            <div className="flex flex-col mt-20 md:hidden">
              <ul className="flex items-center flex-col">
                <li>
                  <ul className="flex item-center">
                    <li>
                      <a href="#">
                        <img src={Instagram} alt="Instagram" />
                      </a>
                    </li>
                    <li className="ml-2.5">
                      <a href="#">
                        <img src={Telegram} alt="Telegram" />
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-[5px]">
                  <a
                    className="font-Raleway font-extralight not-italic text-sm leading-4"
                    href="tel:+38(073) 096 36 44">
                    +38(073) 096 36 44
                  </a>
                </li>
                <li className="mt-[5px]">
                  <a
                    className="font-Raleway font-extralight not-italic text-sm leading-4"
                    href="mailto:info@yanki.com">
                    info@yanki.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.navbar}>
            <div className={style.left}>
              <button className={style.navbarHamburgerButton} type="button" onClick={HamburgerOpen}>
                <span className={hamburgerStyle.navbarHamburger1}></span>
                <span className={hamburgerStyle.navbarHamburger2}></span>
                <span className={hamburgerStyle.navbarHamburger3}></span>
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
                    ??????????????
                  </Link>
                </li>
                <li className={style.listItem}>
                  <Link className={style.listLink} to={'/catalog'}>
                    ?? ??????
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
        <div className={style.intro} data-aos="fade-up">
          <div className={style.introContainer}>
            <h1 className={style.introHeader}>?????????? ??????????????????</h1>
            <span className={style.divider}></span>
            <Link className={style.promotion} to={'/catalog'}>
              <span>???????????????? ??????????????</span>{' '}
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

export default Header;
