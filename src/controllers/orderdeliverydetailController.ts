// src/controllers/orderdeliverydetailController.ts

import { Request, Response, NextFunction } from 'express';
import OrderDeliveryDetail from '../models/orderdeliverydetail';

// Create a new order delivery detail
export const createOrderDeliveryDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { deliveredTo, deliveredBy, mobileNumber, comments, orderDispatchId } = req.body;
   if (!deliveredTo || !deliveredBy || !mobileNumber || !orderDispatchId) {
      res.status(400).json({ message: 'Required fields are missing' });
      return;
    }

    // Create the order delivery detail
    const orderDeliveryDetail = await OrderDeliveryDetail.create(req.body);
    res.status(201).json(orderDeliveryDetail);
  } catch (error) {
    console.error(error);
    next(error); 
  }
};

// Get all order delivery details
export const getOrderDeliveryDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orderDeliveryDetails = await OrderDeliveryDetail.findAll();
    res.status(200).json(orderDeliveryDetails);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Get order delivery detail by ID
export const getOrderDeliveryDetailById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orderDeliveryDetail = await OrderDeliveryDetail.findByPk(req.params.id);
    if (orderDeliveryDetail) {
      res.status(200).json(orderDeliveryDetail);
    } else {
      res.status(404).json({ message: 'Order delivery detail not found' });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Update an order delivery detail
export const updateOrderDeliveryDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orderDeliveryDetail = await OrderDeliveryDetail.findByPk(req.params.id);
    if (orderDeliveryDetail) {
      const { deliveredTo, deliveredBy, mobileNumber } = req.body;

      // Validate incoming update data
      if (!deliveredTo && !deliveredBy && !mobileNumber) {
        res.status(400).json({ message: 'Invalid update data' });
        return;
      }

      await orderDeliveryDetail.update(req.body);
      res.status(200).json(orderDeliveryDetail);
    } else {
      res.status(404).json({ message: 'Order delivery detail not found' });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Delete an order delivery detail
export const deleteOrderDeliveryDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orderDeliveryDetail = await OrderDeliveryDetail.findByPk(req.params.id);
    if (orderDeliveryDetail) {
      await orderDeliveryDetail.destroy();
      res.status(204).send(); 
    } else {
      res.status(404).json({ message: 'Order delivery detail not found' });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
