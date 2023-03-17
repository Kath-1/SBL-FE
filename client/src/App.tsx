import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import UserPage from "./UserPage";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <div className="max-w-7xl mx-auto pt-20 px-4 w-full ">
          <Routes>
            <Route path="/user" element={<UserPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
