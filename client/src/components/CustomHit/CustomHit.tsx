import { Highlight, useHits } from "react-instantsearch-hooks-web";
import { formatPrice } from "@/utils/formatPrice";
import React from "react";
import NothingFoundSvg from "@/assets/svg/nothing-found.svg";
import { Link } from "react-router-dom";
import { ClearRefinementsAndSearch } from "../ClearRefinementsAndSearch/ClearRefinementsAndSearch";

export const CustomHit = (props) => {
  const { special } = props;
  const { hits, results, sendEvent } = useHits(props);
  return (
    <>
      <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 gap-y-[42px] gap-x-8 mb-[60px]">
        {hits.map((hit) => (
          <li key={hit.code} className="group">
            <article>
              <Link to={`/products/${hit?.slug}`}>
                <div className="relative w-[290px] h-[290px] overflow-hidden mb-[19px]">
                  <img
                    src={`${import.meta.env["VITE_STRAPI_UPLOADS_URL"]}${
                      hit?.image[0].formats?.medium?.url ||
                      hit?.image[0].formats?.small?.url ||
                      hit?.image[0].url
                    }`}
                    loading="lazy"
                    className="w-[290px] h-[290px] object-cover hover:scale-110 transition ease-in-out duration-300"
                  />
                  <div className="absolute top-0 left-0 w-[290px] h-[290px] bg-black bg-opacity-0 group-hover:bg-opacity-60 transition ease-in-out duration-300 z-50 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill="none"
                      viewBox="0 0 64 64"
                      className="opacity-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:opacity-100 transition ease-in-out duration-300"
                    >
                      <g
                        clipPath="url(#clip0_181_4436)"
                        filter="url(#filter0_b_181_4436)"
                      >
                        <path
                          fill="#fff"
                          fillOpacity="0.6"
                          d="M32 0a32 32 0 1032 32A32.035 32.035 0 0032 0zm13.333 34.667H34.667v10.666h-5.334V34.667H18.667v-5.334h10.666V18.667h5.334v10.666h10.666v5.334z"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_b_181_4436"
                          width="72"
                          height="72"
                          x="-4"
                          y="-4"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          ></feGaussianBlur>
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_181_4436"
                          ></feComposite>
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_181_4436"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <clipPath id="clip0_181_4436">
                          <path fill="#fff" d="M0 0H64V64H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <Highlight
                  hit={hit}
                  attribute="name"
                  className="block font-bold text-[16px] leading-6 h-[56px] mb-2 group-hover:text-[#FA524C] transition ease-in-out duration-300"
                >
                  {hit?.name}
                </Highlight>
              </Link>
              <span
                className={`flex gap-3 font-light text-[16px] leading-6 ${
                  special && "text-[#DC0000]"
                }`}
              >
                {special && (
                  <s className="text-black font-bold">
                    {formatPrice(hit?.price + 500)} ₽
                  </s>
                )}{" "}
                {formatPrice(hit?.price)} ₽
              </span>
            </article>
          </li>
        ))}
      </ul>
      {hits?.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <img
            src={NothingFoundSvg}
            alt="man with magnifying glass"
            className="mb-[60px]"
          />
          <div className="mb-[42px]">
            <h3 className="font-bold text-[24px] leading-[27px] mb-4">
              Ничего не смогли найти по Вашему запросу
            </h3>
            <p className="text-[14px] leading-6">
              Давайте попробуем изменить поисковый запрос или настройки
              фильтров?
            </p>
          </div>
          <ClearRefinementsAndSearch />
        </div>
      )}
    </>
  );
};
