import React from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";
import { useLocation, useNavigate } from "react-router-dom";

export const CustomSearchBox = (props) => {
  const { query, refine, clear } = useSearchBox(props);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleChange = (event) => {
    if (pathname !== "/products") {
      navigate("/products");
      refine(event.currentTarget.value);
      return;
    }
    refine(event.currentTarget.value);
  };

  return (
    <form noValidate role="search" className="relative h-12">
      <div className="w-full relative h-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute top-1/2 left-0  transform translate-x-4 -translate-y-1/2"
        >
          <path
            fill="#B0B0BB"
            d="M20.67 19.084l-3.483-3.485a7.878 7.878 0 10-1.588 1.587l3.485 3.486a1.122 1.122 0 101.587-1.587v-.001zm-9.762-2.57a5.606 5.606 0 110-11.212 5.606 5.606 0 010 11.212z"
          ></path>
        </svg>
        <input
          type="search"
          value={query}
          onChange={handleChange}
          className="w-[505px] border border-[#F0F0F0] rounded-2xl py-3 px-4 h-12 pl-[52px] text-[16px] leading-6 text-[#b0b0bb]"
          placeholder="Введите название..."
        />
      </div>
    </form>
  );
};
