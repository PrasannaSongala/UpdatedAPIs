// src/controllers/razorpayorderController.ts

import { Request, Response } from 'express';
import RazorpayOrder from '../models/razorpayorder';

// Get all razorpay orders
export const getAllRazorpayOrders = async (req: Request, res: Response) => {
  try {
    const razorpayOrders = await RazorpayOrder.findAll();
    res.status(200).json(razorpayOrders);
  } catch (error) {
    console.error('Error fetching razorpay orders:', error);
    res.status(500).json({ message: 'Error fetching razorpay orders' });
  }
};

// Get razorpay order by ID
export const getRazorpayOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const razorpayOrder = await RazorpayOrder.findByPk(id);
    if (razorpayOrder) {
      res.status(200).json(razorpayOrder);
    } else {
      res.status(404).json({ message: 'Razorpay order not found' });
    }
  } catch (error) {
    console.error('Error fetching razorpay order:', error);
    res.status(500).json({ message: 'Error fetching razorpay order' });
  }
};

// Create a new razorpay order
export const createRazorpayOrder = async (req: Request, res: Response) => {
  const { amount, currency, razorpayOrderId, extraInfo, orderId } = req.body;
  try {
    const newRazorpayOrder = await RazorpayOrder.create({
      amount,
      currency,
      razorpayOrderId,
      extraInfo,
      orderId,
    });
    res.status(201).json(newRazorpayOrder);
  } catch (error) {
    console.error('Error creating razorpay order:', error);
    res.status(500).json({ message: 'Error creating razorpay order' });
  }
};

// Update an existing razorpay order
export const updateRazorpayOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { amount, currency, razorpayOrderId, extraInfo, orderId } = req.body;
  try {
    const razorpayOrder = await RazorpayOrder.findByPk(id);
    if (razorpayOrder) {
      await razorpayOrder.update({ amount, currency, razorpayOrderId, extraInfo, orderId });
      res.status(200).json(razorpayOrder);
    } else {
      res.status(404).json({ message: 'Razorpay order not found' });
    }
  } catch (error) {
    console.error('Error updating razorpay order:', error);
    res.status(500).json({ message: 'Error updating razorpay order' });
  }
};

// Delete a razorpay order
export const deleteRazorpayOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const razorpayOrder = await RazorpayOrder.findByPk(id);
    if (razorpayOrder) {
      await razorpayOrder.destroy();
      res.status(200).json({ message: 'Razorpay order deleted' });
    } else {
      res.status(404).json({ message: 'Razorpay order not found' });
    }
  } catch (error) {
    console.error('Error deleting razorpay order:', error);
    res.status(500).json({ message: 'Error deleting razorpay order' });
  }
};
