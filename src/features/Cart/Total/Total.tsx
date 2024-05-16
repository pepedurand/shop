import { useCart } from "@/context";

export function Total() {
  const {
    state: { cartItems },
  } = useCart();

  const total = cartItems.reduce((acc, item) => {
    return acc + item.amount * item.price;
  }, 0);

  return (
    <div
      className="white-text"
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <p>Total:</p>
      <p>{total}</p>
    </div>
  );
}
