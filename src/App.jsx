import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TambahData from "./pages/TambahData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/tambahdata" element={<TambahData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
