import React from "react";
import vkSvg from "@/assets/svg/vk.svg";
import instagramSvg from "@/assets/svg/instagram.svg";
import mapImg from "@/assets/img/map@2x.jpg";

const ContactsPage = () => {
  return (
    <div className="pt-[42px] pb-[180px]">
      <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid xl:grid-cols-[397px_1fr] gap-8">
            <ul className="flex flex-col gap-y-[42px]">
              <li className="flex flex-col">
                <h3 className="font-bold text-[16px] leading-[18px] mb-4">
                  Адрес:
                </h3>
                <p>
                  125412, Россия, г. Москва, Ангарская ул., д. 26, к. 1, этаж 1,
                  пом. VII, ком. 4
                </p>
              </li>
              <li className="flex flex-col">
                <h3 className="font-bold text-[16px] leading-[18px] mb-4">
                  Телефон:
                </h3>
                <a
                  href="tel:88005509972"
                  className="font-bold text-[16px] leading-6 mb-2 hover:text-[#FA524C] transition ease-in-out duration-300"
                >
                  8 800 550 99 72
                </a>
                <span className="font-light text-[#6F6F78] text-[16px] leading-6">
                  Круглосуточно
                </span>
              </li>
              <li className="flex flex-col">
                <h3 className="font-bold text-[16px] leading-[18px] mb-4">
                  Почта:
                </h3>
                <a
                  href="mailto:support@foxiflowers.com"
                  className="font-bold text-[16px] leading-6 mb-2 hover:text-[#FA524C] transition ease-in-out duration-300"
                >
                  support@foxiflowers.com
                </a>
                <span className="font-light text-[#6F6F78] text-[16px] leading-6">
                  по всем вопросам
                </span>
              </li>
              <li className="flex flex-col">
                <h3 className="font-bold text-[16px] leading-[18px] mb-4">
                  Мы в соцсетях:
                </h3>
                <div className="flex gap-x-6">
                  <a href="/#vk" className="w-6 h-6 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="group-hover:hidden"
                    >
                      <g clipPath="url(#clip0_186_6683)">
                        <path
                          fill="#000"
                          d="M0 11.52c0-5.43 0-8.146 1.687-9.833C3.374 0 6.09 0 11.52 0h.96c5.43 0 8.146 0 9.833 1.687C24 3.374 24 6.09 24 11.52v.96c0 5.43 0 8.146-1.687 9.833C20.626 24 17.911 24 12.48 24h-.96c-5.43 0-8.146 0-9.833-1.687C0 20.626 0 17.911 0 12.48v-.96z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58c-.43 2.44-2.23 4.24-3.51 4.98 1.28.6 3.33 2.17 4.11 5.01h-2.84c-.61-1.9-2.13-3.37-4.14-3.57v3.57h-.31z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_186_6683">
                          <path fill="#fff" d="M0 0H24V24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden group-hover:block"
                    >
                      <g clipPath="url(#clip0_196_3839)">
                        <path
                          fill="#07F"
                          d="M0 11.52c0-5.43 0-8.146 1.687-9.833C3.374 0 6.09 0 11.52 0h.96c5.43 0 8.146 0 9.833 1.687C24 3.374 24 6.09 24 11.52v.96c0 5.43 0 8.146-1.687 9.833C20.626 24 17.911 24 12.48 24h-.96c-5.43 0-8.146 0-9.833-1.687C0 20.626 0 17.911 0 12.48v-.96z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58c-.43 2.44-2.23 4.24-3.51 4.98 1.28.6 3.33 2.17 4.11 5.01h-2.84c-.61-1.9-2.13-3.37-4.14-3.57v3.57h-.31z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_196_3839">
                          <path fill="#fff" d="M0 0H24V24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="/#instagram" className="w-6 h-6 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="group-hover:hidden"
                    >
                      <g fill="#000" clipPath="url(#clip0_186_6691)">
                        <path d="M12 2.162c3.204 0 3.584.012 4.849.07 1.308.06 2.655.358 3.608 1.311.962.962 1.251 2.296 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.059 1.301-.364 2.661-1.311 3.608-.962.962-2.295 1.251-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.291-.059-2.669-.371-3.608-1.311-.957-.957-1.251-2.304-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.059-1.296.367-2.664 1.311-3.608.96-.96 2.299-1.251 3.608-1.311 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.668 3.36.157 5.198.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.853.603 3.7 1.942 5.038 1.345 1.345 3.186 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.854-.085 3.698-.602 5.038-1.942 1.347-1.347 1.857-3.184 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.602-3.698-1.942-5.038C20.643.671 18.797.156 16.948.072 15.668.014 15.259 0 12 0z"></path>
                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zM18.406 7.034a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_186_6691">
                          <path fill="#fff" d="M0 0H24V24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="hidden group-hover:block"
                    >
                      <path
                        fill="url(#paint0_linear_196_3843)"
                        d="M12 2.162c3.204 0 3.584.012 4.849.07 1.308.06 2.655.358 3.608 1.311.962.962 1.251 2.296 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.059 1.301-.364 2.661-1.311 3.608-.962.962-2.295 1.251-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.291-.059-2.669-.371-3.608-1.311-.957-.957-1.251-2.304-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.059-1.296.367-2.664 1.311-3.608.96-.96 2.299-1.251 3.608-1.311 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.668 3.36.157 5.198.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.853.603 3.7 1.942 5.038 1.345 1.345 3.186 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.854-.085 3.698-.602 5.038-1.942 1.347-1.347 1.857-3.184 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.602-3.698-1.942-5.038C20.643.671 18.797.156 16.948.072 15.668.014 15.259 0 12 0z"
                      ></path>
                      <path
                        fill="url(#paint1_linear_196_3843)"
                        d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"
                      ></path>
                      <path
                        fill="url(#paint2_linear_196_3843)"
                        d="M18.406 7.034a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_196_3843"
                          x1="12"
                          x2="12"
                          y1="0"
                          y2="24"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2501FF"></stop>
                          <stop offset="1" stopColor="#ED4D09"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_196_3843"
                          x1="12"
                          x2="12"
                          y1="5.838"
                          y2="18.162"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2501FF"></stop>
                          <stop offset="1" stopColor="#ED4D09"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_196_3843"
                          x1="18.406"
                          x2="18.406"
                          y1="4.154"
                          y2="7.034"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2501FF"></stop>
                          <stop offset="1" stopColor="#ED4D09"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
              </li>
              <li className="flex flex-col gap-y-4">
                <h3 className="font-bold text-[16px] leading-[18px]">
                  Реквизиты:
                </h3>
                <span className="font-light text-[16px] leading-[18px]">
                  ООО «Графика»
                </span>
                <span className="font-light text-[16px] leading-[18px]">
                  ИНН: 7743403154
                </span>
                <span className="font-light text-[16px] leading-[18px]">
                  КПП: 774301001
                </span>
                <span className="font-light text-[16px] leading-[18px]">
                  ОГРН: 1227700873696
                </span>
              </li>
            </ul>
            <img
              src={mapImg}
              alt="map"
              className="object-cover saturate-0 hover:saturate-100 transition ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
