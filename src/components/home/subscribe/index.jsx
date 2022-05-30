import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);

  const style = {
    sub: 'sub',
    container:
      'sm:max-w-[640px] max-w-[1160px] w-full mx-auto block px-5 flex flex-col pb-[60px] md:pb-[80px] lg:pb-[100px]',
    header: `sm:text-[28px] md:text-[32px] lg:text-[36px] lg:leading-[42px]
    font-Raleway not-italic font-light text-2xl leading-[28px] text-center text-[#252525]`,
    form: 'flex flex-col mt-[30px] text-center md:mt-[40px] lg:mt-[50px]',
    input: `border-[#252525] border-[0.5px] border-solid py-3 text-center outline-none
      font-Raleway font-extralight leading-[16px] not-italic
      placeholder:font-Raleway placeholder:font-extralight placeholder:text-[#25252580] placeholder:text-sm placeholder:leading-[16px]
      focus:border-[#E0BEA2] md:text-[15px] lg:text-[16px] md:placeholder:text-[15px] lg:leading-[19px] lg:placeholder:leading-[19px] lg:placeholder:text-[16px]
      `,
    button: `mt-[15px] py-3 bg-[#E0BEA2] text-white text-[14px] leading-[16px] font-light font-Raleway text-center cursor-pointer 
    hover:drop-shadow-[0_5px_7px_rgba(37, 37, 37, 0.15)] transition duration-500 ease-in-out
    active:bg-[#CCA88A] transition duration-500 ease-in-out md:text-[15px] lg:text-[16px] lg:leading-[19px] md:mt-[18px] lg:mt-[20px] `,
    policy: `mt-[15px] text-[14px] font-extralight font-Raleway text-center leading-[16px] not-italic 
    md:text-[15px] lg:text-[16px] lg:leading-[19px] md:mt-[18px] lg:mt-[20px] `
  };
  return (
    <div className={style.sub}>
      <div className={style.container}>
        <div className={style.subContainer} data-aos="fade-up">
          <h2 className={style.header}>Узнайте первым о новинках</h2>
          <form className={style.form}>
            <input
              className={style.input}
              type="email"
              placeholder="Введите ваш email"
              required="required"
              id="subscribe"
            />
            <button className={style.button}>Подписаться</button>
            <label className={style.policy} htmlFor="subscribe">
              Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и
              ознакомлен(а) с условиями конфиденциальности.
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
