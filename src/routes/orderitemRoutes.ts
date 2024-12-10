import express from 'express';
import {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from '../controllers/orderitemController';

const router = express.Router();

router.get('/', getAllOrderItems);  // Get all order items
router.get('/:id', getOrderItemById);  // Get order item by ID
router.post('/', createOrderItem);  // Create a new order item
router.put('/:id', updateOrderItem);  // Update an existing order item
router.delete('/:id', deleteOrderItem);  // Delete an order item

export default router;
