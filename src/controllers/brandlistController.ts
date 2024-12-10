// src/controllers/brandlistController.ts

import { Request, Response } from 'express';
import BrandList from '../models/brandlist';

// Get all brands
export const getAllBrands = async (req: Request, res: Response) => {
  try {
    const brands = await BrandList.findAll();
    res.status(200).json(brands);
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ message: 'Error fetching brands' });
  }
};

// Get a brand by ID
export const getBrandById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const brand = await BrandList.findByPk(id);
    if (brand) {
      res.status(200).json(brand);
    } else {
      res.status(404).json({ message: 'Brand not found' });
    }
  } catch (error) {
    console.error('Error fetching brand:', error);
    res.status(500).json({ message: 'Error fetching brand' });
  }
};

// Create a new brand
export const createBrand = async (req: Request, res: Response) => {
  const { name, link, type, isDisabled } = req.body;
  try {
    const newBrand = await BrandList.create({
      name,
      link,
      type,
      isDisabled,
    });
    res.status(201).json(newBrand);
  } catch (error) {
    console.error('Error creating brand:', error);
    res.status(500).json({ message: 'Error creating brand' });
  }
};

// Update a brand
export const updateBrand = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, link, type, isDisabled } = req.body;
  try {
    const brand = await BrandList.findByPk(id);
    if (brand) {
      await brand.update({ name, link, type, isDisabled });
      res.status(200).json(brand);
    } else {
      res.status(404).json({ message: 'Brand not found' });
    }
  } catch (error) {
    console.error('Error updating brand:', error);
    res.status(500).json({ message: 'Error updating brand' });
  }
};

// Delete a brand
export const deleteBrand = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const brand = await BrandList.findByPk(id);
    if (brand) {
      await brand.destroy();
      res.status(200).json({ message: 'Brand deleted' });
    } else {
      res.status(404).json({ message: 'Brand not found' });
    }
  } catch (error) {
    console.error('Error deleting brand:', error);
    res.status(500).json({ message: 'Error deleting brand' });
  }
};
