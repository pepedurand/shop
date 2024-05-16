import Image from "next/image";
import cartIcon from "@/assets/cart-icon.png";
import { useCart } from "@/context";

export function CartButton() {
  const {
    state: { isDrawerOpen },
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
      style={{
        cursor: "pointer",
        padding: "12px 28px 12px 12px",
        borderRadius: "8px",
        border: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Image
        src={cartIcon}
        alt="Icone de carrinho de compras"
        width={20}
        height={20}
      />
      <p
        style={{
          fontSize: "18px",
          fontWeight: 700,
          height: "20px",
        }}
      >
        0
      </p>
    </button>
  );
}
