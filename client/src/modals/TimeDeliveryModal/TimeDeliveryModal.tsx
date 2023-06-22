import { closeModal } from "@/store/reducers/modalSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "@/store/reducers/order.slice";
import { getNextDays } from "@/utils/getNextDays";
import { useEffect } from "react";
import { getArrayOfDeliveryHours } from "@/utils/getArrayOfDeliveryHours";
import { useTypedSelector } from "@/store/store";
import React from "react";

export const TimeDeliveryModal = () => {
  const dispatch = useDispatch();
  const { order } = useTypedSelector((state) => state);
  const [dates, setDates] = useState([
    {
      id: null,
      timestamp: "",
      monthNum: "",
      weekName: "",
      selectedDate: "",
    },
  ]);

  const [selectedDate, setSelectDate] = useState({
    monthNum: "",
    timestamp: "",
  });

  const [timeHours, setTimeHours] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState(
    new Date().setHours(new Date().getHours() + 3, 0, 0, 0)
  );

  useEffect(() => {
    setDates(getNextDays());
    setTimeHours(getArrayOfDeliveryHours());
  }, []);

  useEffect(() => {
    //Если выбранный день даты совпадает с первым днём в массиве дат, то
    //присвоить массиву часы, начиная с текущего часа и до 23.
    if (selectedDate.monthNum === dates[0].monthNum) {
      setTimeHours(getArrayOfDeliveryHours());
    } else {
      setTimeHours(getArrayOfDeliveryHours(selectedDate.timestamp));
    }
  }, [selectedDate.monthNum]);

  const [checked, setChecked] = useState("asap");
  const [error, setError] = useState("");
  return (
    <div className="relative w-[380px] lg:w-[620px] p-[40px] shadow-primary bg-white rounded-3xl">
      <button
        type="button"
        onClick={() => dispatch(closeModal())}
        className="absolute top-[40px] right-[40px] w-6 h-6 cursor-pointer hover:scale-110 transition ease-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="fill-current"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#1C1E27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 18L6 6m12 0L6 18"
          ></path>
        </svg>
      </button>
      <h3 className="font-bold text-[24px] leading-none mb-6 uppercase">
        Время доставки
      </h3>
      <ul className="flex flex-col gap-y-6 mb-[34px]">
        <div className="flex justify-between">
          <label
            className="flex items-center gap-x-4 cursor-pointer"
            htmlFor="asap"
            onClick={() => {
              setChecked("asap");
              setError("");
              setDeliveryTime(
                new Date().setHours(new Date().getHours() + 3, 0, 0, 0)
              );
            }}
          >
            <input id="asap" className="sr-only peer/asap" type="radio" />
            <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full border border-[#F29A98]">
              <span
                className={`peer-checked/asap:block w-[10px] h-[10px] bg-[#F29A98] rounded-full ${
                  checked === "asap" ? "block" : "hidden"
                }`}
              ></span>
            </span>
            <span className="font-semibold text-[16px] leading-none select-none">
              Как можно быстрее
            </span>
          </label>
          <span className="text-[16px] leading-none">Сегодня через 3 часа</span>
        </div>
        <div className="flex justify-between">
          <input id="to_time" className="sr-only peer/asap" type="radio" />
          <label
            onClick={() => setChecked("to_time")}
            className="flex items-center gap-x-4 cursor-pointer"
            htmlFor="to_time"
          >
            <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full border border-[#F29A98]">
              <span
                className={`peer-checked/asap:block w-[10px] h-[10px] bg-[#F29A98] rounded-full ${
                  checked === "to_time" ? "block" : "hidden"
                }`}
              ></span>
            </span>
            <span className="font-semibold text-[16px] leading-none select-none">
              Ко времени
            </span>
          </label>
          <span>
            {deliveryTime !== "" &&
              new Date(Number(deliveryTime)).toLocaleString("ru-RU")}
          </span>
        </div>
      </ul>
      {checked === "to_time" && (
        <>
          <ul className="grid grid-cols-3 lg:grid-cols-7 gap-3 mb-3">
            {dates.map((day) => (
              <li
                key={day.id}
                className={`p-3 rounded-xl border border-[#808080] min-w-[70px] flex flex-col gap-[4px] cursor-pointer select-none ${
                  selectedDate.monthNum === day.monthNum &&
                  "bg-[#1C1E27] text-white cursor-default"
                }`}
                onClick={() => {
                  if (selectedDate.monthNum === day.monthNum) return;
                  setDeliveryTime(day.timestamp);
                  setSelectDate((date) => {
                    const newDate = date;
                    return {
                      ...newDate,
                      monthNum: day.monthNum,
                      timestamp: day.timestamp,
                    };
                  });
                  setError("");
                }}
              >
                <span className="font-extrabold text-[16px] leading-none">
                  {day.monthNum}
                </span>
                <span className="text-[10px] leading-none capitalize">
                  {day.id === 0 && "Сегодня"}
                  {day.id === 1 && "Завтра"}
                  {day?.id > 1 && day.weekName}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative mb-8">
            {!timeHours.length == 0 ? (
              <>
                <select
                  onChange={(e) => {
                    if (timeHours.length == 0) return;
                    setDeliveryTime(e.target.value);
                  }}
                  className="appearance-none p-4 rounded-[30px] border-2 border-[#808080] text-[14px] leading-[18px] w-full cursor-pointer focus:ring-[#F29A98] focus:outline-none focus:border-[#F29A98]"
                >
                  {timeHours.map((hour) => {
                    return (
                      <option value={hour}>
                        {new Date(hour).getHours() + ":00"}
                      </option>
                    );
                  })}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <path
                    fill="#1C1E27"
                    d="M15.707 11.707a1 1 0 00-1.414-1.414l1.414 1.414zM12 14l-.707.707a1 1 0 001.414 0L12 14zm-2.293-3.707a1 1 0 10-1.414 1.414l1.414-1.414zm4.586 0l-3 3 1.414 1.414 3-3-1.414-1.414zm-1.586 3l-3-3-1.414 1.414 3 3 1.414-1.414z"
                  ></path>
                </svg>
              </>
            ) : (
              <span>Мы принимаем заказы до 21 часа</span>
            )}
          </div>
        </>
      )}
      {error !== "" && <span className="block text-red-400 my-6">{error}</span>}
      <button
        type="button"
        className="w-full rounded-[30px] h-[56px] leading-[56px] font-semibold text-white text-[14px] bg-[#F29A98] transition ease-in enabled:hover:opacity-60"
        disabled={Boolean(error)}
        onClick={async () => {
          if (!deliveryTime) {
            setError("Выберите дату и время доставки");
            return;
          }
          await dispatch(addOrder({ timestamp: deliveryTime }));
          dispatch(closeModal());
        }}
      >
        Сохранить
      </button>
    </div>
  );
};
