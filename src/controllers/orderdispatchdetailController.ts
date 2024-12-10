//src/controllers/orderdispatchdetailController.ts

import { Request, Response, NextFunction } from 'express';
import OrderDispatchDetail from '../models/orderdispatchdetail';

// Create a new order dispatch detail
export const createOrderDispatchDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { deliveryAgentMobileNumber, vehicleName, vehicleNumber } = req.body;

    if (!deliveryAgentMobileNumber || !vehicleName || !vehicleNumber) {
      res.status(400).json({ message: 'Required fields are missing' });
      return;
    }

    // Create the order dispatch detail
    const orderDispatchDetail = await OrderDispatchDetail.create(req.body);
    res.status(201).json(orderDispatchDetail);
  } catch (error) {
    console.error(error);
    next(error); 
  }
};

// Get all order dispatch details
export const getOrderDispatchDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orderDispatchDetails = await OrderDispatchDetail.findAll();
    res.status(200).json(orderDispatchDetails);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Get order dispatch detail by ID
export const getOrderDispatchDetailById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orderDispatchDetail = await OrderDispatchDetail.findByPk(req.params.id);
    if (orderDispatchDetail) {
      res.status(200).json(orderDispatchDetail);
    } else {
      res.status(404).json({ message: 'Order dispatch detail not found' });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Update an order dispatch detail
export const updateOrderDispatchDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orderDispatchDetail = await OrderDispatchDetail.findByPk(req.params.id);
    if (orderDispatchDetail) {
      const { deliveryAgentMobileNumber, vehicleName, vehicleNumber } = req.body;

      if (!deliveryAgentMobileNumber && !vehicleName && !vehicleNumber) {
        res.status(400).json({ message: 'Invalid update data' });
        return;
      }

      await orderDispatchDetail.update(req.body);
      res.status(200).json(orderDispatchDetail);
    } else {
      res.status(404).json({ message: 'Order dispatch detail not found' });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Delete an order dispatch detail
export const deleteOrderDispatchDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orderDispatchDetail = await OrderDispatchDetail.findByPk(req.params.id);
    if (orderDispatchDetail) {
      await orderDispatchDetail.destroy();
      res.status(204).send(); 
    } else {
      res.status(404).json({ message: 'Order dispatch detail not found' });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
