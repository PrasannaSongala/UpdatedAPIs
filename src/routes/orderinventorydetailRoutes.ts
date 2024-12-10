// src/routes/orderinventorydetailRoutes.ts
import express from 'express';
import {
  getAllOrderInventoryDetails,
  getOrderInventoryDetailById,
  createOrderInventoryDetail,
  updateOrderInventoryDetail,
  deleteOrderInventoryDetail,
} from '../controllers/orderInventoryDetailController';

const router = express.Router();

router.get('/', getAllOrderInventoryDetails); // Get all inventory details
router.get('/:id', getOrderInventoryDetailById); // Get inventory detail by ID
router.post('/', createOrderInventoryDetail); // Create a new inventory detail
router.put('/:id', updateOrderInventoryDetail); // Update an existing inventory detail
router.delete('/:id', deleteOrderInventoryDetail); // Delete an inventory detail

export default router;
