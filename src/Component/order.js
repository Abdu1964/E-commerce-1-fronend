import React, { useEffect } from 'react';

const Order = () => {
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const orders = await response.json();
      console.log(orders);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await fetch(`/api/orders/${orderId}`, { method: 'DELETE' });
      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Products</th>
            <th>Total Amount</th>
            <th>Shipping Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render orders manually */}
          <tr>
            <td>Order ID</td>
            <td>User</td>
            <td>Products</td>
            <td>Total Amount</td>
            <td>Shipping Address</td>
            <td>
              <button onClick={() => deleteOrder('order_id')}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;