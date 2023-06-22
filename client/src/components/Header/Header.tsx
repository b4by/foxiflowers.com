import { Logo } from "@/common/Logo/Logo";
import { NavLink, useLocation } from "react-router-dom";
import { useTypedSelector } from "@/store/store";
import { useState } from "react";
import React from "react";
import { useGetProductsQuery } from "@/store/services/product.api";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { CustomSearchBox } from "../CustomSearchBox/CustomSearchBox";
import { DropdownRefinementList } from "../DropdownRefinementList/DropdownRefinementList";
import { transformTypesItems } from "../../utils/transformTypesItems";
import { transformRecipientsItems } from "../../utils/transformRecipientsItems";
import { transformEventsItems } from "../../utils/transformEventsItems";
import { transformColorsItems } from "../../utils/transformColorsItems";
import { DropdownCustomMenu } from "../DropdownCustomMenu/DropdownCustomMenu";
import { FilterIcon } from "../../common/icons/FilterIcon/FilterIcon";

const routes = [
  { id: 0, title: "Доставка", path: "/delivery" },
  { id: 1, title: "Оплата", path: "/payments" },
  { id: 2, title: "О нас", path: "/about" },
  { id: 3, title: "Контакты", path: "/contacts" },
];

const dropdownsList = [
  {
    id: 0,
    title: "Вид цветов",
    attribute: "types",
    transform: transformTypesItems,
    type: "list",
  },
  {
    id: 1,
    title: "Для кого",
    attribute: "recipients",
    trasnform: transformRecipientsItems,
    type: "menu",
  },
  {
    id: 2,
    title: "По случаю",
    attribute: "events",
    transform: transformEventsItems,
    type: "menu",
  },
  {
    id: 3,
    title: "Оттенки и цвета",
    attribute: "colors",
    transform: transformColorsItems,
    type: "list",
  },
];

export const Header = () => {
  const { cart } = useTypedSelector((state) => state);
  const pathname = useLocation().pathname;

  const [query, setQuery] = useState("");

  const [activeDropdown, setActiveDropdown] = useState(null);
  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useGetProductsQuery(query);

  return (
    <header className="bg-[#fff] w-full">
      <div className="py-8">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto xl:px-8">
            <nav className="flex items-center justify-between">
              <NavLink to="/" className="xl:mr-[117px]">
                <Logo />
              </NavLink>
              <div className="flex items-center gap-x-[98px]">
                <div className="hidden xl:flex gap-x-[40px]">
                  {routes.map((route) => (
                    <NavLink
                      to={route.path}
                      key={route.id}
                      className="font-light text-[16px] leading-[18px] hover:text-[#FA524C] transition ease-in-oute duration-300"
                    >
                      {route.title}
                    </NavLink>
                  ))}
                </div>
                <div className="flex items-center gap-x-[20px]">
                  <a
                    href="tel:88005509972"
                    className="hidden xl:flex items-center gap-x-3 font-medium text-[16px] leading-6 group hover:text-[#FA524C] transition ease-in-out duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-current group-hover:fill-[#FA524C] transition ease-in-out duration-300"
                    >
                      <g clipPath="url(#clip0_178_2958)">
                        <path
                          fill="current"
                          d="M13 1a1 1 0 011-1 10.01 10.01 0 0110 10 1 1 0 01-2 0 8.009 8.009 0 00-8-8 1 1 0 01-1-1zm1 5a4 4 0 014 4 1 1 0 102 0 6.006 6.006 0 00-6-6 1 1 0 100 2zm9.093 10.739a3.1 3.1 0 010 4.378l-.91 1.049c-8.19 7.841-28.12-12.084-20.4-20.3l1.15-1a3.081 3.081 0 014.327.04c.031.031 1.884 2.438 1.884 2.438a3.1 3.1 0 01-.007 4.282L7.979 9.082a12.78 12.78 0 006.931 6.945l1.465-1.165a3.1 3.1 0 014.281-.006s2.406 1.852 2.437 1.883zm-1.376 1.454s-2.393-1.841-2.424-1.872a1.1 1.1 0 00-1.549 0c-.027.028-2.044 1.635-2.044 1.635a1 1 0 01-.979.152A15.009 15.009 0 015.9 9.3a1 1 0 01.145-1s1.607-2.018 1.634-2.044a1.1 1.1 0 000-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 00-1.51.039l-1.15 1C-2.495 10.105 14.776 26.418 20.721 20.8l.911-1.05a1.12 1.12 0 00.085-1.557z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_178_2958">
                          <path fill="#fff" d="M0 0H24V24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <span>8 800 550 99 72</span>
                  </a>
                  {pathname !== "/" && <FilterIcon />}
                  <NavLink
                    to="/cart"
                    className="relative flex items-center justify-center gap-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-current hover:fill-[#FA524C] transition ease-in-oute duration-300"
                    >
                      <g clipPath="url(#clip0_303_553)">
                        <path
                          fill="current"
                          d="M21 6h-3A6 6 0 106 6H3a3 3 0 00-3 3v10a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V9a3 3 0 00-3-3zm-9-4a4 4 0 014 4H8a4 4 0 014-4zm10 17a3 3 0 01-3 3H5a3 3 0 01-3-3V9a1 1 0 011-1h3v2a1 1 0 102 0V8h8v2a1 1 0 002 0V8h3a1 1 0 011 1v10z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_303_553">
                          <path fill="#fff" d="M0 0H24V24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="relative bg-[#FB7571] w-6 h-6 text-white text-[16px] rounded-full">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] leading-[25px] h-6">
                        {cart?.products?.length}
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="hidden xl:block border-y border-[#f0f0f0]">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex flex-col lg:flex-row gap-6 bg-white">
                {dropdownsList.map((item) => {
                  if (item.type === "list") {
                    return (
                      <DropdownRefinementList
                        attribute={item.attribute}
                        transformItems={item.transform}
                        title={item.title}
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                        key={item.id}
                      />
                    );
                  }
                  if (item.type === "menu") {
                    return (
                      <DropdownCustomMenu
                        attribute={item.attribute}
                        transformItems={item.transform}
                        title={item.title}
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                        key={item.id}
                      />
                    );
                  }
                })}
              </div>
              <CustomSearchBox showLoadingIndicator />
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs />
    </header>
  );
};
