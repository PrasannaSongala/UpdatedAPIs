//src/controllers/orderlistController.ts

import { Request, Response } from 'express';
import OrderList from '../models/OrderList';

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await OrderList.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create order' });
  }
};

// Get all orders
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderList.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve orders' });
  }
};

// Get order by ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await OrderList.findByPk(req.params.id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve order' });
  }
};

// Update an order
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = await OrderList.findByPk(req.params.id);
    if (order) {
      await order.update(req.body);
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update order' });
  }
};

// Delete an order
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await OrderList.findByPk(req.params.id);
    if (order) {
      await order.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete order' });
  }
};
