import { flowerColors } from "../constants";

export const transformColorsItems = (items) => {
  return flowerColors.map((staticItem) => ({
    ...staticItem,
    ...items.find((item) => item.value === staticItem.value),
  }));
};
