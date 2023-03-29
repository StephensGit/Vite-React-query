import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserState from "./context/UserState";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <UserState>
        <QueryClientProvider client={queryClient}>
          <div>
            <h1>Coffee Shops - REST API</h1>
          </div>
          <Routes>
            <Route path="/:id" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </QueryClientProvider>
      </UserState>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
