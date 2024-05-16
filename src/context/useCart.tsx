import { createContext, useContext, useReducer } from "react";

type CartState = {
  isDrawerOpen: boolean;
  cartItems: CartItem[];
};

interface CartItem {}

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

type Actions = ToggleDrawerAction;

const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const cartReducer = (state: CartState, action: Actions): CartState => {
    switch (action.type) {
      case "TOGGLE_DRAWER": {
        return {
          ...state,
          isDrawerOpen: action.payload.isOpen,
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
