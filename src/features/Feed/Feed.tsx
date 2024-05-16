import { ItemCard } from "./components";
import { useCyclesList } from "@/api/hooks";

export function Feed() {
  const { data: products } = useCyclesList();

  return (
    <div
      className="centred"
      style={{
        width: "100vw",
        height: "100%",
        paddingTop: "80px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )",
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
              id={id}
              title={name}
              image={photo}
              price={price}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}
