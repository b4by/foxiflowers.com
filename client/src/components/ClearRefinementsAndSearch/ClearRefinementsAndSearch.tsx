import {
  useClearRefinements,
  useSearchBox,
} from "react-instantsearch-hooks-web";
import React from "react";

export const ClearRefinementsAndSearch = (props) => {
  const { refine, canRefine, createURL } = useClearRefinements(props);
  const { clear } = useSearchBox(props);
  return (
    <button
      type="button"
      className="bg-[#FB7571] rounded-3xl py-3 px-6 font-bold text-white text-[16px] leading-6 hover:bg-[#FA524C] transition ease-in-out duration-300"
      onClick={() => {
        clear();
        refine();
        document.documentElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      Сбросить фильтры
    </button>
  );
};
