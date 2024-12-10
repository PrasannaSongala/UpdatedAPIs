// controllers/userAddressController.ts
import { Request, Response } from 'express';
import UserAddress from '../models/userAddress';

// Create a new address
export const createUserAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, fullName, mobileNumber, line1, line2, pincode, city, state } = req.body;
    const address = await UserAddress.create({
      userId,
      fullName,
      mobileNumber,
      line1,
      line2,
      pincode,
      city,
      state,
    });
    res.status(201).json(address);
  } catch (error: any) {  // Cast error to 'any'
    res.status(500).json({ message: error.message });
  }
};

// Get all addresses for a user
export const getUserAddresses = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;
    const addresses = await UserAddress.findAll({ where: { userId } });
    res.status(200).json(addresses);
  } catch (error: any) {  
    res.status(500).json({ message: error.message });
  }
};

// Get a specific address by ID
export const getUserAddressById = async (req: Request, res: Response): Promise<void> => {
  try {
    const address = await UserAddress.findByPk(req.params.id);
    if (address) {
      res.status(200).json(address);
    } else {
      res.status(404).json({ message: 'Address not found' });
    }
  } catch (error: any) {  
    res.status(500).json({ message: error.message });
  }
};

// Update an address by ID
export const updateUserAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const address = await UserAddress.findByPk(req.params.id);
    if (address) {
      await address.update(req.body);
      res.status(200).json(address);
    } else {
      res.status(404).json({ message: 'Address not found' });
    }
  } catch (error: any) {  
    res.status(500).json({ message: error.message });
  }
};

// Delete an address by ID
export const deleteUserAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const address = await UserAddress.findByPk(req.params.id);
    if (address) {
      await address.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Address not found' });
    }
  } catch (error: any) {  
    res.status(500).json({ message: error.message });
  }
};
