import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import UserPage from "./UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-16">
        <Routes>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
