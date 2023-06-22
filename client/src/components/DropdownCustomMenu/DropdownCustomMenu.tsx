import { useMenu } from "react-instantsearch-hooks-web";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export const DropdownCustomMenu = (props) => {
  const { items, refine, createURL } = useMenu(props);
  const { title, activeDropdown, setActiveDropdown } = props;
  const navigate = useNavigate();
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);

  useOnClickOutside(ref, () => setShow(false));

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        ref={ref}
        className="flex items-center font-bold text-[16px] leading-6 space-x-[4px] transition ease-in-out whitespace-nowrap group"
        onClick={(e) => {
          setShow(!show);
          setActiveDropdown(title);
        }}
      >
        <span
          className={`group-hover:text-[#FA524C] transition-colros ease-in-out duration-300 ${
            show && "text-[#FA524C]"
          }`}
        >
          {title}
        </span>
        {!active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className={`fill-current group-hover:fill-[#FA524C] transition-colors ease-in-out duration-300 transform ${
              show && "-rotate-180 fill-[#FA524C]"
            }`}
          >
            <path
              fill="current"
              d="M18.71 8.21a1 1 0 00-1.42 0l-4.58 4.58a1.002 1.002 0 01-1.42 0L6.71 8.21a1 1 0 10-1.42 1.41l4.59 4.59a3 3 0 004.24 0l4.59-4.59a1 1 0 000-1.41z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className={`relative -top-[1px] fill-current hover:fill-[#FA524C] transition ease-in-out duration-300 z-10 align-baseline`}
          >
            <path
              className="stroke-current"
              stroke="#1C1E27"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 18L6 6m12 0L6 18"
            ></path>
          </svg>
        )}
      </button>
      {show && activeDropdown === title && (
        <ul className="absolute top-[52px] flex flex-col pt-2 bg-white min-w-[calc(100%+110px)] z-[101] border border-[#F0F0F0] rounded-b-lg">
          {items.map((item) => (
            <li
              key={item.value}
              className="cursor-pointer py-2 px-6 hover:text-[#FA524C] transition ease-in-out duration-300 font-semibold"
            >
              <a
                href={createURL(item.value)}
                onClick={(e) => {
                  e.preventDefault();
                  refine(item.value);
                  navigate("/products");
                  setShow(false);
                  setActive(null);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
