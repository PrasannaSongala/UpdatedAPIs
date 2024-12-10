// src/routes/orderinvoicedetailRoutes.ts

import express from 'express';
import {
  getAllOrderInvoiceDetails,
  getOrderInvoiceDetailById,
  createOrderInvoiceDetail,
  updateOrderInvoiceDetail,
  deleteOrderInvoiceDetail,
} from '../controllers/orderinvoicedetailController';

const router = express.Router();

router.get('/', getAllOrderInvoiceDetails);  // Get all invoice details
router.get('/:id', getOrderInvoiceDetailById);  // Get invoice detail by ID
router.post('/', createOrderInvoiceDetail);  // Create a new invoice detail
router.put('/:id', updateOrderInvoiceDetail);  // Update an existing invoice detail
router.delete('/:id', deleteOrderInvoiceDetail);  // Delete an invoice detail

export default router;
