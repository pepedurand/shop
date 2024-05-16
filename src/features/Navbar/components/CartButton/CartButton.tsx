import { useCart } from "@/context";
import { ShoppingCartOutlined } from "@ant-design/icons";

export function CartButton() {
  const {
    state: { isDrawerOpen, cartItems },
    dispatch,
  } = useCart();

  function handleOnClick() {
    dispatch({
      type: "TOGGLE_DRAWER",
      payload: { isOpen: !isDrawerOpen },
    });
  }

  return (
    <button
      onClick={handleOnClick}
      className="centred"
      style={{
        padding: "12px 28px 12px 12px",
        borderRadius: "8px",
        border: "none",
        flexDirection: "row",
        gap: "16px",
      }}
    >
      <ShoppingCartOutlined style={{ fontSize: "20px" }} />
      <p
        style={{
          fontSize: "18px",
          fontWeight: 700,
          height: "20px",
        }}
      >
        {cartItems.length}
      </p>
    </button>
  );
}
