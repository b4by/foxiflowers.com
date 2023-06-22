import { ProductCard } from "@/components/ProductCard/ProductCard";
import { ReviewSection } from "@/components/ReviewSection/ReviewSection";
import { FeatureSection } from "@/components/FeatureSection/FeatureSection";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { useGetProductsQuery } from "@/store/services/product.api";
import * as qs from "qs";
import { chunkPrices } from "@/utils/chunkPrices";
import { Link, useSearchParams } from "react-router-dom";
import { useLazyGetProductsQuery } from "@/store/services/product.api";
import React from "react";
import { CustomSearchBox } from "../../components/CustomSearchBox/CustomSearchBox";
import { CustomHit } from "../../components/CustomHit/CustomHit";
import { Configure } from "react-instantsearch-hooks-web";
import { CustomPagination } from "../../components/CustomPagination/CustomPagination";
import HeroBg1x from "@/assets/img/bg-hero@1x.png";
import { Star } from "../../components/Star/Star";

const HomePage = () => {
  const [activePage, setActivePage] = useState(1);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState([
    {
      id: 1,
      name: "Вид цветов",
      type: "product_types",
      options: [
        "Альстромерии",
        "Гвоздики",
        "Герберы",
        "Гипсофилы",
        "Гортензии",
        "Диантусы",
        "Розы кустовые",
        "Нобилис",
        "Орхидеи",
        "Пионы",
        "Ранункулусы",
        "Розы",
        "Ромашки",
        "Тюльпаны",
        "Хризантемы",
        "Эвкалипт",
        "Эустома",
        "Каллы",
      ],
      value: "",
    },
    {
      id: 2,
      name: "Для кого",
      type: "product_recipient_types",
      options: ["Женщине", "Мужчине", "Семье"],
      value: "",
    },
    {
      id: 3,
      name: "По случаю",
      type: "product_events",
      options: [
        "Свадебный букет",
        "День рождения",
        "Любимым",
        "8 марта",
        "Новый год",
        "1 сентября",
      ],
      value: "",
    },
    {
      id: 4,
      name: "Оттенки и цвета",
      type: "product_colors",
      options: [
        "Красный",
        "Синий",
        "Желтый",
        "Оранжевый",
        "Белый",
        "Фиолетовый",
        "Голубой",
        "Розовый",
        "Зеленый",
      ],
      value: "",
    },
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useGetProductsQuery(query);

  const [getProducts] = useLazyGetProductsQuery();

  let [searchParams, setSearchParams] = useSearchParams();
  const input = useRef(null);

  useEffect(() => {
    filters.forEach((filter) => {
      if (filter.value !== "" && filter.type !== "price") {
        setQuery((query) => {
          const newQuery = {
            filters: {
              ...qs.parse(query)["filters"],
              [filter.type]: {
                name: {
                  $eq: filter.value,
                },
              },
            },
          };
          return qs.stringify(newQuery, { encodeValuesOnly: true });
        });
      }
      if (filter.value !== "" && filter.type === "price") {
        let priceFilter = {};
        const pricesArray = chunkPrices(filter.value.replace(/\D/g, ""), 4);
        if (pricesArray.length === 1 && pricesArray[0] === "2500")
          priceFilter = {
            $lte: pricesArray[0],
          };
        if (pricesArray.length === 1 && pricesArray[0] === "6000") {
          priceFilter = {
            $gte: pricesArray[0],
          };
        }
        if (pricesArray.length === 2) {
          priceFilter = {
            $gte: pricesArray[0],
            $lte: pricesArray[1],
          };
        }
        setQuery((query) => {
          const newQuery = {
            filters: {
              ...qs.parse(query)["filters"],
              [filter.type]: {
                ...priceFilter,
              },
            },
          };
          return qs.stringify(newQuery, { encodeValuesOnly: true });
        });
      }
    });
  }, [filters]);

  useEffect(() => {
    setQuery((query) => {
      const newQuery = {
        filters: {
          ...qs.parse(query)["filters"],
        },
        pagination: {
          page: activePage,
          pageSize: 24,
        },
      };
      return qs.stringify(newQuery, { encodeValuesOnly: true });
    });
  }, [activePage]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery((query) => {
      const newQuery = {
        filters: {
          $or: [
            {
              name: {
                $containsi: input.current.value.toLowerCase(),
              },
            },
            {
              description: {
                $containsi: input.current.value.toLowerCase(),
              },
            },
          ],
        },
      };
      return qs.stringify(newQuery, { encodeValuesOnly: true });
    });
    setActiveDropdown(null);
    setActivePage(1);
  };

  return (
    <main>
      <div className="relative overflow-hidden bg-[#FBE0DC] pt-16 pb-[190px] xl:py-[178px]">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8">
            <img
              src={HeroBg1x}
              alt="hero foxy"
              className="absolute bottom-0 xl:right-[243px] xl:-translate-x-0"
            />
            <h2 className="relative z-50 font-bold text-3xl xl:text-[40px] leading-[45px] mb-8">
              Бесплатная доставка!
            </h2>
            <p className="relative z-50 font-light text-lg xl:text-[20px] mb-8 md:w-[505px]">
              Осуществляем бесплатную доставку по Москве при заказе от 10 000 ₽
            </p>
            <Link
              to="/products"
              className="relative z-[100] block w-fit rounded-3xl bg-[#FB7571] text-[16px] leading-6 py-4 px-6 text-white hover:bg-[#FA524C] transition ease-in-out duration-300"
            >
              Выбрать букет
            </Link>
          </div>
        </div>
      </div>
      <section className="pt-[80px] pb-[40px]">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col gap-6 xl:gap-0 xl:flex-row justify-between items-center mb-[42px]">
              <h3 className="font-bold text-[24px] leading-[27px]">Новинки</h3>
              <Link to="/products" className="group flex gap-x-4 items-center">
                <span className="font-bold text-[16px] leading-6 group-hover:text-[#FA524C] transition ease-in-out duration-300">
                  Смотреть все
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="fill-current group-hover:text-[#FA524C] transition ease-in-out duration-300"
                >
                  <g clipPath="url(#clip0_174_2678)">
                    <path
                      fill="current"
                      d="M23.12 9.91L19.25 6a1 1 0 00-1.42 0 1 1 0 000 1.41L21.39 11H1a1 1 0 00-1 1 1 1 0 001 1h20.45l-3.62 3.61a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l3.87-3.88a3 3 0 000-4.24z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_174_2678">
                      <path fill="#fff" d="M0 0H24V24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 justify-items-center xl:grid-cols-[290px_290px_290px_290px] gap-8">
              {products?.data.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-[40px]">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid xl:grid-cols-2 gap-3">
              {products?.data.slice(5, 6).map((product) => (
                <Link
                  to="/products"
                  key={product.id}
                  className="relative group flex items-end h-[622px] xl:w-[622px] p-6"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition ease-in-out duration-300 z-50 pointer-events-none"></div>
                  <img
                    src={`${import.meta.env["VITE_STRAPI_UPLOADS_URL"]}${
                      product["attributes"]?.image.data[0].attributes.url
                    }`}
                    loading="lazy"
                    className="absolute top-0 left-0 w-full xl:w-[622px] h-[622px] object-cover"
                  />
                  <div className="relative z-50 mt-auto text-white">
                    <p className="text-[14px] leading-[16px] mb-3">Новинка</p>
                    <h3 className="font-bold text-[24px] leading-[27px] mb-4">
                      {product["attributes"]?.name}
                    </h3>
                    <div className="group flex items-center gap-x-4 text-[14px] leading-[16px]">
                      <span className="group-hover:text-[#FA524C] transition ease-in-out duration-300">
                        Купить
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="fill-current group-hover:fill-[#FA524C] transition ease-in-out duration-300"
                      >
                        <g clipPath="url(#clip0_174_2687)">
                          <path
                            fill="current"
                            d="M15.413 6.607L12.833 4a.666.666 0 10-.946.94l2.373 2.393H.667A.667.667 0 000 8a.667.667 0 00.667.667H14.3l-2.413 2.406a.667.667 0 00.217 1.093.668.668 0 00.73-.146l2.58-2.587a2 2 0 000-2.826z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_174_2687">
                            <path fill="current" d="M0 0H16V16H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="flex flex-col gap-3">
                <div className="grid xl:grid-cols-[411px_1fr] gap-3">
                  <Link
                    to="/products"
                    className="relative group flex flex-col justify-end bg-[#F6F6F6] p-6 h-[198px] bg-[url(@/assets/img/hit@2x.png)] bg-contain bg-no-repeat bg-right-bottom"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-5 transition ease-in-out duration-300 z-50 pointer-events-none"></div>
                    <p className="text-[14px] leading-[16px] mb-3">Хит</p>
                    <h3 className="font-bold text-[16px] leading-[18px] mb-4">
                      Букеты в коробках
                    </h3>
                    <div className="flex gap-x-4 text-[14px] leading-[16px]">
                      <span className="group-hover:text-[#FA524C] transition ease-in-out duration-300">
                        Посмотреть
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="fill-current group-hover:fill-[#FA524C] transition ease-in-out duration-300"
                      >
                        <g clipPath="url(#clip0_174_2687)">
                          <path
                            fill="current"
                            d="M15.413 6.607L12.833 4a.666.666 0 10-.946.94l2.373 2.393H.667A.667.667 0 000 8a.667.667 0 00.667.667H14.3l-2.413 2.406a.667.667 0 00.217 1.093.668.668 0 00.73-.146l2.58-2.587a2 2 0 000-2.826z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_174_2687">
                            <path fill="current" d="M0 0H16V16H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to="/products"
                    className="relative flex flex-col bg-[#91225F] py-[27px] px-4 text-white group"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-15 transition ease-in-out duration-300 z-50 pointer-events-none"></div>
                    <p className="font-medium text-[14px] leading-[16px] mb-3">
                      до 17.08.2023
                    </p>
                    <p className="font-bold text-[16px] leading-[18px] mb-4">
                      Скидка на монобукеты при покупке от 25 цветов
                    </p>
                    <div className="flex gap-x-4 mt-auto group">
                      <span className="font-medium text-[14px] leading-[16px] group-hover:text-[#FA524C] transition ease-in-out duration-300">
                        Подробнее
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="fill-white group-hover:fill-[#FA524C] transition ease-in-out duration-300"
                      >
                        <g clipPath="url(#clip0_174_2687)">
                          <path
                            fill="current"
                            d="M15.413 6.607L12.833 4a.666.666 0 10-.946.94l2.373 2.393H.667A.667.667 0 000 8a.667.667 0 00.667.667H14.3l-2.413 2.406a.667.667 0 00.217 1.093.668.668 0 00.73-.146l2.58-2.587a2 2 0 000-2.826z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_174_2687">
                            <path fill="current" d="M0 0H16V16H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>
                </div>
                <Link
                  to="/products"
                  className="relative group flex-1 bg-[#f6f6f6] p-[21px] flex flex-col justify-end h-[198px] bg-[url(@/assets/img/office@2x.png)] bg-no-repeat bg-[length:322px] bg-[right_0_bottom] xl:bg-[right_23px_bottom]"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-5 transition ease-in-out duration-300 z-50 pointer-events-none"></div>
                  <p className="text-[14px] leading-[16px] mb-3">Офис</p>
                  <h3 className="font-bold text-[16px] leading-[18px] mb-4">
                    Корпоративные букеты
                  </h3>
                  <div className="flex gap-x-4 text-[14px] leading-[16px]">
                    <span className="group-hover:text-[#FA524C] transition ease-in-out duration-300">
                      Посмотреть
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      className="fill-current group-hover:fill-[#FA524C] transition ease-in-out duration-300"
                    >
                      <g clipPath="url(#clip0_174_2687)">
                        <path
                          fill="current"
                          d="M15.413 6.607L12.833 4a.666.666 0 10-.946.94l2.373 2.393H.667A.667.667 0 000 8a.667.667 0 00.667.667H14.3l-2.413 2.406a.667.667 0 00.217 1.093.668.668 0 00.73-.146l2.58-2.587a2 2 0 000-2.826z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_174_2687">
                          <path fill="current" d="M0 0H16V16H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </Link>
                <div className="flex flex-col xl:flex-row gap-3">
                  <Link
                    to="/products"
                    className="relative flex flex-col items-center justify-center gap-y-4 bg-[#A6093C] xl:w-[199px] py-[33px] px-[24px] text-white group"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-15 transition ease-in-out duration-300 z-50 pointer-events-none"></div>
                    <p className="font-medium text-[14px] leading-6">
                      Горячие скидки
                    </p>
                    <strong className="font-bold text-[48px] leading-[54px]">
                      20 %
                    </strong>
                    <p className="text-[14px] leading-6">на все хризантемы</p>
                  </Link>
                  <Link
                    to="/products"
                    className="relative group flex flex-col justify-end bg-[#F6F6F6] p-6 flex-1  bg-[url(@/assets/img/design@2x.png)] bg-no-repeat bg-contain bg-right-bottom"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-5 transition ease-in-out duration-300 z-50 pointer-events-none"></div>
                    <p className="text-[14px] leading-[16px] mb-3">
                      От дизайнера
                    </p>
                    <h3 className="font-bold text-[16px] leading-[18px] mb-4">
                      Авторские букеты
                    </h3>
                    <div className="flex gap-x-4 text-[14px] leading-[16px]">
                      <span className="group-hover:text-[#FA524C] transition ease-in-out duration-300">
                        Посмотреть
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="fill-current group-hover:fill-[#FA524C] transition ease-in-out duration-300"
                      >
                        <g clipPath="url(#clip0_174_2687)">
                          <path
                            fill="current"
                            d="M15.413 6.607L12.833 4a.666.666 0 10-.946.94l2.373 2.393H.667A.667.667 0 000 8a.667.667 0 00.667.667H14.3l-2.413 2.406a.667.667 0 00.217 1.093.668.668 0 00.73-.146l2.58-2.587a2 2 0 000-2.826z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_174_2687">
                            <path fill="current" d="M0 0H16V16H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[40px]">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col gap-6 xl:gap-0 xl:flex-row justify-between items-center mb-[42px]">
              <h3 className="font-bold text-[24px] leading-[27px]">
                Популярное
              </h3>
              <Link to="/products" className="group flex gap-x-4 items-center">
                <span className="font-bold text-[16px] leading-6 group-hover:text-[#FA524C] transition ease-in-out duration-300">
                  Смотреть все
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="fill-current group-hover:text-[#FA524C] transition ease-in-out duration-300"
                >
                  <g clipPath="url(#clip0_174_2678)">
                    <path
                      fill="current"
                      d="M23.12 9.91L19.25 6a1 1 0 00-1.42 0 1 1 0 000 1.41L21.39 11H1a1 1 0 00-1 1 1 1 0 001 1h20.45l-3.62 3.61a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l3.87-3.88a3 3 0 000-4.24z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_174_2678">
                      <path fill="#fff" d="M0 0H24V24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 justify-items-center xl:grid-cols-[290px_290px_290px_290px] gap-8">
              {products?.data.slice(6, 10).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-[40px]">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col gap-6 text-center xl:text-left xl:gap-0 xl:flex-row justify-between items-center mb-[42px]">
              <h3 className="font-bold text-[24px] leading-[27px]">
                Специальное предложение
              </h3>
              <Link to="/products" className="group flex gap-x-4 items-center">
                <span className="font-bold text-[16px] leading-6 group-hover:text-[#FA524C] transition ease-in-out duration-300">
                  Смотреть все
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="fill-current group-hover:text-[#FA524C] transition ease-in-out duration-300"
                >
                  <g clipPath="url(#clip0_174_2678)">
                    <path
                      fill="current"
                      d="M23.12 9.91L19.25 6a1 1 0 00-1.42 0 1 1 0 000 1.41L21.39 11H1a1 1 0 00-1 1 1 1 0 001 1h20.45l-3.62 3.61a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l3.87-3.88a3 3 0 000-4.24z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_174_2678">
                      <path fill="#fff" d="M0 0H24V24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 justify-items-center xl:grid-cols-[290px_290px_290px_290px] gap-8">
              {products?.data.slice(10, 14).map((product) => (
                <ProductCard key={product.id} product={product} special />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-[40px] bg-[#FFF8F7] xl:h-[628px] bg-review overflow-hidden">
        <div className="py-[170px] xl:px-8">
          <div className="absolute top-1/2 -left-[120px] -translate-y-1/2 flex gap-x-[85px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="214"
              height="363"
              fill="none"
              viewBox="0 0 214 363"
            >
              <path
                fill="#F9D6D2"
                d="M214 277.333v-128H45.253a128.128 128.128 0 01126.08-106.666V0A170.858 170.858 0 00.667 170.666v192h128A85.333 85.333 0 00214 277.333z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="214"
              height="363"
              fill="none"
              viewBox="0 0 214 363"
            >
              <path
                fill="#F9D6D2"
                d="M214 277.333v-128H45.253a128.128 128.128 0 01126.08-106.666V0A170.858 170.858 0 00.667 170.666v192h128A85.333 85.333 0 00214 277.333z"
              ></path>
            </svg>
          </div>
          <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
            <div className="max-w-7xl mx-auto xl:px-8">
              <div className="relative z-50 flex flex-col xl:flex-row xl:justify-end gap-8">
                <div className="flex flex-col gap-6 items-center xl:basis-[398px] rounded-3xl bg-white shadow-primary p-6 hover:scale-105 transition ease-in-out duration-300">
                  <p className="block xl:h-[168px] text-[16px] leading-6 text-center pointer-events-none">
                    Искала букет пионов маме на день рождения. Долго выбирала из
                    множества композиций, хотелось купить сразу все:) Привезли
                    быстро, как раз к празднику, мама была рада. Кстати, букет
                    не теряет вида почти месяц.
                  </p>
                  <div className="flex gap-3">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <h3 className="font-bold text-[16px] leading-6">
                    Карина Чистина
                  </h3>
                </div>
                <div className="flex flex-col gap-6 items-center xl:basis-[398px] rounded-3xl bg-white shadow-primary p-6 hover:scale-105 transition ease-in-out duration-300">
                  <p className="block xl:h-[168px] text-[16px] leading-6 text-center pointer-events-none">
                    Заказывал букет классических красных роз, порадовать жену.
                    Цена доступная, упаковали очень красиво. Вежливый курьер
                    приехал в указанное время и вручил лично в руки жене. Теперь
                    буду заказывать цветы только тут, спасибо.
                  </p>
                  <div className="flex gap-3">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <h3 className="font-bold text-[16px] leading-6">
                    Денис Давыдов
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[40px] pb-[80px] overflow-hidden">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8">
            <h3 className="font-bold text-[24px] leading-[27px] mb-[42px]">
              Мы в социальных сетях
            </h3>
          </div>
        </div>
        <div className="flex gap-3 overflow-hidden">
          {products?.data.slice(1, 30).map((product) => {
            if (product.id === 3) {
              return (
                <a
                  href="/#instagram"
                  className="relative min-w-[199px] h-[199px] bg-[#91225F] flex flex-col gap-3 py-[60px] px-[40px] group"
                  key={product.id}
                >
                  <div className="absolute top-0 left-0 w-[199px] h-[199px] bg-black bg-opacity-0 group-hover:bg-opacity-15 transition ease-in-out duration-300 z-50 pointer-events-none"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 32 32"
                  >
                    <g fill="#fff" clipPath="url(#clip0_174_2881)">
                      <path d="M16 2.883c4.272 0 4.779.016 6.465.093 1.744.08 3.54.477 4.811 1.748 1.283 1.283 1.668 3.061 1.748 4.81.077 1.687.093 2.194.093 6.466s-.016 4.779-.093 6.465c-.079 1.735-.485 3.548-1.748 4.811-1.283 1.283-3.06 1.668-4.81 1.748-1.687.077-2.194.093-6.466.093s-4.779-.016-6.465-.093c-1.722-.079-3.559-.495-4.811-1.748-1.276-1.276-1.668-3.072-1.748-4.81-.077-1.687-.093-2.194-.093-6.466s.016-4.779.093-6.465c.079-1.728.49-3.552 1.748-4.811 1.28-1.28 3.065-1.668 4.81-1.748 1.687-.077 2.194-.093 6.466-.093zM16 0c-4.345 0-4.89.019-6.597.096-2.474.113-4.93.801-6.718 2.59C.891 4.48.21 6.93.096 9.402.019 11.109 0 11.655 0 16c0 4.345.019 4.89.096 6.597.113 2.471.804 4.934 2.59 6.718 1.793 1.793 4.247 2.476 6.717 2.589 1.706.077 2.252.096 6.597.096 4.345 0 4.89-.019 6.597-.096 2.472-.113 4.931-.803 6.718-2.59 1.796-1.795 2.476-4.245 2.589-6.717.077-1.706.096-2.252.096-6.597 0-4.345-.019-4.89-.096-6.597-.113-2.474-.803-4.931-2.59-6.718C27.525.895 25.064.208 22.598.096 20.891.019 20.345 0 16 0z"></path>
                      <path d="M16 7.784a8.216 8.216 0 100 16.433 8.216 8.216 0 000-16.433zm0 13.55a5.334 5.334 0 110-10.668 5.334 5.334 0 010 10.668zM24.541 9.379a1.92 1.92 0 100-3.84 1.92 1.92 0 000 3.84z"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_174_2881">
                        <path fill="#fff" d="M0 0H32V32H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-white text-[14px] leading-[16px]">
                    ждём тебя
                    <br />в инстаграм
                  </p>
                </a>
              );
            }
            return (
              <img
                src={`${import.meta.env["VITE_STRAPI_UPLOADS_URL"]}${
                  product["attributes"]?.image.data[0].attributes.url
                }`}
                loading="lazy"
                className="w-[199px] h-[199px] object-contain"
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
