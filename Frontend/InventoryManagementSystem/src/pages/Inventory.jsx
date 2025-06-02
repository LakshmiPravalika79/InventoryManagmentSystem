import React, { useState } from 'react';
import '../css/Inventory.css';

const initialInventory = [
  { id: 1, name: 'iPhone 14 Pro', stock: 15, price: 95000 },
  { id: 2, name: 'Dell XPS 13', stock: 10, price: 120000 },
  { id: 3, name: 'Samsung TV 55"', stock: 5, price: 60000 },
  { id: 4, name: 'Sony Headphones', stock: 25, price: 15000 },
];

const Inventory = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState({ name: '', stock: '', price: '' });

  const handleAddItem = () => {
    if (!newItem.name || !newItem.stock || !newItem.price) return;
    const newEntry = {
      id: Date.now(),
      name: newItem.name,
      stock: parseInt(newItem.stock),
      price: parseFloat(newItem.price),
    };
    setInventory([...inventory, newEntry]);
    setNewItem({ name: '', stock: '', price: '' });
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="inventory-page">
      <h1>Inventory Management</h1>

      <div className="inventory-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="add-form">
        <input
          type="text"
          placeholder="Product name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={newItem.stock}
          onChange={(e) => setNewItem({ ...newItem, stock: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button onClick={handleAddItem}>Add Product</button>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Price (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.price.toLocaleString()}</td>
              <td>
                <button onClick={() => handleDelete(item.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
