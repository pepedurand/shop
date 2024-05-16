export function BuyButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        background: "#0f52ba",
        border: "none",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "0 0 8px 8px",
        height: "32px",
        textTransform: "uppercase",
      }}
    >
      Comprar
    </button>
  );
}
