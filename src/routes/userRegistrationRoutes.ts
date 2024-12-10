// src/routes/userRegistrationRoutes.ts

import { Router } from 'express';
import {
  createUserRegistration,
  getAllUserRegistrations,
  getUserRegistrationById,
  updateUserRegistration,
  deleteUserRegistration,
} from '../controllers/userRegistrationController';

const router = Router();

router.post('/', createUserRegistration); //  a new user registration
router.get('/', getAllUserRegistrations); //  all user registrations
router.get('/:id', getUserRegistrationById); //  user registration by ID
router.put('/:id', updateUserRegistration); // Update user registration by ID
router.delete('/:id', deleteUserRegistration); // Delete user registration by ID

export default router;
