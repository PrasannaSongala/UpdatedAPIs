import express from 'express';
import {
  getAllProductDimensions,
  getProductDimensionById,
  createProductDimension,
  updateProductDimension,
  deleteProductDimension,
} from '../controllers/productdimensionsController';

const router = express.Router();

router.get('/', getAllProductDimensions);  // Get all product dimensions
router.get('/:id', getProductDimensionById);  // Get product dimension by ID
router.post('/', createProductDimension);  // Create a new product dimension
router.put('/:id', updateProductDimension);  // Update an existing product dimension
router.delete('/:id', deleteProductDimension);  // Delete a product dimension

export default router;
