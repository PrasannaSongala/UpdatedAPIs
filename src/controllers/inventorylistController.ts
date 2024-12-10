import { Request, Response } from 'express';
import InventoryList from '../models/inventorylist';
import BrandList from '../models/brandlist';
import CategoryTypes from '../models/categorytypes';
import Locations from '../models/location';

// Get all inventory items
export const getAllInventoryItems = async (req: Request, res: Response) => {
  try {
    const inventories = await InventoryList.findAll({
      include: [
        { model: BrandList, as: 'brand' },
        { model: CategoryTypes, as: 'category' },
        { model: Locations, as: 'location' },
      ],
    });
    res.status(200).json(inventories);
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    res.status(500).json({ message: 'Error fetching inventory items' });
  }
};

// Get an inventory item by ID
export const getInventoryItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const inventory = await InventoryList.findByPk(id, {
      include: [
        { model: BrandList, as: 'brand' },
        { model: CategoryTypes, as: 'category' },
        { model: Locations, as: 'location' },
      ],
    });
    if (inventory) {
      res.status(200).json(inventory);
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
  const { name, brandId, categoryId, locationId } = req.body;
  try {
    const newInventory = await InventoryList.create({
      name,
      brandId,
      categoryId,
      locationId,
    });
    res.status(201).json(newInventory);
  } catch (error) {
    console.error('Error creating inventory item:', error);
    res.status(500).json({ message: 'Error creating inventory item' });
  }
};

// Update an inventory item
export const updateInventoryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, brandId, categoryId, locationId } = req.body;
  try {
    const inventory = await InventoryList.findByPk(id);
    if (inventory) {
      await inventory.update({ name, brandId, categoryId, locationId });
      res.status(200).json(inventory);
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
    const inventory = await InventoryList.findByPk(id);
    if (inventory) {
      await inventory.destroy();
      res.status(200).json({ message: 'Inventory item deleted' });
    } else {
      res.status(404).json({ message: 'Inventory item not found' });
    }
  } catch (error) {
    console.error('Error deleting inventory item:', error);
    res.status(500).json({ message: 'Error deleting inventory item' });
  }
};
