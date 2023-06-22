import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const routes = [
  { path: "/", breadcrumb: "Главная" },
  { path: "/delivery", breadcrumb: "Доставка" },
  { path: "/payments", breadcrumb: "Оплата" },
  { path: "/privacy", breadcrumb: "Политика конфиденциальности" },
  { path: "/popd", breadcrumb: "Обработка персональных данных" },
  { path: "/terms", breadcrumb: "Условия" },
  { path: "/about", breadcrumb: "О нас" },
  { path: "/contacts", breadcrumb: "Контакты" },
  { path: "/products", breadcrumb: "Каталог" },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={`py-6 border-b border-[#f0f0f0] ${
        pathname === "/" || pathname === "/cart" ? "hidden" : "block"
      }`}
    >
      <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
        <div className="max-w-7xl mx-auto px-8">
          <span className="font-light text-[14px] leading-4 text-[#6F6F78]">
            {breadcrumbs.map(({ breadcrumb }) => (
              <NavLink
                to={breadcrumb.key}
                key={breadcrumb.key}
                className="mr-1 hover:text-[#FA524C] transition ease-in-out duration-300 group last-of-type:hover:text-[#6F6F78] last-of-type:hover:cursor-default last-of-type:pointer-events-none"
              >
                {breadcrumb}
                <span className="group-last-of-type:hidden text-[#6F6F78]">
                  {" "}
                  /
                </span>
              </NavLink>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
