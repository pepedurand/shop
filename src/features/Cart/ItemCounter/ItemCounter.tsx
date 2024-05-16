import { useCart } from "@/context";

export function ItemCounter({ amount, id }: { amount: number; id: number }) {
  const { dispatch } = useCart();

  function handleDecreaseCartItem() {
    dispatch({ type: "DECREASE_CART_ITEM", payload: { id } });
  }

  function handleIncreaseCartItem() {
    dispatch({ type: "INCREMENT_CART_ITEM", payload: { id } });
  }

  return (
    <div style={{ width: "62px" }}>
      <p style={{ fontSize: "8px", marginBottom: "4px" }}>Qtd:</p>
      <div
        style={{
          display: "flex",
          border: "solid 0.5px rgba(191, 191, 191, 1)",
          borderRadius: "4px",
          alignItems: "center",
          height: "20px",
        }}
      >
        <button
          style={{ borderRadius: "4px 0 0 4px" }}
          className="item-counter-button"
          onClick={handleDecreaseCartItem}
        >
          -
        </button>
        <p
          className="item-counter-button"
          style={{
            borderLeft: "solid 0.5px rgba(191, 191, 191, 1)",
            borderRight: "solid 0.5px rgba(191, 191, 191, 1)",
            lineHeight: "8px",
          }}
        >
          {amount}
        </p>
        <button
          style={{ borderRadius: "0 4px 4px 0" }}
          className="item-counter-button"
          onClick={handleIncreaseCartItem}
        >
          +
        </button>
      </div>
    </div>
  );
}
