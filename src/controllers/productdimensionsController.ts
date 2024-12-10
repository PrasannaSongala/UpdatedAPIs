import { Request, Response } from 'express';
import ProductDimensions from '../models/productdimensions';

// Get all product dimensions
export const getAllProductDimensions = async (req: Request, res: Response) => {
  try {
    const productDimensions = await ProductDimensions.findAll();
    res.status(200).json(productDimensions);
  } catch (error) {
    console.error('Error fetching product dimensions:', error);
    res.status(500).json({ message: 'Error fetching product dimensions' });
  }
};

// Get product dimension by ID
export const getProductDimensionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const productDimension = await ProductDimensions.findByPk(id);
    if (productDimension) {
      res.status(200).json(productDimension);
    } else {
      res.status(404).json({ message: 'Product dimension not found' });
    }
  } catch (error) {
    console.error('Error fetching product dimension:', error);
    res.status(500).json({ message: 'Error fetching product dimension' });
  }
};

// Create a new product dimension
export const createProductDimension = async (req: Request, res: Response) => {
  const { value, productDimensionId, productId } = req.body;
  try {
    const newProductDimension = await ProductDimensions.create({
      value,
      productDimensionId,
      productId,
    });
    res.status(201).json(newProductDimension);
  } catch (error) {
    console.error('Error creating product dimension:', error);
    res.status(500).json({ message: 'Error creating product dimension' });
  }
};

// Update an existing product dimension
export const updateProductDimension = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { value, productDimensionId, productId } = req.body;
  try {
    const productDimension = await ProductDimensions.findByPk(id);
    if (productDimension) {
      await productDimension.update({ value, productDimensionId, productId });
      res.status(200).json(productDimension);
    } else {
      res.status(404).json({ message: 'Product dimension not found' });
    }
  } catch (error) {
    console.error('Error updating product dimension:', error);
    res.status(500).json({ message: 'Error updating product dimension' });
  }
};

// Delete a product dimension
export const deleteProductDimension = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const productDimension = await ProductDimensions.findByPk(id);
    if (productDimension) {
      await productDimension.destroy();
      res.status(200).json({ message: 'Product dimension deleted' });
    } else {
      res.status(404).json({ message: 'Product dimension not found' });
    }
  } catch (error) {
    console.error('Error deleting product dimension:', error);
    res.status(500).json({ message: 'Error deleting product dimension' });
  }
};
