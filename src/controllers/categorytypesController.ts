// src/controllers/categorytypesController.ts

import { Request, Response } from 'express';
import CategoryType from '../models/categorytypes';

// Get all category types
export const getAllCategoryTypes = async (req: Request, res: Response) => {
  try {
    const categoryTypes = await CategoryType.findAll();
    res.status(200).json(categoryTypes);
  } catch (error) {
    console.error('Error fetching category types:', error);
    res.status(500).json({ message: 'Error fetching category types' });
  }
};

// Get category type by ID
export const getCategoryTypeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const categoryType = await CategoryType.findByPk(id);
    if (categoryType) {
      res.status(200).json(categoryType);
    } else {
      res.status(404).json({ message: 'Category type not found' });
    }
  } catch (error) {
    console.error('Error fetching category type:', error);
    res.status(500).json({ message: 'Error fetching category type' });
  }
};

// Create a new category type
export const createCategoryType = async (req: Request, res: Response) => {
  const { type, name, displayRate, primaryDimension, imageUrl } = req.body;
  try {
    const newCategoryType = await CategoryType.create({
      type,
      name,
      displayRate,
      primaryDimension,
      imageUrl,
    });
    res.status(201).json(newCategoryType);
  } catch (error) {
    console.error('Error creating category type:', error);
    res.status(500).json({ message: 'Error creating category type' });
  }
};

// Update an existing category type
export const updateCategoryType = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type, name, displayRate, primaryDimension, imageUrl, isDisabled } = req.body;
  try {
    const categoryType = await CategoryType.findByPk(id);
    if (categoryType) {
      await categoryType.update({
        type,
        name,
        displayRate,
        primaryDimension,
        imageUrl,
        isDisabled,
      });
      res.status(200).json(categoryType);
    } else {
      res.status(404).json({ message: 'Category type not found' });
    }
  } catch (error) {
    console.error('Error updating category type:', error);
    res.status(500).json({ message: 'Error updating category type' });
  }
};

// Delete a category type
export const deleteCategoryType = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const categoryType = await CategoryType.findByPk(id);
    if (categoryType) {
      await categoryType.destroy();
      res.status(200).json({ message: 'Category type deleted' });
    } else {
      res.status(404).json({ message: 'Category type not found' });
    }
  } catch (error) {
    console.error('Error deleting category type:', error);
    res.status(500).json({ message: 'Error deleting category type' });
  }
};
