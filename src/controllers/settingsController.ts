// src/controllers/settingsController.ts
import { Request, Response } from 'express';
import Setting from '../models/settings';

// Create a new setting
export const createSetting = async (req: Request, res: Response) => {
  try {
    const setting = await Setting.create(req.body);
    res.status(201).json(setting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create setting' });
  }
};

// Get all settings
export const getSettings = async (req: Request, res: Response) => {
  try {
    const settings = await Setting.findAll();
    res.status(200).json(settings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve settings' });
  }
};

// Get a specific setting by ID
export const getSettingById = async (req: Request, res: Response) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (setting) {
      res.status(200).json(setting);
    } else {
      res.status(404).json({ message: 'Setting not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve setting' });
  }
};

// Update a setting
export const updateSetting = async (req: Request, res: Response) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (setting) {
      await setting.update(req.body);
      res.status(200).json(setting);
    } else {
      res.status(404).json({ message: 'Setting not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update setting' });
  }
};

// Delete a setting
export const deleteSetting = async (req: Request, res: Response) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (setting) {
      await setting.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Setting not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete setting' });
  }
};
