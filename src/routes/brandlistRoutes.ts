// src/routes/brandlistRoutes.ts

import express from 'express';
import {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
} from '../controllers/brandlistController';

const router = express.Router();

router.get('/', getAllBrands);  // Get all brands
router.get('/:id', getBrandById);  // Get brand by ID
router.post('/', createBrand);  // Create a new brand
router.put('/:id', updateBrand);  // Update an existing brand
router.delete('/:id', deleteBrand);  // Delete a brand

export default router;
