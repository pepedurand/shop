import { createContext, useContext, useReducer } from "react";

type CartState = {
  isDrawerOpen: boolean;
  cartItems: CartItem[];
};

interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
}

const initialState: CartState = {
  isDrawerOpen: false,
  cartItems: [],
};

interface CartContext {
  state: CartState;
  dispatch: React.Dispatch<Actions>;
}

const CartContext = createContext<CartContext>({
  state: initialState,
  dispatch: () => {},
});

type ToggleDrawerAction = {
  type: "TOGGLE_DRAWER";
  payload: {
    isOpen: boolean;
  };
};

type AddItemToCartAction = {
  type: "ADD_ITEM_TO_CART";
  payload: {
    item: CartItem;
  };
};

type RemoveItemFromCartAction = {
  type: "REMOVE_ITEM_FROM_CART";
  payload: {
    id: number;
  };
};

type Actions =
  | ToggleDrawerAction
  | AddItemToCartAction
  | RemoveItemFromCartAction;

const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const cartReducer = (state: CartState, action: Actions): CartState => {
    switch (action.type) {
      case "TOGGLE_DRAWER": {
        return {
          ...state,
          isDrawerOpen: action.payload.isOpen,
        };
      }

      case "ADD_ITEM_TO_CART": {
        const isItemInCart = state.cartItems.some(
          (item) => item.title === action.payload.item.title
        );
        if (isItemInCart) {
          const updatedAmount = state.cartItems.map((item) => ({
            ...item,
            amount:
              item.title === action.payload.item.title
                ? item.amount + 1
                : item.amount,
          }));
          return {
            ...state,
            cartItems: updatedAmount,
          };
        }
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.item],
        };
      }

      case "REMOVE_ITEM_FROM_CART": {
        const selectedItem = state.cartItems.find(
          (item) => item.id === action.payload.id
        );

        console.log(selectedItem);

        if (selectedItem?.amount === 1) {
          return {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.title !== selectedItem.title
            ),
          };
        }

        const updatedAmount = state.cartItems.map((item) => ({
          ...item,
          amount: selectedItem?.id === item.id ? item.amount - 1 : item.amount,
        }));

        return {
          ...state,
          cartItems: updatedAmount,
        };
      }

      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart() {
  return useContext<CartContext>(CartContext);
}

export { useCart, CartContextProvider };
