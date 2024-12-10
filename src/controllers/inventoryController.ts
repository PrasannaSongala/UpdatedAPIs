// src/controllers/inventoryController.ts

import { Request, Response } from 'express';
import Inventory from '../models/inventory';

// Get all inventory items
export const getAllInventoryItems = async (req: Request, res: Response) => {
  try {
    const inventoryItems = await Inventory.findAll();
    res.status(200).json(inventoryItems);
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    res.status(500).json({ message: 'Error fetching inventory items' });
  }
};

// Get inventory item by ID
export const getInventoryItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const inventoryItem = await Inventory.findByPk(id);
    if (inventoryItem) {
      res.status(200).json(inventoryItem);
    } else {
      res.status(404).json({ message: 'Inventory item not found' });
    }
  } catch (error) {
    console.error('Error fetching inventory item:', error);
    res.status(500).json({ message: 'Error fetching inventory item' });
  }
};

// Create a new inventory item
export const createInventoryItem = async (req: Request, res: Response) => {
  const { name, quantity, price } = req.body;
  try {
    const newInventoryItem = await Inventory.create({
      name,
      quantity,
      price,
    });
    res.status(201).json(newInventoryItem);
  } catch (error) {
    console.error('Error creating inventory item:', error);
    res.status(500).json({ message: 'Error creating inventory item' });
  }
};

// Update an existing inventory item
export const updateInventoryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, quantity, price } = req.body;
  try {
    const inventoryItem = await Inventory.findByPk(id);
    if (inventoryItem) {
      await inventoryItem.update({ name, quantity, price });
      res.status(200).json(inventoryItem);
    } else {
      res.status(404).json({ message: 'Inventory item not found' });
    }
  } catch (error) {
    console.error('Error updating inventory item:', error);
    res.status(500).json({ message: 'Error updating inventory item' });
  }
};

// Delete an inventory item
export const deleteInventoryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const inventoryItem = await Inventory.findByPk(id);
    if (inventoryItem) {
      await inventoryItem.destroy();
      res.status(200).json({ message: 'Inventory item deleted' });
    } else {
      res.status(404).json({ message: 'Inventory item not found' });
    }
  } catch (error) {
    console.error('Error deleting inventory item:', error);
    res.status(500).json({ message: 'Error deleting inventory item' });
  }
};
