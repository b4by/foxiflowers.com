import { CrossIcon } from "@/common/icons/CrossIcon/CrossIcon";
import { useActions } from "@/hooks/useActions";
import {
  AddressItem,
  AddressModal,
} from "@/modals/AddressManagerModal/AddressManagerModal";
import { TimeDeliveryModal } from "@/modals/TimeDeliveryModal/TimeDeliveryModal";
import { openModal } from "@/store/reducers/modalSlice";
import { usePayMutation } from "@/store/services/pay.api";
import { useTypedSelector } from "@/store/store";
import { Input } from "@/ui/Input/Input";
import { formatPrice } from "@/utils/formatPrice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddressForm } from "./AddressForm/AddressForm";
import { DefaultForm } from "./DefaultForm/DefaultForm";
import { SendToForm } from "./SendToForm/SendToForm";
import React from "react";
import emptyCartSvg from "@/assets/svg/empty-shopcart.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ShoppingCartItem = ({ product }) => {
  const [total, setTotal] = useState(0);
  const { removeProduct, incrementQuantity, decrementQuantity } = useActions();

  useEffect(() => {
    if (product.quantity <= 0) removeProduct(product);
    setTotal(product["attributes"]?.price * product.quantity);
  }, [product.quantity]);

  return (
    <div className="border-b border-[#BCBCBC] last-of-type:border-0 py-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <img
          src={`${import.meta.env["VITE_STRAPI_UPLOADS_URL"]}${
            product["attributes"]?.image.data[0].attributes.url
          }`}
          className="w-[104px] h-[104px] rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-4 w-full">
          <div className="relative flex justify-between items-center">
            <h4 className="font-bold text-[16px] leading-[19px]">
              {product["attributes"]?.name}
            </h4>
            <button type="button" onClick={() => removeProduct(product)}>
              <CrossIcon styles="absolute -top-[4px] right-0" />
            </button>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <div className="flex gap-3">
              <div className="flex-0 flex gap-x-4 justify-between p-2 bg-[#1C1E27] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  role="button"
                  className={`${
                    product.quantity < 1
                      ? "opacity-0 pointer-events-none"
                      : "opacity-1"
                  }`}
                  onClick={() => {
                    decrementQuantity(product.id);
                  }}
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 21.25a9.25 9.25 0 100-18.5 9.25 9.25 0 000 18.5zM9.196 11.899l5.388.042"
                  ></path>
                </svg>
                <span className="font-semibold w-[20px] text-center text-white">
                  {product.quantity}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="cursor-pointer"
                  role="button"
                  onClick={() => incrementQuantity(product.id)}
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 21.25a9.25 9.25 0 100-18.5 9.25 9.25 0 000 18.5zM11.869 9.226l.042 5.388M9.196 11.899l5.388.042"
                  ></path>
                </svg>
              </div>
            </div>
            {/* <div className="w-[132px] py-2 px-[6px] bg-[#F6F5F7] rounded-[30px] flex justify-between">
              <button
                type="button"
                className={`bg-black w-6 h-6 flex items-center justify-center rounded-full ${
                  product.quantity < 1 ? "opacity-0" : "opacity-1"
                }`}
                onClick={() => {
                  decrementQuantity(product.id);
                }}
              >
                <span className="bg-white h-[2px] w-[8px]"></span>
              </button>
              <span className="w-[15px] text-center">{product.quantity}</span>
              <button
                type="button"
                className="relative bg-black w-6 h-6 rounded-full"
                onClick={() => incrementQuantity(product.id)}
              >
                <span className="bg-white h-[2px] w-[8px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                <span className="bg-white h-[2px] w-[8px] rotate-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </button>
            </div> */}
            <span className="font-bold text-[14px] leading-[17px]">
              {formatPrice(total)} ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShoppingCartIsEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-20">
      <h3 className="font-bold text-[32px] leading-[36px]">
        Ваша корзина пока ещё пуста
      </h3>
      <img src={emptyCartSvg} alt="empty cart" className="" />
      <Link
        to="/products"
        className="text-center block py-4 px-6 font-bold text-white text-[16px] leading-6 bg-[#FB7571] rounded-3xl hover:bg-[#FA524C] transition ease-in-out duration-300"
      >
        Совершить первую покупку!
      </Link>
    </div>
  );
};

const ShoppingCartPage = () => {
  const [checked, setChecked] = useState("default");
  const { cart, address, order } = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const { removeProduct, incrementQuantity, decrementQuantity } = useActions();

  const [products] = useState(
    cart?.products.map((product) => product["attributes"].name).join()
  );

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
    receiver_name: Yup.string().required("Введите имя получателя"),
    receiver_phone: Yup.string()
      .required("Введите номер получателя")
      .matches(
        /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
        "Неправильный формат номера"
      ),
    address: Yup.string().required("Введите адрес доставки"),
    time_delivery: Yup.date()
      .nullable()
      .required("Укажите дату")
      .typeError("Укажите дату")
      .min(new Date(Date.now() - 86400000), "Дата не может быть в прошлом"),
    time: Yup.string().required("Укажите время доставки"),
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

  const getTotal = () => {
    let totalQuanity = 0;
    let totalPrice = 0;
    cart?.products?.forEach((product) => {
      totalQuanity += product.quantity;
      totalPrice += product["attributes"].price * product.quantity;
    });
    return { totalPrice, totalQuanity };
  };

  const [pay, { isLoading: payIsLoading }] = usePayMutation();

  const onSubmit = async ({
    name,
    email,
    phone,
    products,
    receiver_name,
    receiver_phone,
    address,
    time_delivery,
    message,
    sum,
  }) => {
    const data = {
      name,
      email,
      phone,
      products,
      receiver_name,
      receiver_phone,
      address,
      time_delivery,
      message,
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
    <form className="pt-[42px] pb-[180px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
        <div className="max-w-7xl mx-auto px-8">
          {cart?.products?.length > 0 ? (
            <>
              <h2 className="font-bold text-[24px] leading-none mb-[42px]">
                Оформление заказа
              </h2>
              <ul className="mb-[42px]">
                {cart?.products?.map((product) => (
                  <li
                    className="py-6 border-y-2 border-[#F0F0F0] flex flex-col gap-8 items-center xl:flex-row xl:justify-between"
                    key={product.id}
                  >
                    <div className="flex flex-col items-center xl:flex-row gap-x-8 xl:w-[528px]">
                      <img
                        src={`${import.meta.env["VITE_STRAPI_UPLOADS_URL"]}${
                          product["attributes"]?.image.data[0].attributes.url
                        }`}
                        alt="flowers photo"
                        className="w-[75px] h-[75px] object-cover my-6 xl:my-0"
                      />
                      <h3 className="text-[16px] leading-6">
                        {product["attributes"]?.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-0 flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          fill="none"
                          viewBox="0 0 24 25"
                          role="button"
                          className={`fill-[#B0B0BB] hover:fill-[#5F5F6D] transition ease-in-out duration-300 ${
                            product.quantity < 1
                              ? "opacity-0 pointer-events-none"
                              : "opacity-1"
                          }`}
                          onClick={() => {
                            decrementQuantity(product.id);
                          }}
                        >
                          <path
                            fill="current"
                            d="M17 11.5H7a1 1 0 100 2h10a1 1 0 100-2z"
                          ></path>
                        </svg>
                        <span className="py-2 px-8 border border-[#B0B0BB] h-[34px] text-[16px] w-[71px] leading-[34px] flex items-center justify-center">
                          {product.quantity}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          fill="none"
                          viewBox="0 0 24 25"
                          role="button"
                          className="fill-[#B0B0BB] hover:fill-[#5F5F6D] transition ease-in-out duration-300"
                          onClick={() => incrementQuantity(product.id)}
                        >
                          <path
                            fill="current"
                            d="M17 11.5h-4v-4a1 1 0 00-2 0v4H7a1 1 0 000 2h4v4a1 1 0 002 0v-4h4a1 1 0 000-2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProduct(product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        fill="none"
                        viewBox="0 0 24 25"
                        className="fill-[#B0B0BB] hover:fill-[#FF0000] transition ease-in-out duration-300"
                      >
                        <g fill="current" clipPath="url(#clip0_186_5612)">
                          <path d="M22 4.5h-5v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2H2v2h2v15a3 3 0 003 3h10a3 3 0 003-3v-15h2v-2zm-13-2h6v2H9v-2zm9 19a1 1 0 01-1 1H7a1 1 0 01-1-1v-15h12v15z"></path>
                          <path d="M11 10.5H9v8h2v-8zM15 10.5h-2v8h2v-8z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_186_5612">
                            <path
                              fill="#fff"
                              d="M0 0H24V24H0z"
                              transform="translate(0 .5)"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="grid xl:grid-cols-[505px_1fr] gap-x-[139px] pb-[42px] border-b-2 border-[#B0B0BB]">
                <div className="">
                  <h3 className="font-bold text-[20px] leading-6 mb-[42px]">
                    Контактные данные:
                  </h3>
                  <div className="flex flex-col gap-y-6">
                    <div className="relative flex flex-col gap-y-4">
                      <label
                        htmlFor="name"
                        className="font-bold text-[16px] leading-6"
                      >
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        className={`border border-[#F0F0F0] rounded-2xl p-4 h-12 text-[16px] leading-6 text-[#b0b0bb] placeholder:text-[#B0B0BB] focus:ring-1 focus:ring-[#F0F0F0] ${
                          errors?.name && "border-[#FF0000] ring-[#FF0000]"
                        }`}
                        placeholder="Алексей"
                      />
                      {errors?.name && (
                        <span className="absolute -bottom-[20px] left-0 text-xs text-[#FF0000]">
                          {errors?.name.message}
                        </span>
                      )}
                    </div>
                    <div className="relative flex flex-col gap-y-4">
                      <label
                        htmlFor="email"
                        className="font-bold text-[16px] leading-6"
                      >
                        Ваш E-mail
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className={`border border-[#F0F0F0] rounded-2xl p-4 h-12 text-[16px] leading-6 text-[#b0b0bb] placeholder:text-[#B0B0BB] focus:ring-1 focus:ring-[#F0F0F0] ${
                          errors?.email && "border-[#FF0000] ring-[#FF0000]"
                        }`}
                        placeholder="alexey.em@gmail.com"
                      />
                      {errors?.email && (
                        <span className="absolute -bottom-[20px] left-0 text-xs text-[#FF0000]">
                          {errors?.email.message}
                        </span>
                      )}
                    </div>
                    <div className="relative flex flex-col gap-y-4">
                      <label
                        htmlFor="phone"
                        className="font-bold text-[16px] leading-6"
                      >
                        Ваш телефон
                      </label>
                      <input
                        type="text"
                        {...register("phone")}
                        className={`border border-[#F0F0F0] rounded-2xl p-4 h-12 text-[16px] leading-6 text-[#b0b0bb] placeholder:text-[#B0B0BB] focus:ring-1 focus:ring-[#F0F0F0] ${
                          errors?.phone && "border-[#FF0000] ring-[#FF0000]"
                        }`}
                        placeholder="+7 (952) 643-45-46"
                      />
                      {errors?.phone && (
                        <span className="absolute -bottom-[20px] left-0 text-xs text-[#FF0000]">
                          {errors?.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[42px]">
                <h3 className="font-bold text-[20px] leading-6 mb-[42px]">
                  Доставка:
                </h3>
                <div className="grid gap-14 xl:gap-y-0 xl:grid-cols-[505px_505px] gap-x-[139px] pb-[42px] border-b-2 border-[#B0B0BB]">
                  <div className="flex flex-col gap-y-6">
                    <div className="relative flex flex-col gap-y-4">
                      <label
                        htmlFor="receiver_name"
                        className="font-bold text-[16px] leading-6"
                      >
                        Имя получателя
                      </label>
                      <input
                        type="text"
                        {...register("receiver_name")}
                        className={`border border-[#F0F0F0] rounded-2xl p-4 h-12 text-[16px] leading-6 text-[#b0b0bb] placeholder:text-[#B0B0BB] focus:ring-1 focus:ring-[#F0F0F0] ${
                          errors?.receiver_name &&
                          "border-[#FF0000] ring-[#FF0000]"
                        }`}
                        placeholder="Ирина"
                      />
                      {errors?.receiver_name && (
                        <span className="absolute -bottom-[20px] left-0 text-xs text-[#FF0000]">
                          {errors?.receiver_name.message}
                        </span>
                      )}
                    </div>
                    <div className="relative flex flex-col gap-y-4">
                      <label
                        htmlFor="receiver_phone"
                        className="font-bold text-[16px] leading-6"
                      >
                        Телефон получателя
                      </label>
                      <input
                        type="text"
                        {...register("receiver_phone")}
                        className={`border border-[#F0F0F0] rounded-2xl p-4 h-12 text-[16px] leading-6 text-[#b0b0bb] placeholder:text-[#B0B0BB] focus:ring-1 focus:ring-[#F0F0F0] ${
                          errors?.receiver_phone &&
                          "border-[#FF0000] ring-[#FF0000]"
                        }`}
                        placeholder="+7 (921) 785-21-95"
                      />
                      {errors?.receiver_phone && (
                        <span className="absolute -bottom-[20px] left-0 text-xs text-[#FF0000]">
                          {errors?.receiver_phone.message}
                        </span>
                      )}
                    </div>
                    <div className="relative flex flex-col gap-y-4">
                      <label
                        htmlFor="address"
                        className="font-bold text-[16px] leading-6"
                      >
                        Адрес получателя
                      </label>
                      <input
                        type="text"
                        {...register("address")}
                        className={`border border-[#F0F0F0] rounded-2xl p-4 h-12 text-[16px] leading-6 text-[#b0b0bb] placeholder:text-[#B0B0BB] focus:ring-1 focus:ring-[#F0F0F0] ${
                          errors?.address && "border-[#FF0000] ring-[#FF0000]"
                        }`}
                        placeholder="Город, улица, дом, корпус, подъезд, квартира"
                      />
                      {errors?.address && (
                        <span className="absolute -bottom-[20px] left-0 text-xs text-[#FF0000]">
                          {errors?.address.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-6">
                    <div className="relative flex flex-col gap-y-4">
                      <label
                        htmlFor="date"
                        className="font-bold text-[16px] leading-6"
                      >
                        Дата доставки
                      </label>
                      <input
                        type="date"
                        {...register("time_delivery")}
                        className={`border border-[#F0F0F0] rounded-2xl p-4 h-12 text-[16px] leading-6 text-[#b0b0bb] placeholder:text-[#B0B0BB] focus:ring-1 focus:ring-[#F0F0F0] ${
                          errors?.time_delivery &&
                          "border-[#FF0000] ring-[#FF0000]"
                        }`}
                        placeholder="17.08.2023"
                      />
                      {errors?.time_delivery && (
                        <span className="absolute -bottom-[20px] left-0 text-xs text-[#FF0000]">
                          {errors?.time_delivery.message}
                        </span>
                      )}
                    </div>
                    <div className="relative flex flex-col gap-y-4">
                      <label
                        htmlFor="time"
                        className="font-bold text-[16px] leading-6"
                      >
                        Время доставки
                      </label>
                      <input
                        type="text"
                        {...register("time")}
                        className={`border border-[#F0F0F0] rounded-2xl p-4 h-12 text-[16px] leading-6 text-[#b0b0bb] placeholder:text-[#B0B0BB] focus:ring-1 focus:ring-[#F0F0F0] ${
                          errors?.time && "border-[#FF0000] ring-[#FF0000]"
                        }`}
                        placeholder="13-00"
                      />
                      <ul className="hidden rounded-lg border border-[#F0F0F0]">
                        <li className="py-2 w-full">11:00 - 16-00</li>
                        <li className="py-2 w-full">11:00 - 16-00</li>
                        <li className="py-2 w-full">11:00 - 16-00</li>
                        <li className="py-2 w-full">11:00 - 16-00</li>
                        <li className="py-2 w-full">11:00 - 16-00</li>
                      </ul>
                      {errors?.time && (
                        <span className="absolute -bottom-[20px] left-0 text-xs text-[#FF0000]">
                          {errors?.time.message}
                        </span>
                      )}
                    </div>
                    <div className="relative flex flex-col gap-y-4">
                      <label
                        htmlFor="name"
                        className="font-bold text-[16px] leading-6"
                      >
                        Сообщение для получателя
                      </label>
                      <input
                        type="text"
                        {...register("message")}
                        className="border border-[#F0F0F0] rounded-2xl p-4 h-12 text-[16px] leading-6 text-[#b0b0bb] placeholder:text-[#B0B0BB] focus:ring-1 focus:ring-[#F0F0F0]"
                        placeholder="Напишите пожелание получателю"
                      />
                    </div>
                    <input
                      type="text"
                      className="hidden"
                      placeholder="Корзина"
                      value={products}
                      {...register("products")}
                    />
                    <input
                      type="text"
                      placeholder="Сумма"
                      className="hidden"
                      value={getTotal().totalPrice / 5}
                      {...register("sum")}
                    />
                  </div>
                </div>
              </div>
              <div className="py-8 flex flex-col gap-y-6 border-b-2 border-[#b0b0bb] mb-[42px]">
                <div className="flex justify-between">
                  <h3 className="font-normal text-[20px] leading-6">Всего:</h3>
                  <span className="font-normal text-[20px] leading-6">
                    {formatPrice(getTotal().totalPrice / 5)} ₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <h3 className="font-normal text-[20px] leading-6">
                    Доставка:
                  </h3>
                  <span className="font-normal text-[20px] leading-6">
                    500 ₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-[20px] leading-6">Итого:</h3>
                  <span className="font-bold text-[20px] leading-6">
                    {formatPrice(getTotal().totalPrice / 5 + 500)} ₽
                  </span>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="font-bold text-white text-[16px] leading-6 py-4 rounded-3xl bg-[#FB7571] w-[298px] flex justify-center ml-auto hover:bg-[#FA524C] transitionb ease-in-out duration-300"
              >
                Оформить заказ
              </button>
            </>
          ) : (
            <ShoppingCartIsEmpty />
          )}
        </div>
      </div>
    </form>
  );
};

export default ShoppingCartPage;
