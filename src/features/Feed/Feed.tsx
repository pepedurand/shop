import { ItemCard, ItemCardSkeleton } from "@/features/Feed/components";
import { useCyclesList } from "@/api/hooks";

export function Feed() {
  const { data: products, isLoading } = useCyclesList();

  return (
    <div
      className="centred"
      style={{
        width: "100vw",
        marginTop: "80px",
      }}
    >
      <div className="cards-container">
        {isLoading ? (
          <ItemCardSkeleton />
        ) : (
          products?.products.map(({ id, name, photo, price, description }) => {
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
          })
        )}
      </div>
    </div>
  );
}
