// src/controllers/sellerlistController.ts

import { Request, Response } from 'express';
import SellerList from '../models/sellerlist';

// Get all sellers
export const getAllSellers = async (req: Request, res: Response) => {
  try {
    const sellers = await SellerList.findAll();
    res.status(200).json(sellers);
  } catch (error) {
    console.error('Error fetching sellers:', error);
    res.status(500).json({ message: 'Error fetching sellers' });
  }
};

// Get seller by ID
export const getSellerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const seller = await SellerList.findByPk(id);
    if (seller) {
      res.status(200).json(seller);
    } else {
      res.status(404).json({ message: 'Seller not found' });
    }
  } catch (error) {
    console.error('Error fetching seller:', error);
    res.status(500).json({ message: 'Error fetching seller' });
  }
};

// Create a new seller
export const createSeller = async (req: Request, res: Response) => {
  const { name, companyName, gstin, mobileNumber, emailId, line1, line2, pincode, city, state, alternateMobile } = req.body;
  try {
    const newSeller = await SellerList.create({
      name,
      companyName,
      gstin,
      mobileNumber,
      emailId,
      line1,
      line2,
      pincode,
      city,
      state,
      alternateMobile,
    });
    res.status(201).json(newSeller);
  } catch (error) {
    console.error('Error creating seller:', error);
    res.status(500).json({ message: 'Error creating seller' });
  }
};

// Update an existing seller
export const updateSeller = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, companyName, gstin, mobileNumber, emailId, line1, line2, pincode, city, state, alternateMobile, isDisabled } = req.body;
  try {
    const seller = await SellerList.findByPk(id);
    if (seller) {
      await seller.update({
        name,
        companyName,
        gstin,
        mobileNumber,
        emailId,
        line1,
        line2,
        pincode,
        city,
        state,
        alternateMobile,
        isDisabled,
      });
      res.status(200).json(seller);
    } else {
      res.status(404).json({ message: 'Seller not found' });
    }
  } catch (error) {
    console.error('Error updating seller:', error);
    res.status(500).json({ message: 'Error updating seller' });
  }
};

// Delete a seller
export const deleteSeller = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const seller = await SellerList.findByPk(id);
    if (seller) {
      await seller.destroy();
      res.status(200).json({ message: 'Seller deleted' });
    } else {
      res.status(404).json({ message: 'Seller not found' });
    }
  } catch (error) {
    console.error('Error deleting seller:', error);
    res.status(500).json({ message: 'Error deleting seller' });
  }
};
