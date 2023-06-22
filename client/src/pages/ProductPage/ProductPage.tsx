import { useGetProductQuery } from "@/store/services/product.api";
import { Link, useLocation, useMatch } from "react-router-dom";
import PaymentSvg from "@/assets/svg/payments.svg";
import { formatPrice } from "@/utils/formatPrice";
import ReactMarkdown from "react-markdown";
import { useActions } from "@/hooks/useActions";
import { useState, useEffect } from "react";
import { useTypedSelector } from "@/store/store";
import React from "react";

const ProductPage = () => {
  const location = useLocation();
  const match = useMatch("/products/:slug");
  const slug = match?.params.slug;

  const { data, isLoading, error, isError } = useGetProductQuery(slug);

  const [quantity, setQuantity] = useState(5);
  const [product, setProduct] = useState({
    ...data?.data,
    quantity: quantity,
  });
  const [newPrice, setNewPrice] = useState(0);

  const { addProduct } = useActions();

  const { cart } = useTypedSelector((state) => state);

  const isExistInCart = cart?.products?.some(
    (item) => item.id === data?.data.id
  );

  useEffect(() => {
    setNewPrice((data?.data["attributes"].price / 5) * quantity);
  }, [data, quantity]);

  useEffect(() => {
    setProduct({
      ...data?.data,
      quantity: 5,
    });
  }, [data, quantity]);

  return (
    <div className="pt-[42px] pb-[180px]">
      <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid xl:grid-cols-[612px_1fr] gap-8 pb-[80px]">
            <img
              src={`${import.meta.env["VITE_STRAPI_UPLOADS_URL"]}${
                data?.data["attributes"]?.image?.data[0].attributes.url
              }`}
              alt={data?.data["attributes"]?.slug}
              className="xl:w-[612px] xl:h-[612px] object-cover"
            />
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-6">
                <h2 className="font-bold text-[24px] leading-none">
                  {data?.data["attributes"]?.name}
                </h2>
                <p className="font-bold text-[20px] leading-6">
                  {data?.data["attributes"]?.price && newPrice} ₽
                </p>
              </div>
              <div className="flex flex-col gap-y-6">
                <h3 className="font-medium text-[20px] leading-6">Состав:</h3>
                <p className="font-light text-[16px] leading-[18px]">
                  {data?.data["attributes"]?.description}
                </p>
              </div>
              <div className="flex flex-col xl:flex-row gap-3">
                <button
                  type="button"
                  className={`py-3 px-[20px] border-2 border-[#DFDFE8] rounded-3xl text-[16px] leading-[18px] hover:border-2 hover:border-[#FB7571] transition ease-in-out duration-300 select-none ${
                    quantity === 5 && "border-[#FB7571] pointer-events-none"
                  }`}
                  onClick={() => {
                    if (quantity === 5) return;
                    setQuantity(5);
                  }}
                >
                  5 шт
                </button>
                <button
                  type="button"
                  className={`py-3 px-[20px] border-2 border-[#DFDFE8] rounded-3xl text-[16px] leading-[18px] hover:border-2 hover:border-[#FB7571] transition ease-in-out duration-300 select-none ${
                    quantity === 9 && "border-[#FB7571] pointer-events-none"
                  }`}
                  onClick={() => {
                    if (quantity === 9) return;
                    setQuantity(9);
                  }}
                >
                  9 шт
                </button>
                <button
                  type="button"
                  className={`py-3 px-[20px] border-2 border-[#DFDFE8] rounded-3xl text-[16px] leading-[18px] hover:border-2 hover:border-[#FB7571] transition ease-in-out duration-300 select-none ${
                    quantity === 15 && "border-[#FB7571] pointer-events-none"
                  }`}
                  onClick={() => {
                    if (quantity === 15) return;
                    setQuantity(15);
                  }}
                >
                  15 шт
                </button>
                <button
                  type="button"
                  className={`py-3 px-[20px] border-2 border-[#DFDFE8] rounded-3xl text-[16px] leading-[18px] hover:border-2 hover:border-[#FB7571] transition ease-in-out duration-300 select-none ${
                    quantity === 21 && "border-[#FB7571] pointer-events-none"
                  }`}
                  onClick={() => {
                    if (quantity === 21) return;
                    setQuantity(21);
                  }}
                >
                  21 шт
                </button>
              </div>
              <div className="flex flex-col xl:flex-row justify-between gap-3">
                {!isExistInCart ? (
                  <button
                    type="button"
                    className="bg-[#FB7571] rounded-3xl p-4 font-bold text-white text-[16px] w-[298px] leading-6"
                    onClick={() => addProduct(product)}
                  >
                    Добавить в корзину
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-[#FDC5C3] rounded-3xl p-4 font-bold text-white text-[16px] w-[298px] leading-6 pointer-events-none"
                  >
                    Букет добавлен в корзину
                  </button>
                )}
                <Link
                  to="/products"
                  className="font-bold text-[#FB7571] border border-[#FB7571] text-[16px] w-[298px] leading-6 py-4 rounded-3xl text-center"
                >
                  Продолжить покупки
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="">
            <h3 className="font-bold text-[24px] leading-none mb-[42px]">
              Похожие букеты
            </h3>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
