// src/routes/categorydimensionRoutes.ts

import express from 'express';
import {
  getAllCategoryDimensions,
  getCategoryDimensionById,
  createCategoryDimension,
  updateCategoryDimension,
  deleteCategoryDimension,
} from '../controllers/categorydimensionController';

const router = express.Router();

router.get('/', getAllCategoryDimensions);  // Get all category dimensions
router.get('/:id', getCategoryDimensionById);  // Get category dimension by ID
router.post('/', createCategoryDimension);  // Create a new category dimension
router.put('/:id', updateCategoryDimension);  // Update an existing category dimension
router.delete('/:id', deleteCategoryDimension);  // Delete a category dimension

export default router;
