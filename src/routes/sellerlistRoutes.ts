// src/routes/sellerlistRoutes.ts

import express from 'express';
import {
  getAllSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
} from '../controllers/sellerlistController';

const router = express.Router();

router.get('/', getAllSellers);  // Get all sellers
router.get('/:id', getSellerById);  // Get seller by ID
router.post('/', createSeller);  // Create a new seller
router.put('/:id', updateSeller);  // Update an existing seller
router.delete('/:id', deleteSeller);  // Delete a seller

export default router;
