// src/routes/orderrequestforcancellationlistRoutes.ts

import express from 'express';
import {
  getAllOrderRequestForCancellations,
  getOrderRequestForCancellationById,
  createOrderRequestForCancellation,
  updateOrderRequestForCancellation,
  deleteOrderRequestForCancellation,
} from '../controllers/orderrequestforcancellationlistController';

const router = express.Router();

router.get('/', getAllOrderRequestForCancellations);  // Get all cancellation requests
router.get('/:id', getOrderRequestForCancellationById);  // Get cancellation request by ID
router.post('/', createOrderRequestForCancellation);  // Create a new cancellation request
router.put('/:id', updateOrderRequestForCancellation);  // Update an existing cancellation request
router.delete('/:id', deleteOrderRequestForCancellation);  // Delete a cancellation request

export default router;
