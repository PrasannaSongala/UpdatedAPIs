// src/routes/categorytypesRoutes.ts

import express from 'express';
import {
  getAllCategoryTypes,
  getCategoryTypeById,
  createCategoryType,
  updateCategoryType,
  deleteCategoryType,
} from '../controllers/categorytypesController';

const router = express.Router();

router.get('/', getAllCategoryTypes);  // Get all category types
router.get('/:id', getCategoryTypeById);  // Get category type by ID
router.post('/', createCategoryType);  // Create a new category type
router.put('/:id', updateCategoryType);  // Update an existing category type
router.delete('/:id', deleteCategoryType);  // Delete a category type

export default router;
