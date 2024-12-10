// src/routes/productlistRoutes.ts
import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productlistController';

const router = express.Router();

router.get('/', getAllProducts);  // Get all products
router.get('/:id', getProductById);  // Get product by ID
router.post('/', createProduct);  // Create a new product
router.put('/:id', updateProduct);  // Update product by ID
router.delete('/:id', deleteProduct);  // Soft delete product by ID

export default router;
