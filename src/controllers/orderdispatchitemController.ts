import { Request, Response } from 'express';
import OrderDispatchItem from '../models/orderdispatchitem';

// Get all order dispatch items
export const getAllOrderDispatchItems = async (req: Request, res: Response) => {
  try {
    const orderDispatchItems = await OrderDispatchItem.findAll();
    res.status(200).json(orderDispatchItems);
  } catch (error) {
    console.error('Error fetching order dispatch items:', error);
    res.status(500).json({ message: 'Error fetching order dispatch items' });
  }
};

// Get order dispatch item by ID
export const getOrderDispatchItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orderDispatchItem = await OrderDispatchItem.findByPk(id);
    if (orderDispatchItem) {
      res.status(200).json(orderDispatchItem);
    } else {
      res.status(404).json({ message: 'Order dispatch item not found' });
    }
  } catch (error) {
    console.error('Error fetching order dispatch item:', error);
    res.status(500).json({ message: 'Error fetching order dispatch item' });
  }
};

// Create a new order dispatch item
export const createOrderDispatchItem = async (req: Request, res: Response) => {
  const { quantity, quantityWasted, orderItemId, orderDispatchId } = req.body;
  try {
    const newOrderDispatchItem = await OrderDispatchItem.create({
      quantity,
      quantityWasted,
      orderItemId,
      orderDispatchId,
    });
    res.status(201).json(newOrderDispatchItem);
  } catch (error) {
    console.error('Error creating order dispatch item:', error);
    res.status(500).json({ message: 'Error creating order dispatch item' });
  }
};

// Update an existing order dispatch item
export const updateOrderDispatchItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity, quantityWasted, orderItemId, orderDispatchId } = req.body;
  try {
    const orderDispatchItem = await OrderDispatchItem.findByPk(id);
    if (orderDispatchItem) {
      await orderDispatchItem.update({
        quantity,
        quantityWasted,
        orderItemId,
        orderDispatchId,
      });
      res.status(200).json(orderDispatchItem);
    } else {
      res.status(404).json({ message: 'Order dispatch item not found' });
    }
  } catch (error) {
    console.error('Error updating order dispatch item:', error);
    res.status(500).json({ message: 'Error updating order dispatch item' });
  }
};

// Delete an order dispatch item
export const deleteOrderDispatchItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orderDispatchItem = await OrderDispatchItem.findByPk(id);
    if (orderDispatchItem) {
      await orderDispatchItem.destroy();
      res.status(200).json({ message: 'Order dispatch item deleted' });
    } else {
      res.status(404).json({ message: 'Order dispatch item not found' });
    }
  } catch (error) {
    console.error('Error deleting order dispatch item:', error);
    res.status(500).json({ message: 'Error deleting order dispatch item' });
  }
};
