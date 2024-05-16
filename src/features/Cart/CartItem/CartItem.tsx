import { currency } from "@/functions";
import Image from "next/image";
import { ItemCounter } from "@/features/Cart";

interface CartItemProps {
  title: string;
  amount: number;
  price: number;
  image: string;
}

export function CartItem({ title, amount, price, image }: CartItemProps) {
  return (
    <div
      style={{
        borderRadius: "8px",
        background: "#fff",
        width: "300px",
        margin: "24px",
        display: "flex",
        alignItems: "center",
        padding: "12px",
        gap: "8px",
      }}
    >
      <Image src={image} alt={title} width={50} height={50} />
      <p style={{ fontSize: "13px", fontWeight: 400, width: "90px" }}>
        {title}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          paddingBottom: "8px",
          gap: "8px",
        }}
      >
        <ItemCounter amount={amount} />
        <p
          style={{
            fontSize: "15px",
            fontWeight: "700",
            width: "72px",
            textAlign: "right",
          }}
        >
          {currency.format(price)}
        </p>
      </div>
    </div>
  );
}
