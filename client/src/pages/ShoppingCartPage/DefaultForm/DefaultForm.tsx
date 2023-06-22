import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "@/ui/Input/Input";
import { useTypedSelector } from "@/store/store";
import { usePayMutation } from "@/store/services/pay.api";
import { useState } from "react";
import React from "react";

export const DefaultForm = ({ getTotal }) => {
  const {
    cart,
    address: addressSlice,
    order,
  } = useTypedSelector((state) => state);
  const [products] = useState(
    cart?.products.map((product) => product["attributes"].name).join()
  );

  const address = Object.values(addressSlice).join(" ");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Введите имя"),
    email: Yup.string()
      .email("Введите корректный email")
      .required("Введите email"),
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
    setValue,
    control,
  } = useForm(formOptions);

  const [pay, { isLoading: payIsLoading }] = usePayMutation();

  setValue("time_delivery", order.timestamp);

  const onSubmit = async ({
    name,
    email,
    phone,
    products,
    time_delivery,
    sum,
  }) => {
    const data = {
      name,
      email,
      address,
      phone,
      products,
      time_delivery,
      sum,
      orderId: "0052",
    };
    const res = await pay(data);
    if (res.error.data) window.location.href = res.error.data;
    if (!res.data.AddDetals) window.location.href = res.data;
    if (res.data.AddDetails !== null) {
      window.location.href = res.data.AddDetails.URL;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap gap-6 mb-6 pb-8 border-b border-[#BCBCBC]">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Имя"
            icon="user"
            {...register("name")}
          />
          {errors.name && (
            <span className="absolute -bottom-5 left-3 text-xs text-red-400">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="relative flex-1">
          <Input
            type="tel"
            placeholder="Номер телефона"
            icon="phone"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="absolute -bottom-5 left-3 text-xs text-red-400">
              {errors.phone.message}
            </span>
          )}
        </div>
        <div className="relative flex-1">
          <Input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <span className="absolute -bottom-5 left-3 text-xs text-red-400">
              {errors.email.message}
            </span>
          )}
        </div>
        <Input
          className="hidden"
          type="text"
          placeholder="Сумма"
          value={getTotal().totalPrice}
          {...register("sum")}
        />
        <Input
          className="hidden"
          type="text"
          placeholder="Корзина"
          value={products}
          {...register("products")}
        />
        <Input
          className="hidden"
          type="date"
          placeholder="Время доставки"
          value={order.timestamp}
          {...register("time_delivery")}
        />
      </div>
      <button
        type="submit"
        className={`w-full text-white font-semibold text-[14px] h-[56px] leading-[56px] bg-[#F29A98] rounded-[30px] ${
          payIsLoading &&
          "disabled:cursor-default disabled:opacity-50 disabled:pointer-events-none"
        }`}
        disabled={payIsLoading}
      >
        Завершить оформление
      </button>
    </form>
  );
};
