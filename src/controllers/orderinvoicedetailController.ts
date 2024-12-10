// src/controllers/orderinvoicedetailController.ts

import { Request, Response } from 'express';
import OrderInvoiceDetail from '../models/orderinvoicedetail';

// Get all order invoice details
export const getAllOrderInvoiceDetails = async (req: Request, res: Response) => {
  try {
    const invoiceDetails = await OrderInvoiceDetail.findAll();
    res.status(200).json(invoiceDetails);
  } catch (error) {
    console.error('Error fetching order invoice details:', error);
    res.status(500).json({ message: 'Error fetching order invoice details' });
  }
};

// Get order invoice details by ID
export const getOrderInvoiceDetailById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const invoiceDetail = await OrderInvoiceDetail.findByPk(id);
    if (invoiceDetail) {
      res.status(200).json(invoiceDetail);
    } else {
      res.status(404).json({ message: 'Order invoice detail not found' });
    }
  } catch (error) {
    console.error('Error fetching order invoice detail:', error);
    res.status(500).json({ message: 'Error fetching order invoice detail' });
  }
};

// Create a new order invoice detail
export const createOrderInvoiceDetail = async (req: Request, res: Response) => {
  const { ewayBillNumber, invoiceSent, orderId, doNumber } = req.body;
  try {
    const newInvoiceDetail = await OrderInvoiceDetail.create({
      ewayBillNumber,
      invoiceSent,
      orderId,
      doNumber,
    });
    res.status(201).json(newInvoiceDetail);
  } catch (error) {
    console.error('Error creating order invoice detail:', error);
    res.status(500).json({ message: 'Error creating order invoice detail' });
  }
};

// Update an existing order invoice detail
export const updateOrderInvoiceDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ewayBillNumber, invoiceSent, orderId, doNumber } = req.body;
  try {
    const invoiceDetail = await OrderInvoiceDetail.findByPk(id);
    if (invoiceDetail) {
      await invoiceDetail.update({ ewayBillNumber, invoiceSent, orderId, doNumber });
      res.status(200).json(invoiceDetail);
    } else {
      res.status(404).json({ message: 'Order invoice detail not found' });
    }
  } catch (error) {
    console.error('Error updating order invoice detail:', error);
    res.status(500).json({ message: 'Error updating order invoice detail' });
  }
};

// Delete an order invoice detail
export const deleteOrderInvoiceDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const invoiceDetail = await OrderInvoiceDetail.findByPk(id);
    if (invoiceDetail) {
      await invoiceDetail.destroy();
      res.status(200).json({ message: 'Order invoice detail deleted' });
    } else {
      res.status(404).json({ message: 'Order invoice detail not found' });
    }
  } catch (error) {
    console.error('Error deleting order invoice detail:', error);
    res.status(500).json({ message: 'Error deleting order invoice detail' });
  }
};
