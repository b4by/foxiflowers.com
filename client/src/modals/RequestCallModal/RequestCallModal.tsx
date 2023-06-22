import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React from "react";

export const RequestCallModal = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Введите имя"),
    phone: Yup.string()
      .required("Введите номер телефона")
      .matches(
        /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
        "Неправильный формат номера"
      ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm(formOptions);

  const onSubmit = () => {};

  return (
    <div className="bg-white rounded-2xl p-6 max-w-[370px]">
      <p className="text-center mb-8">
        Оставьте заявку на звонок, мы вам перезвоним и ответим на все
        интерсующие вас вопросы.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Ваше имя</label>
          <input
            type="text"
            {...register("name")}
            className="p-4 h-[56px] text-[16px] leading-6 border border-[#DEE5E9] rounded-2xl"
          />
          {errors?.name && (
            <span className="text-xs text-[#DC0000]">
              {errors?.name?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="phone">Ваш номер телефона</label>
          <input
            type="tel"
            {...register("phone")}
            className="p-4 h-[56px] text-[16px] leading-6 border border-[#DEE5E9] rounded-2xl"
          />
          {errors?.phone && (
            <span className="text-xs text-[#DC0000]">
              {errors?.phone?.message}
            </span>
          )}
        </div>
        <button className="font-bold bg-[#FB7571] rounded-3xl text-white text-[16px] leading-6 py-3 px-6">
          Заказать звонок
        </button>
      </form>
    </div>
  );
};
