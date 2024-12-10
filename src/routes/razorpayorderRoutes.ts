// src/routes/razorpayorderRoutes.ts

import express from 'express';
import {
  getAllRazorpayOrders,
  getRazorpayOrderById,
  createRazorpayOrder,
  updateRazorpayOrder,
  deleteRazorpayOrder,
} from '../controllers/razorpayorderController';

const router = express.Router();

router.get('/', getAllRazorpayOrders);  // Get all razorpay orders
router.get('/:id', getRazorpayOrderById);  // Get razorpay order by ID
router.post('/', createRazorpayOrder);  // Create a new razorpay order
router.put('/:id', updateRazorpayOrder);  // Update an existing razorpay order
router.delete('/:id', deleteRazorpayOrder);  // Delete a razorpay order

export default router;
