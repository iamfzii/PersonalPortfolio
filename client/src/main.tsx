import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import App from "./App";
import "./index.css";

// Optimized loading with suspense
const LoadingFallback = () => (
  <div className="loading">
    <div className="spinner"></div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingFallback />}>
    <App />
  </Suspense>
);
