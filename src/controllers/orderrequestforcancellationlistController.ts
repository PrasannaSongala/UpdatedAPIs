// src/controllers/orderrequestforcancellationlistController.ts

import { Request, Response } from 'express';
import OrderRequestForCancellationList from '../models/orderrequestforcancellationlist';

// Get all order request cancellation details
export const getAllOrderRequestForCancellations = async (req: Request, res: Response) => {
  try {
    const cancellationRequests = await OrderRequestForCancellationList.findAll();
    res.status(200).json(cancellationRequests);
  } catch (error) {
    console.error('Error fetching order cancellation requests:', error);
    res.status(500).json({ message: 'Error fetching order cancellation requests' });
  }
};

// Get order request cancellation by ID
export const getOrderRequestForCancellationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cancellationRequest = await OrderRequestForCancellationList.findByPk(id);
    if (cancellationRequest) {
      res.status(200).json(cancellationRequest);
    } else {
      res.status(404).json({ message: 'Order cancellation request not found' });
    }
  } catch (error) {
    console.error('Error fetching order cancellation request:', error);
    res.status(500).json({ message: 'Error fetching order cancellation request' });
  }
};

// Create a new order request cancellation
export const createOrderRequestForCancellation = async (req: Request, res: Response) => {
  const { reason, active, rejected, orderId } = req.body;
  try {
    const newCancellationRequest = await OrderRequestForCancellationList.create({
      reason,
      active,
      rejected,
      orderId,
    });
    res.status(201).json(newCancellationRequest);
  } catch (error) {
    console.error('Error creating order cancellation request:', error);
    res.status(500).json({ message: 'Error creating order cancellation request' });
  }
};

// Update an existing order request cancellation
export const updateOrderRequestForCancellation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { reason, active, rejected, orderId } = req.body;
  try {
    const cancellationRequest = await OrderRequestForCancellationList.findByPk(id);
    if (cancellationRequest) {
      await cancellationRequest.update({ reason, active, rejected, orderId });
      res.status(200).json(cancellationRequest);
    } else {
      res.status(404).json({ message: 'Order cancellation request not found' });
    }
  } catch (error) {
    console.error('Error updating order cancellation request:', error);
    res.status(500).json({ message: 'Error updating order cancellation request' });
  }
};

// Delete an order request cancellation
export const deleteOrderRequestForCancellation = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cancellationRequest = await OrderRequestForCancellationList.findByPk(id);
    if (cancellationRequest) {
      await cancellationRequest.destroy();
      res.status(200).json({ message: 'Order cancellation request deleted' });
    } else {
      res.status(404).json({ message: 'Order cancellation request not found' });
    }
  } catch (error) {
    console.error('Error deleting order cancellation request:', error);
    res.status(500).json({ message: 'Error deleting order cancellation request' });
  }
};
