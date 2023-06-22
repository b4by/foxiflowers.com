import React, { useEffect, useState } from "react";
import { useTypedSelector } from "@/store/store";
import { useActions } from "@/hooks/useActions";
import PaymentsPng from "@/assets/img/payments.png";
import { formatPrice } from "@/utils/formatPrice";
import { useDispatch } from "react-redux";
import { closeModal } from "@/store/reducers/modalSlice";

export const ProductModal = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const [innerState, setInnerState] = useState({
    ...product,
    quantity: quantity,
  });

  const { addProduct } = useActions();

  const { cart } = useTypedSelector((state) => state);

  const isExistInCart = cart?.products?.some((item) => item.id === product?.id);

  useEffect(() => {
    setInnerState({
      ...product,
      quantity: quantity,
    });
  }, [product, quantity]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      window.innerHeight * 0.01 + "px"
    );
  }, []);

  return (
    <div className="relative bg-white w-screen h-screen lg:h-auto rounded-3xl p-6 shadow-primary lg:w-[832px] overflow-x-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        role="button"
        className="absolute top-4 right-4"
        onClick={() => dispatch(closeModal())}
      >
        <path
          stroke="#1C1E27"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 16L8 8m8 0l-8 8"
        ></path>
      </svg>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <img
            src={`${import.meta.env["VITE_STRAPI_UPLOADS_URL"]}${
              product["attributes"]?.image?.data[0].attributes.url
            }`}
            alt={product["attributes"]?.name}
            loading="lazy"
            className="w-[200px] lg:w-full lg:h-[352px] rounded-2xl object-cover"
          />
          <div className="rounded-2xl bg-[#FDF5D5] p-6 order-10">
            <p className="text-[16px] leading-[24px] mb-3">
              Принимаем к оплате банковские карты из любых стран
            </p>
            <img src={PaymentsPng} alt="" width="204" height="40" />
          </div>
        </div>
        <div className="p-6">
          <div className="pb-6 border-b border-[#808080]">
            <h2 className="font-bold text-[24px] leading-none mb-3">
              {product["attributes"].name}
            </h2>
            <div className="space-x-[6px] mb-6">
              <span className="text-[#808080] text-[14px] leading-[17px]">
                Артикул:
              </span>
              <span className="text-[#808080] text-[14px] leading-[17px]"></span>
            </div>
            <span className="font-bold text-[32px] leading-none">
              {formatPrice(product["attributes"].price)} ₽
            </span>
          </div>
          <div className="py-6 grid gap-6 border-b border-[#808080]">
            <div>
              <h2 className="font-bold text-[16px] leading-none mb-3">
                Состав букета
              </h2>
              <p className="text-[14px] leading-[17px]">
                {product["attributes"].description}
              </p>
            </div>
            <div>
              <h2 className="font-bold text-[16px] leading-none mb-3">
                Доставка
              </h2>
              <p className="text-[14px] leading-[17px]">Беслпатно</p>
            </div>
          </div>
          <div className="pt-6">
            {!isExistInCart ? (
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="flex-0 flex gap-x-6 justify-between py-4 px-2 bg-[#1C1E27] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    role="button"
                    className={`${
                      quantity < 1
                        ? "opacity-0 pointer-events-none"
                        : "opacity-1"
                    }`}
                    onClick={() => {
                      if (quantity === 1) return;
                      setQuantity(quantity - 1);
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
                    {quantity}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="cursor-pointer"
                    role="button"
                    onClick={() => setQuantity(quantity + 1)}
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
                <button
                  type="button"
                  className={`bg-[#F29A98] rounded-[30px] font-semibold text-[16px] h-[56px] leading-[56px] text-white whitespace-nowrap w-full lg:w-[224px] ${
                    isExistInCart
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  }`}
                  onClick={() => {
                    addProduct(innerState);
                    dispatch(closeModal());
                  }}
                >
                  Добавить в корзину
                </button>
              </div>
            ) : (
              <div className="bg-[#F29A98] rounded-[30px] font-semibold text-[16px] h-[56px] leading-[56px] text-white whitespace-nowrap w-[224px] text-center">
                Добавлено в корзину
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
