//src/routes/orderlistRoutes.ts

import express from 'express';
import * as orderController from '../controllers/orderlistController';

const router = express.Router();

router.post('/', orderController.createOrder); 
router.get('/', orderController.getOrders); // Get all orders
router.get('/:id', orderController.getOrderById); // Get order by ID
router.put('/:id', orderController.updateOrder); // Update order
router.delete('/:id', orderController.deleteOrder); // Delete order

export default router;


