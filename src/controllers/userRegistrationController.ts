// src/controllers/userRegistrationController.ts

import { Request, Response } from 'express';
import UserRegistration from '../models/userRegistration';

// Create a new user registration
export const createUserRegistration = async (req: Request, res: Response): Promise<void> => {
  try {
    const { mobileNumber, otp } = req.body;
    const userRegistration = await UserRegistration.create({
      mobileNumber,
      otp,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(userRegistration);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all user registrations
export const getAllUserRegistrations = async (req: Request, res: Response): Promise<void> => {
  try {
    const userRegistrations = await UserRegistration.findAll();
    res.status(200).json(userRegistrations);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get user registration by ID
export const getUserRegistrationById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userRegistration = await UserRegistration.findByPk(req.params.id);
    if (userRegistration) {
      res.status(200).json(userRegistration);
    } else {
      res.status(404).json({ message: 'User registration not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update user registration
export const updateUserRegistration = async (req: Request, res: Response): Promise<void> => {
  try {
    const userRegistration = await UserRegistration.findByPk(req.params.id);
    if (userRegistration) {
      await userRegistration.update(req.body);
      res.status(200).json(userRegistration);
    } else {
      res.status(404).json({ message: 'User registration not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user registration
export const deleteUserRegistration = async (req: Request, res: Response): Promise<void> => {
  try {
    const userRegistration = await UserRegistration.findByPk(req.params.id);
    if (userRegistration) {
      await userRegistration.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'User registration not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
