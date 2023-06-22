import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { flowerPrices } from "../../constants";
import { CustomNumericMenu } from "../../components/CustomNumericMenu/CustomNumericMenu";
import {
  closeFilterModal,
  selectFilterModalIsOpen,
} from "../../store/reducers/modalSlice";
import { transformTypesItems } from "../../utils/transformTypesItems";
import { CustomRefinementList } from "../../components/CustomRefinementList/CustomRefinementList";
import { ClearRefinementsAndSearch } from "../../components/ClearRefinementsAndSearch/ClearRefinementsAndSearch";
import { transformRecipientsItems } from "../../utils/transformRecipientsItems";
import { CustomMenu } from "../../components/CustomMenu/CustomMenu";
import { transformEventsItems } from "../../utils/transformEventsItems";
import { transformColorsItems } from "../../utils/transformColorsItems";

export const FilterModal = ({ onClick }) => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState("");
  const filterModalIsOpen = useSelector(selectFilterModalIsOpen);

  useEffect(() => {
    if (filterModalIsOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    }
  }, [filterModalIsOpen]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      window.innerHeight * 0.01 + "px"
    );
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#808080] backdrop-blur-[10px] bg-opacity-30 z-[105]  ${
        filterModalIsOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative w-screen h-screen bg-white overflow-y-scroll">
        <div className="px-4 py-4">
          <div className="flex justify-between mb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="none"
              viewBox="0 0 24 24"
              role="button"
              className="transform rotate-90"
              onClick={() => {
                if (activeFilter === "") {
                  dispatch(closeFilterModal());
                  return;
                }
                setActiveFilter("");
              }}
            >
              <path
                fill="#1C1E27"
                d="M15.707 11.707a1 1 0 00-1.414-1.414l1.414 1.414zM12 14l-.707.707a1 1 0 001.414 0L12 14zm-2.293-3.707a1 1 0 10-1.414 1.414l1.414-1.414zm4.586 0l-3 3 1.414 1.414 3-3-1.414-1.414zm-1.586 3l-3-3-1.414 1.414 3 3 1.414-1.414z"
              ></path>
            </svg>
            <h2 className="font-bold text-lg text-center flex flex-col justify-center">
              {activeFilter === "" && "Фильтры"}
              {activeFilter === "price" && "Цена"}
              {activeFilter === "types" && "Цветы"}
              {activeFilter === "recipients" && "Кому"}
              {activeFilter === "events" && "Повод"}
              {activeFilter === "colors" && "Гамма"}
            </h2>
          </div>
          {activeFilter === "" && (
            <div className="flex flex-col gap-y-4">
              <input
                type="button"
                className="w-full bg-[#b0b0bb] border border-[#F0F0F0] rounded-2xl py-3 px-4 h-12 text-[16px] leading-6 text-white"
                value="Цена"
                onClick={() => setActiveFilter("price")}
                readOnly
              />
              <input
                type="button"
                className="w-full bg-[#b0b0bb] border border-[#F0F0F0] rounded-2xl py-3 px-4 h-12 text-[16px] leading-6 text-white"
                value="Цветы"
                onClick={() => setActiveFilter("types")}
                readOnly
              />
              <input
                type="button"
                className="w-full bg-[#b0b0bb] border border-[#F0F0F0] rounded-2xl py-3 px-4 h-12 text-[16px] leading-6 text-white"
                value="Кому"
                onClick={() => setActiveFilter("recipients")}
                readOnly
              />
              <input
                type="button"
                className="w-full bg-[#b0b0bb] border border-[#F0F0F0] rounded-2xl py-3 px-4 h-12 text-[16px] leading-6 text-white"
                value="Повод"
                onClick={() => setActiveFilter("events")}
                readOnly
              />
              <input
                type="button"
                className="w-full bg-[#b0b0bb] border border-[#F0F0F0] rounded-2xl py-3 px-4 h-12 text-[16px] leading-6 text-white"
                value="Гамма"
                onClick={() => setActiveFilter("colors")}
                readOnly
              />
              <ClearRefinementsAndSearch />
            </div>
          )}
          <div
            className={`${activeFilter === "price" ? "block" : "hidden"} mb-8`}
          >
            <CustomNumericMenu attribute="price" items={flowerPrices} />
          </div>
          <div
            className={`${activeFilter === "types" ? "block" : "hidden"} mb-8`}
          >
            <CustomRefinementList
              attribute="types"
              limit={20}
              transformItems={transformTypesItems}
            />
          </div>
          <div
            className={`${
              activeFilter === "recipients" ? "block" : "hidden"
            } mb-8`}
          >
            <CustomMenu
              attribute="recipients"
              name="recipients"
              transformItems={transformRecipientsItems}
            />
          </div>
          <div
            className={`${activeFilter === "events" ? "block" : "hidden"} mb-8`}
          >
            <CustomMenu
              attribute="events"
              name="events"
              transformItems={transformEventsItems}
            />
          </div>
          <div
            className={`${activeFilter === "colors" ? "block" : "hidden"} mb-8`}
          >
            <CustomRefinementList
              attribute="colors"
              limit={20}
              transformItems={transformColorsItems}
            />
          </div>
        </div>
        {activeFilter !== "" && (
          <button
            type="button"
            className="relative bottom-6 left-1/2 -translate-x-1/2 bg-[#FB7571] rounded-3xl p-4 font-bold text-white text-[16px] w-[298px] leading-6"
            onClick={() => dispatch(closeFilterModal())}
          >
            Применить
          </button>
        )}
      </div>
    </div>
  );
};
