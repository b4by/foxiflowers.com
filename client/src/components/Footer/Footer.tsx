import { Logo } from "@/common/Logo/Logo";
import PaymentsPng from "@/assets/img/payments.png";
import { Link } from "react-router-dom";
import { memo } from "react";
import React from "react";
import { PaymentCards } from "../PaymentCards/PaymentCards";

const links = [
  { id: 0, name: "О нас", path: "/about" },
  { id: 1, name: "Оплата", path: "/payments" },
  { id: 2, name: "Доставка", path: "/delivery" },
  { id: 3, name: "Контакты", path: "/contacts" },
];

export const Footer = memo(() => {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col xl:flex-row justify-between py-[80px] border-b border-[#303030]">
            <div className="mb-20 xl:mb-0 flex flex-col font-medium text-[16px] leading-6 gap-2">
              <span>ООО «Графика»</span>
              <span>ИНН: 7743403154</span>
              <span>КПП: 774301001</span>
              <span>ОГРН: 1227700873696</span>
              <p>
                125412, Россия, г. Москва
                <span>
                  <br /> Ангарская ул., д. 26, к. 1, этаж 1,
                </span>
                <span>
                  <br /> пом. VII, ком. 4
                </span>
              </p>
            </div>
            <div className="grid xl:grid-cols-[95px_303px_269px] xl:justify-items-end gap-20">
              <div className="flex flex-col gap-y-4">
                {links.map((link) => (
                  <Link
                    to={link.path}
                    className="font-medium text-[16px] leading-6"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-y-4">
                <Link
                  to="/privacy"
                  className="font-medium text-[16px] leading-6 whitespace-nowrap"
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  to="/popd"
                  className="font-medium text-[16px] leading-6 whitespace-nowrap"
                >
                  Обработка персональных данных
                </Link>
                <Link
                  to="/terms"
                  className="font-medium text-[16px] leading-6 whitespace-nowrap"
                >
                  Условия
                </Link>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g clipPath="url(#clip0_174_2592)">
                      <path
                        fill="#fff"
                        d="M19 1H5a5.006 5.006 0 00-5 5v12a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V6a5.006 5.006 0 00-5-5zM5 3h14a3 3 0 012.78 1.887l-7.658 7.659a3.007 3.007 0 01-4.244 0L2.22 4.887A3 3 0 015 3zm14 18H5a3 3 0 01-3-3V7.5l6.464 6.46a5.007 5.007 0 007.072 0L22 7.5V18a3 3 0 01-3 3z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_174_2592">
                        <path fill="#fff" d="M0 0H24V24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <a
                    href="mailto:support@foxiflowers.com"
                    className="font-medium text-[16px] leading-6"
                  >
                    support@foxiflowers.com
                  </a>
                </div>
                <div className="flex items-center gap-x-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g clipPath="url(#clip0_174_2596)">
                      <path
                        fill="#fff"
                        d="M13 1a1 1 0 011-1 10.01 10.01 0 0110 10 1 1 0 11-2 0 8.009 8.009 0 00-8-8 1 1 0 01-1-1zm1 5a4 4 0 014 4 1 1 0 102 0 6.006 6.006 0 00-6-6 1 1 0 100 2zm9.093 10.74a3.1 3.1 0 010 4.377l-.91 1.05c-8.19 7.84-28.12-12.085-20.4-20.3l1.15-1a3.081 3.081 0 014.327.04c.031.03 1.884 2.437 1.884 2.437a3.1 3.1 0 01-.007 4.282L7.979 9.082a12.78 12.78 0 006.931 6.945l1.465-1.165a3.1 3.1 0 014.281-.006s2.406 1.852 2.437 1.883zm-1.376 1.453s-2.393-1.84-2.424-1.872a1.1 1.1 0 00-1.549 0c-.027.028-2.044 1.635-2.044 1.635a1 1 0 01-.979.152A15.007 15.007 0 015.9 9.3a1 1 0 01.145-1s1.607-2.018 1.634-2.044a1.1 1.1 0 000-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 00-1.51.04l-1.15 1C-2.495 10.104 14.776 26.417 20.721 20.8l.911-1.05a1.12 1.12 0 00.085-1.557z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_174_2596">
                        <path fill="#fff" d="M0 0H24V24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <a
                    href="tel:88005509972"
                    className="font-medium text-[16px] leading-6"
                  >
                    8 800 550 99 72
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative py-8 flex flex-col gap-12 xl:gap-0 xl:flex-row xl:justify-center">
            <div className="xl:absolute xl:left-1/2 xl:-translate-x-1/2 flex flex-col xl:flex-row gap-4 font-bold text-[14px] leading-6 text-[#B0B0BB]">
              <span>© 2022 foxiflowers.com</span>
              <span>Все права защищены</span>
            </div>
            <PaymentCards />
          </div>
        </div>
      </div>
    </footer>
  );
});
