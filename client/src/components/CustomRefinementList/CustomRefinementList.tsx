import React from "react";
import { useRefinementList } from "react-instantsearch-hooks-web";

export const CustomRefinementList = (props) => {
  const { items, refine } = useRefinementList(props);

  return (
    <ul className="flex flex-col gap-y-3">
      {items.map((item) => (
        <li key={item.value} className="cursor-pointer">
          <label
            htmlFor={item.label}
            className="flex items-center gap-x-4 cursor-pointer group"
          >
            <div className="relative w-6 h-6 ">
              <input
                id={item.value}
                type="checkbox"
                value={item.value}
                checked={item.isRefined}
                className="appearance-none w-6 h-6 rounded-lg bg-transparent border border-[#DFDFE8] checked:bg-[#FB7571] group-hover:border-[#FB7571]"
                onChange={() => refine(item.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className={`top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  item.isRefined ? "absolute" : "hidden"
                }`}
              >
                <path
                  fill="#fff"
                  d="M6.312 10.435a1.04 1.04 0 011.508 0L11 13.732l6.18-6.408a1.04 1.04 0 011.508 0 1.135 1.135 0 010 1.563l-6.274 6.506a1.95 1.95 0 01-2.828 0l-3.274-3.395a1.135 1.135 0 010-1.563z"
                ></path>
              </svg>
            </div>
            <span className="text-[16px] leading-none text-[#1B1B1E]">
              {item.label}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};
