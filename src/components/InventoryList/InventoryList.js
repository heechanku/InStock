import "./InventoryList.scss";
import InventoryRow from "../InventoryRow/InventoryRow";
import sortIcon from "../../assets/Icons/sort-24px.svg";

//Test Data
const inventoryData = [
  {
    id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
    inventory_id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    item_name: "Television",
    description:
      'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
    category: "Electronics",
    status: "In Stock",
    quantity: 500,
  },
  {
    id: "83433026-ca32-4c6d-bd86-a39ee8b7303e",
    inventory_id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    item_name: "Gym Bag",
    description:
      "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
    category: "Gear",
    status: "Out of Stock",
    quantity: 0,
  },
];

function InventoryList() {
  const inventories = inventoryData;

  const handleDelete = (id) => {};

  const handleEdit = (id) => {};

  return (
    <div className="inventory-list">
      <div className="inventory-list__header-row">
        <div className="inventory-list__header-item inventory-list__header-item--name">
          INVENTORY ITEM{" "}
          <img className="inventory-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="inventory-list__header-item inventory-list__header-item--category">
          CATEGORY{" "}
          <img className="inventory-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="inventory-list__header-item inventory-list__header-item--status">
          STATUS{" "}
          <img className="inventory-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="inventory-list__header-item inventory-list__header-item--quantity">
          QUANTITY{" "}
          <img className="inventory-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="inventory-list__header-item">ACTIONS</div>
      </div>
      <div className="inventory-list__body">
        <div className="inventory-list__row">
          {inventories.map((inventory) => (
            <InventoryRow
              key={inventory.id}
              id={inventory.id}
              name={inventory.item_name}
              category={inventory.category}
              status={inventory.status}
              quantity={inventory.quantity}
              onDelete={() => handleDelete(inventory.id)}
              onEdit={() => handleEdit(inventory.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default InventoryList;