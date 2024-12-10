// src/routes/locationRoutes.ts

import express from 'express';
import * as locationController from '../controllers/locationController';

const router = express.Router();

router.post('/', locationController.createLocation); 
router.get('/', locationController.getLocations); //  all locations
router.get('/:id', locationController.getLocationById); //  location by ID
router.put('/:id', locationController.updateLocation); // Update location
router.delete('/:id', locationController.deleteLocation); // Delete location

export default router;
