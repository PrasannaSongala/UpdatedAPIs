// src/controllers/userSessionController.ts

import { Request, Response } from 'express';
import UserSession from '../models/userSession';

// Create a new user session
export const createUserSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sid, expires, data, userId } = req.body;
    const userSession = await UserSession.create({
      sid,
      expires,
      data,
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(userSession);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all user sessions
export const getAllUserSessions = async (req: Request, res: Response): Promise<void> => {
  try {
    const userSessions = await UserSession.findAll();
    res.status(200).json(userSessions);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get user session by SID
export const getUserSessionBySid = async (req: Request, res: Response): Promise<void> => {
  try {
    const userSession = await UserSession.findByPk(req.params.sid);
    if (userSession) {
      res.status(200).json(userSession);
    } else {
      res.status(404).json({ message: 'User session not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update user session
export const updateUserSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const userSession = await UserSession.findByPk(req.params.sid);
    if (userSession) {
      await userSession.update(req.body);
      res.status(200).json(userSession);
    } else {
      res.status(404).json({ message: 'User session not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user session
export const deleteUserSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const userSession = await UserSession.findByPk(req.params.sid);
    if (userSession) {
      await userSession.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'User session not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
