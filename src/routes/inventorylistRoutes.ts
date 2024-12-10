import express from 'express';
import {
  getAllInventoryItems,
  getInventoryItemById,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
} from '../controllers/inventorylistController';

const router = express.Router();

router.get('/', getAllInventoryItems); // Get all inventory items
router.get('/:id', getInventoryItemById); // Get inventory item by ID
router.post('/', createInventoryItem); // Create a new inventory item
router.put('/:id', updateInventoryItem); // Update an inventory item
router.delete('/:id', deleteInventoryItem); // Delete an inventory item

export default router;
