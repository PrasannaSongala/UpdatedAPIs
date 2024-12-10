// src/controllers/productlistController.ts
import { Request, Response } from 'express';
import ProductList from '../models/productlist';

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductList.findAll({
      where: { isDeleted: 0 }, // Optionally filter out deleted products
    });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// Get a product by ID
export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await ProductList.findByPk(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product' });
  }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  const { name, imageLink, description, primaryRate, cgstPercent, igstPercent, sgstPercent, conversionRatio, hsnCode, categoryId, brandId, inventoryId, locationId } = req.body;
  try {
    const newProduct = await ProductList.create({
      name,
      imageLink,
      description,
      primaryRate,
      cgstPercent,
      igstPercent,
      sgstPercent,
      conversionRatio,
      hsnCode,
      categoryId,
      brandId,
      inventoryId,
      locationId,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product' });
  }
};

// Update a product
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, imageLink, description, primaryRate, cgstPercent, igstPercent, sgstPercent, conversionRatio, hsnCode, categoryId, brandId, inventoryId, locationId } = req.body;
  try {
    const product = await ProductList.findByPk(id);
    if (product) {
      await product.update({
        name,
        imageLink,
        description,
        primaryRate,
        cgstPercent,
        igstPercent,
        sgstPercent,
        conversionRatio,
        hsnCode,
        categoryId,
        brandId,
        inventoryId,
        locationId,
      });
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Error updating product' });
  }
};

// Delete a product (soft delete by updating isDeleted to 1)
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await ProductList.findByPk(id);
    if (product) {
      await product.update({ isDeleted: 1 });
      res.status(200).json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product' });
  }
};
