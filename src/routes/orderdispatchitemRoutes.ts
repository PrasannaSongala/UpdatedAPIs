import express from 'express';
import {
  getAllOrderDispatchItems,
  getOrderDispatchItemById,
  createOrderDispatchItem,
  updateOrderDispatchItem,
  deleteOrderDispatchItem,
} from '../controllers/orderdispatchitemController';

const router = express.Router();

router.get('/', getAllOrderDispatchItems);  // Get all order dispatch items
router.get('/:id', getOrderDispatchItemById);  // Get order dispatch item by ID
router.post('/', createOrderDispatchItem);  // Create a new order dispatch item
router.put('/:id', updateOrderDispatchItem);  // Update an existing order dispatch item
router.delete('/:id', deleteOrderDispatchItem);  // Delete an order dispatch item

export default router;
