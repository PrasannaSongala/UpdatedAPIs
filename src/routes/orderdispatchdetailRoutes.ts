//src/routes/orderdispatchdetailRoutes.ts

import express from 'express';
import * as orderDispatchDetailController from '../controllers/orderdispatchdetailController';

const router = express.Router();

router.post('/', orderDispatchDetailController.createOrderDispatchDetail);
router.get('/', orderDispatchDetailController.getOrderDispatchDetails);
router.get('/:id', orderDispatchDetailController.getOrderDispatchDetailById);
router.put('/:id', orderDispatchDetailController.updateOrderDispatchDetail);
router.delete('/:id', orderDispatchDetailController.deleteOrderDispatchDetail);

export default router;
