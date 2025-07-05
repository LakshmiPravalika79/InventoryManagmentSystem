import React, { useState } from 'react';
import '../css/Orders.css';

const initialOrders = [
  { id: 1, customer: 'Ravi Kumar', product: 'iPhone 14', quantity: 1, total: 85000, status: 'Shipped' },
  { id: 2, customer: 'Anjali Sharma', product: 'Sony Headphones', quantity: 2, total: 18000, status: 'Delivered' },
  { id: 3, customer: 'Mohit Jain', product: 'Office Chair', quantity: 1, total: 6500, status: 'Pending' },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState('');
  const [newOrder, setNewOrder] = useState({
    customer: '', product: '', quantity: '', total: '', status: 'Pending'
  });

  const handleAddOrder = () => {
    if (!newOrder.customer || !newOrder.product || !newOrder.quantity || !newOrder.total) return;
    const entry = {
      id: Date.now(),
      ...newOrder,
      quantity: parseInt(newOrder.quantity),
      total: parseFloat(newOrder.total)
    };
    setOrders([...orders, entry]);
    setNewOrder({ customer: '', product: '', quantity: '', total: '', status: 'Pending' });
  };

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(search.toLowerCase()) ||
    order.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="orders-page">
      <h1>Order Management</h1>

      <div className="orders-controls">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="add-form">
        <input
          type="text"
          placeholder="Customer Name"
          value={newOrder.customer}
          onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product"
          value={newOrder.product}
          onChange={(e) => setNewOrder({ ...newOrder, product: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newOrder.quantity}
          onChange={(e) => setNewOrder({ ...newOrder, quantity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Total Amount"
          value={newOrder.total}
          onChange={(e) => setNewOrder({ ...newOrder, total: e.target.value })}
        />
        <select
          value={newOrder.status}
          onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
        >
          <option>Pending</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>
        <button onClick={handleAddOrder}>Add Order</button>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total (₹)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>₹{order.total.toLocaleString()}</td>
              <td>{order.status}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
