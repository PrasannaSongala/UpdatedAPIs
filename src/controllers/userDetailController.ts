// controllers/userDetailController.ts
import { Request, Response } from 'express';
import UserDetail from '../models/userdetail';

// Create a new user detail
export const createUserDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      userId,
      userType,
      fullname,
      gstin,
      pan,
      aadhaar,
      emailId,
      line1,
      line2,
      pincode,
      city,
      state,
      alternateMobile,
      defaultAddressId,
      enableSMS,
      enableWhatsApp
    } = req.body;
    
    const userDetail = await UserDetail.create({
      userId,
      userType,
      fullname,
      gstin,
      pan,
      aadhaar,
      emailId,
      line1,
      line2,
      pincode,
      city,
      state,
      alternateMobile,
      defaultAddressId,
      enableSMS,
      enableWhatsApp,
    });
    res.status(201).json(userDetail);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all user details
export const getUserDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const userDetails = await UserDetail.findAll();
    res.status(200).json(userDetails);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get user details by ID
export const getUserDetailById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userDetail = await UserDetail.findByPk(req.params.id);
    if (userDetail) {
      res.status(200).json(userDetail);
    } else {
      res.status(404).json({ message: 'UserDetail not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update user detail by ID
export const updateUserDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const userDetail = await UserDetail.findByPk(req.params.id);
    if (userDetail) {
      await userDetail.update(req.body);
      res.status(200).json(userDetail);
    } else {
      res.status(404).json({ message: 'UserDetail not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user detail by ID
export const deleteUserDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const userDetail = await UserDetail.findByPk(req.params.id);
    if (userDetail) {
      await userDetail.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'UserDetail not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
