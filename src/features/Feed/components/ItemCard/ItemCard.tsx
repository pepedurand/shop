import { currency } from "@/functions";
import Image from "next/image";
import { BuyButton } from "@/features/Feed/components";
import { useCart } from "@/context";

interface ItemCardProps {
  title: string;
  image: string;
  price: number;
  description: string;
}

export function ItemCard({ title, image, price, description }: ItemCardProps) {
  const { dispatch } = useCart();

  function handleAddToCart() {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: {
        item: {
          title,
          image,
          price,
          amount: 1,
        },
      },
    });
  }

  return (
    <div style={{ width: "240px" }}>
      <div
        style={{
          borderRadius: "8px 8px 0 0",
          boxShadow: "0px 2px 8px 0px #00000022",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "12px",
          height: "260px",
        }}
      >
        <Image src={image} alt={title} width={138} height={138} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            width: "100%",
            gap: "8px",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "19px",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              display: "flex",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "700",
              background: "#373737",
              color: "#fff",
              padding: "4px 8px",
              height: "24px",
              alignItems: "center",
            }}
          >
            {currency.format(price)}
          </p>
        </div>
        <p style={{ fontSize: "10px", fontWeight: "300", lineHeight: "12px" }}>
          {description}
        </p>
      </div>
      <BuyButton onClick={() => handleAddToCart()} />
    </div>
  );
}
