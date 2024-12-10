// src/routes/userDetailRoutes.ts
import { Router } from 'express';
import {
  createUserDetail,
  getUserDetails,
  getUserDetailById,
  updateUserDetail,
  deleteUserDetail,
} from '../controllers/userDetailController';

const router = Router();

router.post('/', createUserDetail); //  a new user detail
router.get('/', getUserDetails); //  all user details
router.get('/:id', getUserDetailById); //  a specific user detail by ID
router.put('/:id', updateUserDetail); // Update user detail by ID
router.delete('/:id', deleteUserDetail); // Delete user detail by ID

export default router;
