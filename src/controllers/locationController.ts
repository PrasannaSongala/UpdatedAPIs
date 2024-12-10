// src/controllers/locationController.ts

import { Request, Response } from 'express';
import Location from '../models/location';

// Create a new location
export const createLocation = async (req: Request, res: Response) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create location' });
  }
};

// Get all locations
export const getLocations = async (req: Request, res: Response) => {
  try {
    const locations = await Location.findAll();
    res.status(200).json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve locations' });
  }
};

// Get a specific location by ID
export const getLocationById = async (req: Request, res: Response) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (location) {
      res.status(200).json(location);
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve location' });
  }
};

// Update a location
export const updateLocation = async (req: Request, res: Response) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (location) {
      await location.update(req.body);
      res.status(200).json(location);
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update location' });
  }
};

// Delete a location
export const deleteLocation = async (req: Request, res: Response) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (location) {
      await location.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete location' });
  }
};
