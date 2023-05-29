import "./App.css";
import Header from "./components/header";

import { Routes, Route } from "react-router-dom";
import Universo from "./pages/universo";
import Exploracao from "./pages/exploracao";
import Home from "./pages/Home";

function App() {
  return (
    <div className="box">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/universo" element={<Universo />} />
        <Route path="/exploracao" element={<Exploracao />} />
      </Routes>
    </div>
  );
}

export default App;
