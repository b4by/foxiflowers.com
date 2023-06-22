import React from "react";
import { useMenu } from "react-instantsearch-hooks-web";

export const CustomMenu = (props) => {
  const { items, refine } = useMenu(props);
  return (
    <fieldset className="flex flex-col gap-y-4">
      {items.map((item) => (
        <div
          className="flex items-center cursor-pointer group"
          key={item.value}
        >
          <div className="relative h-6 w-6 cursor-pointer">
            <input
              id={item.value}
              type="radio"
              name={props.name}
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
            className="flex items-center text-sm font-medium text-gray-900 ml-2 cursor-pointer"
          >
            {item.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
};
