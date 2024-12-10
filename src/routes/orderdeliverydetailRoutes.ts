// src/routes/orderdeliverydetailRoutes.ts

import express from 'express';
import * as orderDeliveryDetailController from '../controllers/orderdeliverydetailController';

const router = express.Router();

router.post('/', orderDeliveryDetailController.createOrderDeliveryDetail);
router.get('/', orderDeliveryDetailController.getOrderDeliveryDetails);
router.get('/:id', orderDeliveryDetailController.getOrderDeliveryDetailById);
router.put('/:id', orderDeliveryDetailController.updateOrderDeliveryDetail);
router.delete('/:id', orderDeliveryDetailController.deleteOrderDeliveryDetail);

export default router;
