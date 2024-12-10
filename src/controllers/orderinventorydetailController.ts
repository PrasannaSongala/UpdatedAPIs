// src/controllers/orderinventorydetailController.ts
import { Request, Response } from 'express';
import OrderInventoryDetail from '../models/orderinventorydetail';

// Get all order inventory details
export const getAllOrderInventoryDetails = async (req: Request, res: Response) => {
  try {
    const inventoryDetails = await OrderInventoryDetail.findAll();
    res.status(200).json(inventoryDetails);
  } catch (error) {
    console.error('Error fetching order inventory details:', error);
    res.status(500).json({ message: 'Error fetching order inventory details' });
  }
};

// Get order inventory detail by ID
export const getOrderInventoryDetailById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const inventoryDetail = await OrderInventoryDetail.findByPk(id);
    if (inventoryDetail) {
      res.status(200).json(inventoryDetail);
    } else {
      res.status(404).json({ message: 'Order inventory detail not found' });
    }
  } catch (error) {
    console.error('Error fetching order inventory detail:', error);
    res.status(500).json({ message: 'Error fetching order inventory detail' });
  }
};

// Create a new order inventory detail
export const createOrderInventoryDetail = async (req: Request, res: Response) => {
  const { inventoryUsed, inventoryWasted, orderId, inventoryId } = req.body;
  try {
    const newInventoryDetail = await OrderInventoryDetail.create({
      inventoryUsed,
      inventoryWasted,
      orderId,
      inventoryId,
    });
    res.status(201).json(newInventoryDetail);
  } catch (error) {
    console.error('Error creating order inventory detail:', error);
    res.status(500).json({ message: 'Error creating order inventory detail' });
  }
};

// Update an existing order inventory detail
export const updateOrderInventoryDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { inventoryUsed, inventoryWasted, orderId, inventoryId } = req.body;
  try {
    const inventoryDetail = await OrderInventoryDetail.findByPk(id);
    if (inventoryDetail) {
      await inventoryDetail.update({ inventoryUsed, inventoryWasted, orderId, inventoryId });
      res.status(200).json(inventoryDetail);
    } else {
      res.status(404).json({ message: 'Order inventory detail not found' });
    }
  } catch (error) {
    console.error('Error updating order inventory detail:', error);
    res.status(500).json({ message: 'Error updating order inventory detail' });
  }
};

// Delete an order inventory detail
export const deleteOrderInventoryDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const inventoryDetail = await OrderInventoryDetail.findByPk(id);
    if (inventoryDetail) {
      await inventoryDetail.destroy();
      res.status(200).json({ message: 'Order inventory detail deleted' });
    } else {
      res.status(404).json({ message: 'Order inventory detail not found' });
    }
  } catch (error) {
    console.error('Error deleting order inventory detail:', error);
    res.status(500).json({ message: 'Error deleting order inventory detail' });
  }
};
