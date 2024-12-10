import { Request, Response } from 'express';
import OrderItem from '../models/orderitem';

// Get all order items
export const getAllOrderItems = async (req: Request, res: Response) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.status(200).json(orderItems);
  } catch (error) {
    console.error('Error fetching order items:', error);
    res.status(500).json({ message: 'Error fetching order items' });
  }
};

// Get order item by ID
export const getOrderItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orderItem = await OrderItem.findByPk(id);
    if (orderItem) {
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ message: 'Order item not found' });
    }
  } catch (error) {
    console.error('Error fetching order item:', error);
    res.status(500).json({ message: 'Error fetching order item' });
  }
};

// Create a new order item
export const createOrderItem = async (req: Request, res: Response) => {
  const { quantity, quantityUnit, primaryRate, cgstPercent, igstPercent, sgstPercent, conversionRatio, productId, orderId } = req.body;
  try {
    const newOrderItem = await OrderItem.create({
      quantity,
      quantityUnit,
      primaryRate,
      cgstPercent,
      igstPercent,
      sgstPercent,
      conversionRatio,
      productId,
      orderId,
    });
    res.status(201).json(newOrderItem);
  } catch (error) {
    console.error('Error creating order item:', error);
    res.status(500).json({ message: 'Error creating order item' });
  }
};

// Update an existing order item
export const updateOrderItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity, quantityUnit, primaryRate, cgstPercent, igstPercent, sgstPercent, conversionRatio, productId, orderId } = req.body;
  try {
    const orderItem = await OrderItem.findByPk(id);
    if (orderItem) {
      await orderItem.update({
        quantity,
        quantityUnit,
        primaryRate,
        cgstPercent,
        igstPercent,
        sgstPercent,
        conversionRatio,
        productId,
        orderId,
      });
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ message: 'Order item not found' });
    }
  } catch (error) {
    console.error('Error updating order item:', error);
    res.status(500).json({ message: 'Error updating order item' });
  }
};

// Delete an order item
export const deleteOrderItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orderItem = await OrderItem.findByPk(id);
    if (orderItem) {
      await orderItem.destroy();
      res.status(200).json({ message: 'Order item deleted' });
    } else {
      res.status(404).json({ message: 'Order item not found' });
    }
  } catch (error) {
    console.error('Error deleting order item:', error);
    res.status(500).json({ message: 'Error deleting order item' });
  }
};
