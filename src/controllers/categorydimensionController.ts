// src/controllers/categorydimensionController.ts

import { Request, Response } from 'express';
import CategoryDimension from '../models/categorydimension';
import CategoryType from '../models/categorytypes';

// Get all category dimensions
export const getAllCategoryDimensions = async (req: Request, res: Response) => {
  try {
    const categoryDimensions = await CategoryDimension.findAll({
      include: CategoryType,  // Include associated category type data
    });
    res.status(200).json(categoryDimensions);
  } catch (error) {
    console.error('Error fetching category dimensions:', error);
    res.status(500).json({ message: 'Error fetching category dimensions' });
  }
};

// Get category dimension by ID
export const getCategoryDimensionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const categoryDimension = await CategoryDimension.findByPk(id, {
      include: CategoryType,  
    });
    if (categoryDimension) {
      res.status(200).json(categoryDimension);
    } else {
      res.status(404).json({ message: 'Category dimension not found' });
    }
  } catch (error) {
    console.error('Error fetching category dimension:', error);
    res.status(500).json({ message: 'Error fetching category dimension' });
  }
};

// Create a new category dimension
export const createCategoryDimension = async (req: Request, res: Response) => {
  const { dimensionId, categoryId } = req.body;
  try {
    const newCategoryDimension = await CategoryDimension.create({
      dimensionId,
      categoryId,
    });
    res.status(201).json(newCategoryDimension);
  } catch (error) {
    console.error('Error creating category dimension:', error);
    res.status(500).json({ message: 'Error creating category dimension' });
  }
};

// Update an existing category dimension
export const updateCategoryDimension = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { dimensionId, categoryId } = req.body;
  try {
    const categoryDimension = await CategoryDimension.findByPk(id);
    if (categoryDimension) {
      await categoryDimension.update({ dimensionId, categoryId });
      res.status(200).json(categoryDimension);
    } else {
      res.status(404).json({ message: 'Category dimension not found' });
    }
  } catch (error) {
    console.error('Error updating category dimension:', error);
    res.status(500).json({ message: 'Error updating category dimension' });
  }
};

// Delete a category dimension
export const deleteCategoryDimension = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const categoryDimension = await CategoryDimension.findByPk(id);
    if (categoryDimension) {
      await categoryDimension.destroy();
      res.status(200).json({ message: 'Category dimension deleted' });
    } else {
      res.status(404).json({ message: 'Category dimension not found' });
    }
  } catch (error) {
    console.error('Error deleting category dimension:', error);
    res.status(500).json({ message: 'Error deleting category dimension' });
  }
};
