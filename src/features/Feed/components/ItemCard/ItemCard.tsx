import { currency } from "@/functions";
import Image from "next/image";
import { BuyButton } from "@/features/Feed/components";
import { useCart } from "@/context";

interface ItemCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

export function ItemCard({
  id,
  title,
  image,
  price,
  description,
}: ItemCardProps) {
  const { dispatch } = useCart();

  function handleAddToCart() {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: {
        item: {
          id,
          title,
          image,
          price,
          amount: 1,
        },
      },
    });
    dispatch({ type: "TOGGLE_DRAWER", payload: { isOpen: true } });
  }

  return (
    <div style={{ width: "240px" }}>
      <div
        className="centred"
        style={{
          borderRadius: "8px 8px 0 0",
          boxShadow: "0px 2px 8px 0px #00000022",
          flexDirection: "column",
          padding: "12px",
          height: "260px",
          gap: "12px",
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
            }}
          >
            {title}
          </h2>
          <p
            className="centred"
            style={{
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "700",
              background: "#373737",
              color: "#fff",
              padding: "4px 8px",
              height: "24px",
            }}
          >
            {currency.format(price)}
          </p>
        </div>
        <p
          style={{
            fontSize: "10px",
            fontWeight: "300",
          }}
        >
          {description}
        </p>
      </div>
      <BuyButton onClick={() => handleAddToCart()} />
    </div>
  );
}
