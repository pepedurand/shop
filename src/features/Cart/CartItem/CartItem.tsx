import { currency } from "@/functions";
import Image from "next/image";
import { ItemCounter } from "@/features/Cart";
import { CloseCircleFilled } from "@ant-design/icons";
import { useCart } from "@/context";

interface CartItemProps {
  id: number;
  title: string;
  amount: number;
  price: number;
  image: string;
}

export function CartItem({ id, title, amount, price, image }: CartItemProps) {
  const { dispatch } = useCart();

  function handleRemoveCartItem() {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: { id } });
  }

  return (
    <>
      <div
        className="centred"
        style={{
          borderRadius: "8px",
          background: "#fff",
          width: "300px",
          margin: "24px",
          padding: "12px",
          gap: "8px",
        }}
      >
        <CloseCircleFilled
          onClick={handleRemoveCartItem}
          style={{
            fill: "#000",
            fontSize: "16px",
            borderRadius: "50%",
            position: "absolute",
            right: "20px",
            marginBottom: "72px",
            background: "#fff",
          }}
        />
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
          <ItemCounter id={id} amount={amount} />
          <p
            style={{
              fontSize: "15px",
              fontWeight: "700",
              width: "72px",
              textAlign: "right",
            }}
          >
            {currency.format(price * amount)}
          </p>
        </div>
      </div>
    </>
  );
}
