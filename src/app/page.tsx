"use client";
import { Cart, Feed, Footer, Navbar } from "@/features";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.scss";
import { CartContextProvider } from "@/context";

export default function Home() {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <CartContextProvider>
        <Navbar />
        <Cart />
        <Feed />
        <Footer />
      </CartContextProvider>
    </QueryClientProvider>
  );
}
