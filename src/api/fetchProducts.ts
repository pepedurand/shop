interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

interface FetchProductsResponse {
  products: Product[];
  count: number;
}

export async function fetchProducts(): Promise<FetchProductsResponse> {
  const resp = await fetch(
    `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC`
  );

  if (!resp.ok) {
    throw new Error("Network response was not ok");
  }

  return resp.json();
}
