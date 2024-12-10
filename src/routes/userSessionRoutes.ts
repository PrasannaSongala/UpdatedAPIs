// src/routes/userSessionRoutes.ts

import { Router } from 'express';
import {
  createUserSession,
  getAllUserSessions,
  getUserSessionBySid,
  updateUserSession,
  deleteUserSession,
} from '../controllers/userSessionController';

const router = Router();

router.post('/', createUserSession); //  a new user session
router.get('/', getAllUserSessions); //  all user sessions
router.get('/:sid', getUserSessionBySid); //  user session by SID
router.put('/:sid', updateUserSession); // Update user session by SID
router.delete('/:sid', deleteUserSession); // Delete user session by SID

export default router;
