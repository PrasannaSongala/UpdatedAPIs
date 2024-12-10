// src/controllers/contactusController.ts

import { Request, Response } from 'express';
import ContactUs from '../models/contactus';

// Get all contact messages
export const getAllMessages = async (req: Request, res: Response) => {
  try {
    const messages = await ContactUs.findAll();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ message: 'Error fetching contact messages' });
  }
};

// Get a contact message by ID
export const getMessageById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const message = await ContactUs.findByPk(id);
    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    console.error('Error fetching contact message:', error);
    res.status(500).json({ message: 'Error fetching contact message' });
  }
};

// Create a new contact message
export const createMessage = async (req: Request, res: Response) => {
  const { name, email, message, status, note } = req.body;
  try {
    const newMessage = await ContactUs.create({
      name,
      email,
      message,
      status,
      note,
    });
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error creating contact message:', error);
    res.status(500).json({ message: 'Error creating contact message' });
  }
};

// Update a contact message
export const updateMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, message, status, note } = req.body;
  try {
    const messageRecord = await ContactUs.findByPk(id);
    if (messageRecord) {
      await messageRecord.update({ name, email, message, status, note });
      res.status(200).json(messageRecord);
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    console.error('Error updating contact message:', error);
    res.status(500).json({ message: 'Error updating contact message' });
  }
};

// Delete a contact message
export const deleteMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const messageRecord = await ContactUs.findByPk(id);
    if (messageRecord) {
      await messageRecord.destroy();
      res.status(200).json({ message: 'Message deleted' });
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    console.error('Error deleting contact message:', error);
    res.status(500).json({ message: 'Error deleting contact message' });
  }
};
