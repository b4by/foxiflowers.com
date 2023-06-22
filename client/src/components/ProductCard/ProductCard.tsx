import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/store/store";
import { formatPrice } from "@/utils/formatPrice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openModal } from "@/store/reducers/modalSlice";
import { ProductModal } from "@/modals/ProductModal/ProductModal";
import React from "react";

export const ProductCard = ({ product, special }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useTypedSelector((state) => state);

  const isExistInCart = cart?.products?.some((item) => item.id === product.id);

  return (
    <div key={product.id}>
      <Link
        to={`/products/${product["attributes"].slug}`}
        className="block group"
      >
        <img
          src={`${import.meta.env["VITE_STRAPI_UPLOADS_URL"]}${
            product["attributes"]?.image.data[0].attributes.formats?.medium
              ?.url ||
            product["attributes"]?.image.data[0].attributes.formats?.small
              ?.url ||
            product["attributes"]?.image.data[0].attributes.url
          }`}
          loading="lazy"
          className="w-[290px] h-[290px] object-cover aspect-square mb-[19px]"
        />
        <h3 className="font-bold text-[16px] leading-6 h-[56px] mb-2 group-hover:text-[#FA524C] transition ease-in-out duration-300 truncate w-[290px]">
          {product["attributes"]?.name}
        </h3>
      </Link>
      <span
        className={`flex gap-3 font-light text-[16px] leading-6 ${
          special && "text-[#DC0000]"
        }`}
      >
        {special && (
          <s className="text-black font-bold">
            {formatPrice(product["attributes"]?.price + 500)} ₽
          </s>
        )}{" "}
        {formatPrice(product["attributes"]?.price)} ₽
      </span>
    </div>
  );
};
