import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Test</h1>;
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
