import { fetchProducts } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useCyclesList = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
