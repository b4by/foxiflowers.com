import { flowerEvents } from "../constants";

export const transformEventsItems = (items) => {
  return flowerEvents.map((staticItem) => ({
    ...staticItem,
    ...items.find((item) => item.value === staticItem.value),
  }));
};
