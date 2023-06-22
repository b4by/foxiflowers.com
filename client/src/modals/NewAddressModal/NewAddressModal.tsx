import { closeModal } from "@/store/reducers/modalSlice";
import { Input } from "@/ui/Input/Input";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addAddress } from "@/store/reducers/address.slice";
import { useTypedSelector } from "@/store/store";
import React from "react";

export const NewAddressModal = ({ address = "" }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await dispatch(addAddress(data));
    dispatch(closeModal());
  };

  return (
    <div className="relative w-[620px] p-[40px] shadow-primary bg-white rounded-3xl">
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
        Адрес доставки
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-4 mb-6">
          <Input
            type="text"
            placeholder="Введите адрес доставки"
            icon="pin"
            {...register("address")}
          />
          <button
            type="submit"
            className="w-[139px] border-2 border-[#1C1E27] h-[56px] leading-[56px] font-semibold text-[14px] uppercase rounded-2xl"
          >
            Сохранить
          </button>
        </div>
        <div className="flex flex-col gap-y-3">
          <Input
            type="text"
            placeholder="Кв./оф./этаж/подъезд"
            {...register("additional_info")}
          />
          <Input
            type="text"
            placeholder="Комментарий для курьера"
            {...register("comment")}
          />
        </div>
      </form>
    </div>
  );
};
