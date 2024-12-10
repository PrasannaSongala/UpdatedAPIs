// src/routes/userAddressRoutes.ts

import { Router } from 'express';
import {
  createUserAddress,
  getUserAddresses,
  getUserAddressById,
  updateUserAddress,
  deleteUserAddress,
} from '../controllers/userAddressController';

const router = Router();

router.post('/', createUserAddress); //  new address
router.get('/:userId', getUserAddresses); //  all addresses for a user
router.get('/address/:id', getUserAddressById); //  a specific address by ID
router.put('/address/:id', updateUserAddress); // Update an address by ID
router.delete('/address/:id', deleteUserAddress); // Delete an address by ID

export default router;
