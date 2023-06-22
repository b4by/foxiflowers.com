import React from "react";
import { FilterModal } from "../../../modals/FilterModal/FilterModal";
import { openFilterModal } from "@/store/reducers/modalSlice";
import { useDispatch } from "react-redux";

export const FilterIcon = () => {
  const dispatch = useDispatch();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000"
      strokeWidth="1.5"
      className="xl:hidden cursor-pointer block w-6 h-6"
      viewBox="0 0 24 24"
      role="button"
      onClick={() => dispatch(openFilterModal())}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      ></path>
    </svg>
  );
};
