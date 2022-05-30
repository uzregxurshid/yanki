import 'tw-elements';
import Instagram from '../../../assets/images/footer/instagram.min.svg';
import Telegram from '../../../assets/images/footer/telegram.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 500
    });
    AOS.refresh();
  }, []);
  const style = {
    footer: 'footer',
    container: 'max-w-[1160px] w-full mx-auto block px-5 flex flex-col pb-[17px]',
    footerContainer: 'md:flex-row md:items-start flex flex-col items-center justify-center',
    accordionButton: `accordion-button collapsed relative flex  items-center w-full pb-[5px] bg-white border-0 rounded-none transition focus:outline-none
      font-Raleway text-[18px] leading-[21px] font-light mt-5 focus:text-black justify-between flex-col
      after:invert-[.92] after:sepia-[.12] after:saturate-[1192] after:hue-rotate-[317deg] after:brightness-[.89] after:contrast-[.96] 
      `,
    coltext:
      'mb-[-20px] text-[#252525] active:text-[#252525] focus:text-[#252525] hover:text-[#000]',
    contactx:
      'md:mt-[0] mt-5  md:w-3/12  md:flex md:flex-col  md:justify-start md:items-start md:ml-[calc(33.3%-170px)]'
  };
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footerContainer} data-aos="fade-up">
          <ul className="md:flex hidden w-9/12 justify-between">
            <li className="flex flex-col">
              <h3 className="text-[20px] leading-[23px] not-italic font-light font-Raleway">
                КОМПАНИЯ
              </h3>
              <ul className="flex flex-col mt-5">
                <li>
                  <a
                    className="text-[16px] leading-[19px] font-extralight font-Raleway text-[#252525]"
                    href="#">
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    className="text-[16px] leading-[19px] font-extralight font-Raleway text-[#252525]"
                    href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex flex-col">
              <h3 className="text-[20px] leading-[23px] not-italic font-light font-Raleway">
                ПОЛЕЗНОЕ
              </h3>
              <ul className="flex flex-col mt-5">
                <li>
                  <a
                    className="text-[16px] leading-[19px] font-extralight font-Raleway text-[#252525]"
                    href="#">
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    className="text-[16px] leading-[19px] font-extralight font-Raleway text-[#252525]"
                    href="#">
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    className="text-[16px] leading-[19px] font-extralight font-Raleway text-[#252525]"
                    href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex flex-col">
              <h3 className="text-[20px] leading-[23px] not-italic font-light font-Raleway">
                ПОКУПАТЕЛЮ
              </h3>
              <ul className="flex flex-col mt-5">
                <li>
                  <a
                    className="text-[16px] leading-[19px] font-extralight font-Raleway text-[#252525]"
                    href="#">
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    className="text-[16px] leading-[19px] font-extralight font-Raleway text-[#252525]"
                    href="#">
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    className="text-[16px] leading-[19px] font-extralight font-Raleway text-[#252525]"
                    href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="md:hidden accordion w-full" id="accordion">
            <div className="accordion-item bg-white border-b border-gray-200">
              <h2 className="accordion-header mb-0" id="headingOne">
                <button
                  className={style.accordionButton}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne">
                  <span className={style.coltext}> КОМПАНИЯ</span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5 flex justify-center">
                  <ul className="list-reset">
                    <li className="mb-3">
                      <a href="#" className="text-gray-600 hover:text-gray-900 font-Raleway">
                        О нас
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="text-gray-600 hover:text-gray-900 font-Raleway">
                        Контакты
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-white border-b border-gray-200">
              <h2 className="accordion-header mb-0" id="headingTwo">
                <button
                  className={style.accordionButton}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo">
                  <span className={style.coltext}> ПОЛЕЗНОЕ</span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5 flex justify-center">
                  <ul className="list-reset">
                    <li className="mb-3">
                      <a href="#" className="text-gray-600 hover:text-gray-900 font-Raleway">
                        Оплата и доставка
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="text-gray-600 hover:text-gray-900 font-Raleway">
                        Условия возврата
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="text-gray-600 hover:text-gray-900 font-Raleway">
                        Бонусная система
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item bg-white border-b border-gray-200">
              <h2 className="accordion-header mb-0" id="headingThree">
                <button
                  className={style.accordionButton}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree">
                  <span className={style.coltext}> ПОКУПАТЕЛЮ</span>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5 flex justify-center">
                  <ul className="list-reset">
                    <li className="mb-3">
                      <a href="#" className="text-gray-600 hover:text-gray-900 font-Raleway">
                        Избранное
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="text-gray-600 hover:text-gray-900 font-Raleway">
                        Публичная оферта
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="text-gray-600 hover:text-gray-900 font-Raleway">
                        Политика конфиденциальности
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={style.contactx}>
            <h3
              className="font-Raleway text-[18px] leading-[21px] font-light text-[#252525] text-center
                md:text-[20px] md:leading-[23px] md:not-italic">
              КОНТАКТЫ
            </h3>
            <ul className="flex mt-[10px] justify-center">
              <li className="">
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
            <div className="flex flex-col items-center justify-center mt-[5px]">
              <div className="mt-[5px]">
                <a
                  className="font-Raleway mt-[5px] text-[14px] leading-4 font-light text-[#252525] text-center"
                  href="tel:++38(073) 096 36 44">
                  +38(073) 096 36 44
                </a>
              </div>
              <div className="mt-[5px]">
                <a
                  className="font-Raleway mt-[5px] text-[14px] leading-4 font-light text-[#252525] text-center"
                  href="mailto:info@yanki.com">
                  info@yanki.com
                </a>
              </div>
            </div>
          </div>
          <div className="font-Raleway text-[10px] leading-3 text-center text-[#252525] mt-[30px] md:hidden">
            ©️ 2021 Yanki. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
