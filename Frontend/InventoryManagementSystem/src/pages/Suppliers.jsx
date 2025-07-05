import React, { useState } from 'react';
import '../css/Suppliers.css';

const initialSuppliers = [
  { id: 1, name: 'ElectroGoods Pvt Ltd', contact: 'John Doe', phone: '9876543210', email: 'john@electrogoods.com' },
  { id: 2, name: 'TechWhiz Supplies', contact: 'Priya Singh', phone: '9123456789', email: 'priya@techwhiz.com' },
  { id: 3, name: 'GadgetPoint Co.', contact: 'Rahul Sharma', phone: '9988776655', email: 'rahul@gadgetpoint.com' },
];

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [search, setSearch] = useState('');
  const [newSupplier, setNewSupplier] = useState({ name: '', contact: '', phone: '', email: '' });

  const handleAddSupplier = () => {
    if (!newSupplier.name || !newSupplier.contact || !newSupplier.phone || !newSupplier.email) return;
    const newEntry = {
      id: Date.now(),
      ...newSupplier,
    };
    setSuppliers([...suppliers, newEntry]);
    setNewSupplier({ name: '', contact: '', phone: '', email: '' });
  };

  const handleDelete = (id) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
  };

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="suppliers-page">
      <h1>Supplier Management</h1>

      <div className="supplier-controls">
        <input
          type="text"
          placeholder="Search suppliers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="add-form">
        <input
          type="text"
          placeholder="Company Name"
          value={newSupplier.name}
          onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Person"
          value={newSupplier.contact}
          onChange={(e) => setNewSupplier({ ...newSupplier, contact: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={newSupplier.phone}
          onChange={(e) => setNewSupplier({ ...newSupplier, phone: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newSupplier.email}
          onChange={(e) => setNewSupplier({ ...newSupplier, email: e.target.value })}
        />
        <button onClick={handleAddSupplier}>Add Supplier</button>
      </div>

      <table className="suppliers-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact Person</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSuppliers.map(supplier => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.email}</td>
              <td>
                <button onClick={() => handleDelete(supplier.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
