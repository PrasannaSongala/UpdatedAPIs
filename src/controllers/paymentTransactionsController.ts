// src/controllers/paymenttransactionsController.ts

import { Request, Response } from 'express';
import PaymentTransactions from '../models/paymentTransactions';

// Get all payment transactions
export const getAllPaymentTransactions = async (req: Request, res: Response) => {
  try {
    const paymentTransactions = await PaymentTransactions.findAll();
    res.status(200).json(paymentTransactions);
  } catch (error) {
    console.error('Error fetching payment transactions:', error);
    res.status(500).json({ message: 'Error fetching payment transactions' });
  }
};

// Get payment transaction by ID
export const getPaymentTransactionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const paymentTransaction = await PaymentTransactions.findByPk(id);
    if (paymentTransaction) {
      res.status(200).json(paymentTransaction);
    } else {
      res.status(404).json({ message: 'Payment transaction not found' });
    }
  } catch (error) {
    console.error('Error fetching payment transaction:', error);
    res.status(500).json({ message: 'Error fetching payment transaction' });
  }
};

// Create a new payment transaction
export const createPaymentTransaction = async (req: Request, res: Response) => {
  const { amount, paymentDate, updatedBy, paymentMode, transactionCredit, transactionNumber, orderId } = req.body;
  try {
    const newPaymentTransaction = await PaymentTransactions.create({
      amount,
      paymentDate,
      updatedBy,
      paymentMode,
      transactionCredit,
      transactionNumber,
      orderId,
    });
    res.status(201).json(newPaymentTransaction);
  } catch (error) {
    console.error('Error creating payment transaction:', error);
    res.status(500).json({ message: 'Error creating payment transaction' });
  }
};

// Update an existing payment transaction
export const updatePaymentTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { amount, paymentDate, updatedBy, paymentMode, transactionCredit, transactionNumber, orderId } = req.body;
  try {
    const paymentTransaction = await PaymentTransactions.findByPk(id);
    if (paymentTransaction) {
      await paymentTransaction.update({ amount, paymentDate, updatedBy, paymentMode, transactionCredit, transactionNumber, orderId });
      res.status(200).json(paymentTransaction);
    } else {
      res.status(404).json({ message: 'Payment transaction not found' });
    }
  } catch (error) {
    console.error('Error updating payment transaction:', error);
    res.status(500).json({ message: 'Error updating payment transaction' });
  }
};

// Delete a payment transaction
export const deletePaymentTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const paymentTransaction = await PaymentTransactions.findByPk(id);
    if (paymentTransaction) {
      await paymentTransaction.destroy();
      res.status(200).json({ message: 'Payment transaction deleted' });
    } else {
      res.status(404).json({ message: 'Payment transaction not found' });
    }
  } catch (error) {
    console.error('Error deleting payment transaction:', error);
    res.status(500).json({ message: 'Error deleting payment transaction' });
  }
};
