// src/routes/contactusRoutes.ts

import express from 'express';
import {
  getAllMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
} from '../controllers/contactusController';

const router = express.Router();

router.get('/', getAllMessages);  // Get all contact messages
router.get('/:id', getMessageById);  // Get a contact message by ID
router.post('/', createMessage);  // Create a new contact message
router.put('/:id', updateMessage);  // Update an existing contact message
router.delete('/:id', deleteMessage);  // Delete a contact message

export default router;
