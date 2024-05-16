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
        <Cart />
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: "80px",
          }}
        >
          <Navbar />
          <Feed />
          <Footer />
        </div>
      </CartContextProvider>
    </QueryClientProvider>
  );
}
