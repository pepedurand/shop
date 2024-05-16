"use client";
import { Feed, Navbar } from "@/features";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.scss";

export default function Home() {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Navbar />
      <div
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feed />
      </div>
    </QueryClientProvider>
  );
}
