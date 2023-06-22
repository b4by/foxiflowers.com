import React from "react";
import { CustomHit } from "../../components/CustomHit/CustomHit";
import { CustomPagination } from "../../components/CustomPagination/CustomPagination";
import { CustomRefinementList } from "../../components/CustomRefinementList/CustomRefinementList";
import { CustomMenu } from "../../components/CustomMenu/CustomMenu";
import { useHits } from "react-instantsearch-hooks-web";
import { CustomNumericMenu } from "../../components/CustomNumericMenu/CustomNumericMenu";
import { declOfNum } from "../../utils/declOfNum";
import {
  flowerColors,
  flowerPrices,
  flowerTypes,
  flowerRecipients,
  flowerEvents,
} from "../../constants";
import { transformColorsItems } from "../../utils/transformColorsItems";
import { transformTypesItems } from "../../utils/transformTypesItems";
import { transformRecipientsItems } from "../../utils/transformRecipientsItems";
import { transformEventsItems } from "../../utils/transformEventsItems";

const ProductsPage = (props) => {
  const { hits, results, sendEvent } = useHits(props);
  return (
    <div>
      <section className="bg-[#F8F8F8]">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex justify-between">
              <div className="flex gap-x-[6px]">
                <h3 className="text-[14px] leading-[16px]">Показано</h3>
                <span className="font-bold text-[14px] leading-[16px]">
                  {results?.nbHits}
                </span>
                <h4 className="text-[14px] leading-[16px]">
                  {declOfNum(results?.nbHits, ["букет", "букета", "букетов"])}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[42px] pb-[180px]">
        <div className="px-4 sm:px-4 md:px-4 lg:px-6 xl:px-0">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid xl:grid-cols-[290px_1fr] gap-x-8">
              <div className="hidden mb-12 xl:flex xl:flex-col gap-y-[42px]">
                <div>
                  <h4 className="font-semibold text-[16px] leading-[18px] mb-4">
                    Цена:
                  </h4>
                  <CustomNumericMenu attribute="price" items={flowerPrices} />
                </div>
                <div className="">
                  <h4 className="font-semibold text-[16px] leading-[18px] mb-4">
                    Цветы:
                  </h4>
                  <CustomRefinementList
                    attribute="types"
                    limit={20}
                    transformItems={transformTypesItems}
                  />
                </div>
                <div className="">
                  <h4 className="font-semibold text-[16px] leading-[18px] mb-4">
                    Кому:
                  </h4>
                  <CustomMenu
                    attribute="recipients"
                    name="recipients"
                    transformItems={transformRecipientsItems}
                  />
                </div>
                <div className="">
                  <h4 className="font-semibold text-[16px] leading-[18px] mb-4">
                    Повод:
                  </h4>
                  <CustomMenu
                    attribute="events"
                    name="events"
                    transformItems={transformEventsItems}
                  />
                </div>
                <div className="">
                  <h4 className="font-semibold text-[16px] leading-[18px] mb-4">
                    Гамма:
                  </h4>
                  <CustomRefinementList
                    attribute="colors"
                    limit={20}
                    transformItems={transformColorsItems}
                  />
                </div>
              </div>
              <div>
                <CustomHit />
                <CustomPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
