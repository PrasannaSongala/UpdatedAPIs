//src/controllers/userLoginController.ts

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UserLogin from '../models/userLogin';

// Create a new user login
export const createUserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userName, password, salt, userId } = req.body;

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const userLogin = await UserLogin.create({
      userName,
      password: hashedPassword, // Store hashed password
      salt,
      userId,
    });

    res.status(201).json(userLogin);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get user login information by userName
export const getUserLoginByUserName = async (req: Request, res: Response): Promise<void> => {
  try {
    const userLogin = await UserLogin.findByPk(req.params.userName);
    if (userLogin) {
      res.status(200).json(userLogin);
    } else {
      res.status(404).json({ message: 'User login not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update user login details
export const updateUserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const userLogin = await UserLogin.findByPk(req.params.userName);
    if (userLogin) {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }
      await userLogin.update(req.body);
      res.status(200).json(userLogin);
    } else {
      res.status(404).json({ message: 'User login not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user login
export const deleteUserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const userLogin = await UserLogin.findByPk(req.params.userName);
    if (userLogin) {
      await userLogin.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'User login not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
