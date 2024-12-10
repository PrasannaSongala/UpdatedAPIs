// src/routes/paymenttransactionsRoutes.ts

import express from 'express';
import {
  getAllPaymentTransactions,
  getPaymentTransactionById,
  createPaymentTransaction,
  updatePaymentTransaction,
  deletePaymentTransaction,
} from '../controllers/paymentTransactionsController';

const router = express.Router();

router.get('/', getAllPaymentTransactions);  // Get all payment transactions
router.get('/:id', getPaymentTransactionById);  // Get payment transaction by ID
router.post('/', createPaymentTransaction);  // Create a new payment transaction
router.put('/:id', updatePaymentTransaction);  // Update an existing payment transaction
router.delete('/:id', deletePaymentTransaction);  // Delete a payment transaction

export default router;
