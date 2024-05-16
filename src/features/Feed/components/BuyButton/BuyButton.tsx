import { InboxOutlined } from "@ant-design/icons";

export function BuyButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="centred"
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
        gap: "8px",
      }}
    >
      <InboxOutlined style={{ fontSize: "20px" }} />
      Comprar
    </button>
  );
}
