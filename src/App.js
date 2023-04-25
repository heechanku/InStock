import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseItemPage from "./pages/WarehouseItemPage/WarehouseItemPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryItemPage from "./pages/InventoryItemPage/InventoryItemPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
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
