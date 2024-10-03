import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LeetcodeField } from "./components/LeetcodeField/LeetcodeField";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={query}>
      <div className="flex ">
        <LeetcodeField />
      </div>
    </QueryClientProvider>
  </StrictMode>
);
