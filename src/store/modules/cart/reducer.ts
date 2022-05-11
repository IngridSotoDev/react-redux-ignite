import { Reducer } from "redux";
import produce from "immer";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        const productinCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productinCartIndex >= 0) {
          draft.items[productinCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};
