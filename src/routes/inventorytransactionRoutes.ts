import express, { Request, Response } from 'express';
import {
  getAllInventoryTransactions,
  getInventoryTransactionById,
  createInventoryTransaction,
  updateInventoryTransaction,
  deleteInventoryTransaction,
} from '../controllers/inventorytransactionController';

const router = express.Router();

// Get all inventory transactions
router.get('/', async (req: Request, res: Response) => {
  try {
    await getAllInventoryTransactions(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
});

// Get inventory transaction by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    await getInventoryTransactionById(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
});

// Create a new inventory transaction
router.post('/', async (req: Request, res: Response) => {
  try {
    await createInventoryTransaction(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
});

// Update an existing inventory transaction
router.put('/:id', async (req: Request, res: Response) => {
  try {
    await updateInventoryTransaction(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
});

// Delete an inventory transaction by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await deleteInventoryTransaction(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
});

export default router;
