import { useCart } from "@/context";
import { Drawer } from "antd";
import { CartItem } from "@/features/Cart";

export function Cart() {
  const {
    state: { isDrawerOpen, cartItems },
    dispatch,
  } = useCart();

  function handleCloseDrawer() {
    dispatch({
      type: "TOGGLE_DRAWER",
      payload: { isOpen: !isDrawerOpen },
    });
  }

  return (
    <Drawer
      style={{ backgroundColor: "#0f52ba", fontFamily: "Montserrat" }}
      open={isDrawerOpen}
      onClose={handleCloseDrawer}
      title={
        <h3 style={{ color: "#fff", fontSize: "27px", fontWeight: 700 }}>
          Carrinho
          <br />
          de compras
        </h3>
      }
    >
      {cartItems.map(({ title, amount, image, price }) => {
        return (
          <CartItem
            key={title}
            title={title}
            amount={amount}
            price={price}
            image={image}
          />
        );
      })}
    </Drawer>
  );
}
