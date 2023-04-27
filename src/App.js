import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewInventoryItem from "./components/NewInventoryItem/NewInventoryItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="App__body">
          <div className="page-container">
            <Routes>
              <Route path="/" element={<WarehousesPage />} />
              <Route path="/:id" element={<WarehouseDetailsPage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/inventory/:id" element={<InventoryDetailsPage mode="view" />} />
              <Route path="/inventory/new" element={<NewInventoryItem />} />
              <Route path="/inventory/:id/edit" element={<InventoryDetailsPage mode="edit" />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
