import { flowerTypes } from "../constants";

export const transformTypesItems = (items) => {
  return flowerTypes.map((staticItem) => ({
    ...staticItem,
    ...items.find((item) => item.value === staticItem.value),
  }));
};
