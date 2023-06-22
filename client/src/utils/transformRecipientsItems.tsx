import { flowerRecipients } from "../constants";

export const transformRecipientsItems = (items) => {
  return flowerRecipients.map((staticItem) => ({
    ...staticItem,
    ...items.find((item) => item.value === staticItem.value),
  }));
};
