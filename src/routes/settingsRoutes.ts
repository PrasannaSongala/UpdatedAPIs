// src/routes/settingsRoutes.ts
import express from 'express';
import * as settingsController from '../controllers/settingsController';

const router = express.Router();

router.post('/', settingsController.createSetting);
router.get('/', settingsController.getSettings);
router.get('/:id', settingsController.getSettingById);
router.put('/:id', settingsController.updateSetting);
router.delete('/:id', settingsController.deleteSetting);

export default router;
