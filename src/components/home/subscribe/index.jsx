import { Dialog, Transition } from '@headlessui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { Fragment, useEffect, useRef, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';
const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
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
  const [defineText, setDefineText] = useState('You subscribed successfully.');
  const NewSubscribe = (e) => {
    e.preventDefault();
    axios
      // eslint-disable-next-line no-undef
      .post(`${process.env.REACT_APP_API}public/mail/subscribe`, {
        email
      })
      .then((res) => {
        if (res.status === 200) {
          setDefineText('You are subscribed.');
          setOpen(true);
          setEmail('');
        }
      })
      .catch((e) => {
        if (e) {
          setDefineText(e.response.data.result);
          setOpen(true);
          setEmail('');
        }
      });
  };
  return (
    <div className={style.sub}>
      <div className={style.container}>
        <div className={style.subContainer} data-aos="fade-up">
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              initialFocus={cancelButtonRef}
              onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex  sm:flex-col sm:items-center">
                          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-slate-100 sm:mx-0 sm:h-10 sm:w-10">
                            <CheckCircleIcon
                              className="h-16 w-16 text-yellow-400"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title
                              as="h2"
                              className="font-extrabold text-center text-transparent text-4xl sm:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                              Subscribed
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-gray-500 text-center text-xl sm:text-2xl">
                                {defineText}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col items-center">
                        <button
                          type="button"
                          className=" w-20 h-8 sm:w-36 sm:h-10 rounded bg-gradient-to-tr from-yellow-400 outline-none to-red-400 text-white text-sm font-semibold  hover:bg-gradient-to-tr"
                          onClick={() => setOpen(false)}>
                          Submit
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <h2 className={style.header}>Узнайте первым о новинках</h2>
          <form className={style.form} onSubmit={NewSubscribe}>
            <input
              className={style.input}
              type="email"
              placeholder="Введите ваш email"
              required="required"
              id="subscribe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
