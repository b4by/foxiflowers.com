import { useNumericMenu } from "react-instantsearch-hooks-web";
import React from "react";

export const CustomNumericMenu = (props) => {
  const { items, refine } = useNumericMenu(props);

  return (
    <ul className="flex flex-col gap-y-3">
      {items.map((item) => (
        <li className="flex items-center cursor-pointer group" key={item.label}>
          <div className="relative h-6 w-6 cursor-pointer">
            <input
              id={item.value}
              type="radio"
              name="prices"
              value={item.value}
              className="appearance-none h-6 w-6 border border-[#DFDFE8] focus:ring-1 focus:ring-[#FB7571] focus:border-2 focus:border-[#FB7571] rounded-full cursor-pointer checked:border-2 checked:border-[#FB7571] group-hover:border-[#FB7571]"
              checked={item.isRefined}
              onChange={() => refine(item.value)}
            />
            <span
              className={`w-3 h-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FB7571] rounded-full ${
                item.isRefined ? "absolute" : "hidden"
              }`}
            ></span>
          </div>
          <label
            htmlFor={item.value}
            className="flex items-center leading-none text-sm font-medium text-gray-900 ml-4 cursor-pointer"
          >
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
};
