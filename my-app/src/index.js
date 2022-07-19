import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Cards from "./pages/Cards";
import Numbers from "./pages/Numbers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cards" element={<Cards />} />
            <Route path="numbers" element={<Numbers />} />
          </Route>
        </Routes>
      </Routes>
    </BrowserRouter>
  );
}

