import { useCart } from "@/context";
import { Drawer } from "antd";
import { CartItem, FinishShoppingButton, Total } from "@/features/Cart";
import { CloseCircleFilled } from "@ant-design/icons";

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
      closeIcon={<CloseCircleFilled style={{ fontSize: "36px" }} />}
      open={isDrawerOpen}
      footer={<FinishShoppingButton />}
      onClose={handleCloseDrawer}
      title={
        <h3 className="white-text">
          Carrinho
          <br />
          de compras
        </h3>
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          {cartItems.map(({ title, amount, image, price, id }) => {
            return (
              <CartItem
                key={title}
                id={id}
                title={title}
                amount={amount}
                price={price}
                image={image}
              />
            );
          })}
        </div>
        <Total />
      </div>
    </Drawer>
  );
}
