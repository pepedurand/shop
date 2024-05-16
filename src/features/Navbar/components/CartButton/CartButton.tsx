import Image from "next/image";
import cartIcon from "@/assets/cart-icon.png";

export function CartButton() {
  return (
    <button
      style={{
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
