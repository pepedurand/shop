import { ItemCard } from "./components";
import { useCyclesList } from "@/hooks/useCyclesList";

export function Feed() {
  const { data: products } = useCyclesList();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "16px",
        justifyItems: "center",
        alignItems: "center",
        maxWidth: "1000px",
      }}
    >
      {products?.products.map(({ id, name, photo, price, description }) => {
        return (
          <ItemCard
            key={id}
            title={name}
            image={photo}
            price={price}
            description={description}
          />
        );
      })}
    </div>
  );
}
