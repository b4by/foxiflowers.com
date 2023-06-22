import { usePagination } from "react-instantsearch-hooks-web";
import React from "react";

export const CustomPagination = (props) => {
  const {
    canRefine,
    currentRefinement,
    isFirstPage,
    isLastPage,
    nbHits,
    nbPages,
    pages,
    refine,
  } = usePagination(props);
  return (
    <ul className="flex flex-wrap gap-8 justify-center">
      {new Array(Math.ceil(nbHits / 20))
        .fill(0)
        .map((_, i) => i)
        .map((page) => (
          <li
            key={page}
            className={`font-bold text-[20px] leading-none rounded-lg w-[32px] h-[32px] flex items-center justify-center ${
              page === currentRefinement
                ? "bg-[#FB7571] text-white"
                : "bg-transparent text-black"
            }`}
          >
            <button
              type="button"
              className="w-full h-full"
              onClick={(event) => {
                document.documentElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                refine(page);
              }}
            >
              {page + 1}
            </button>
          </li>
        ))}
    </ul>
  );
};
