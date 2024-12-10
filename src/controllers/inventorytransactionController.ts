import { Request, Response } from 'express';
import InventoryTransaction from '../models/inventorytransaction';

// Get all inventory transactions
export const getAllInventoryTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await InventoryTransaction.findAll({
      include: ['seller', 'inventory'],
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inventory transactions' });
  }
};

// Get inventory transaction by ID
export const getInventoryTransactionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const transaction = await InventoryTransaction.findByPk(id, {
      include: ['seller', 'inventory'],
    });
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inventory transaction' });
  }
};

// Create a new inventory transaction
export const createInventoryTransaction = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const transaction = await InventoryTransaction.create(data);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create inventory transaction' });
  }
};

// Update an inventory transaction
export const updateInventoryTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const transaction = await InventoryTransaction.findByPk(id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    await transaction.update(data);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update inventory transaction' });
  }
};

// Delete an inventory transaction
export const deleteInventoryTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const transaction = await InventoryTransaction.findByPk(id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    await transaction.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete inventory transaction' });
  }
};
