import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useRef, useState } from "react";
import React from "react";

export const Dropdown = ({
  item,
  setFilters,
  setQuery,
  setActivePage,
  activeDropdown,
  setActiveDropdown,
}) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setShow(false));

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={`flex items-center font-bold text-[16px] leading-6 space-x-[4px] transition ease-in-out whitespace-nowrap group ${
          activeDropdown === item.name
        }`}
        onClick={(e) => {
          setShow(!show);
          setActiveDropdown(item.name);
        }}
      >
        <span
          className={`group-hover:text-[#FA524C] transition-colros ease-in-out duration-300 ${
            show && "text-[#FA524C]"
          }`}
        >
          {active || item.name}
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
            role="button"
            onClick={(e) => {
              e.stopPropagation();
              setShow(false);
              setActive(null);
              setQuery((query) => query !== "" && "");
              setActivePage(1);
              setFilters((filters) =>
                filters.map((filter) => {
                  if (filter.id === item.id) {
                    filter.value = "";
                  }
                  return filter;
                })
              );
            }}
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
      {show && activeDropdown === item.name && (
        <ul className="absolute top-[52px] flex flex-col pt-2 bg-white min-w-[calc(100%+110px)] z-[101] border border-[#F0F0F0] rounded-b-lg">
          {item.options.map((option) => (
            <li
              className="cursor-pointer py-2 px-6 hover:text-[#FA524C] transition ease-in-out duration-300 font-semibold"
              key={option}
              onClick={() => {
                setActive(option);
                setShow(false);
                setFilters((filters) =>
                  filters.map((filter) => {
                    if (filter.id === item.id) {
                      filter.value = option;
                    }
                    return filter;
                  })
                );
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
