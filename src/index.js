import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './hooks/queryClient'
import { App } from './App'
import "./styles.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
