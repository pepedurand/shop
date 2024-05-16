import { CartButton, Logo } from "@/features/Navbar/components";

export function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        height: "101px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 60px",
        backgroundColor: "#0f52ba",
      }}
    >
      <Logo />
      <CartButton />
    </nav>
  );
}
