import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseItemPage from "./pages/WarehouseItemPage/WarehouseItemPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryItemPage from "./pages/InventoryItemPage/InventoryItemPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/:id" element={<WarehouseItemPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" element={<InventoryItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
