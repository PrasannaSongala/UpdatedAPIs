import { Router } from 'express';
import { createUserLogin, getUserLoginByUserName, updateUserLogin, deleteUserLogin } from '../controllers/userLoginController';
import UserLogin from '../models/userLogin'; 

const router = Router();

router.post('/', createUserLogin); 
router.get('/', async (req, res) => { 
  try {
    const userLogins = await UserLogin.findAll(); // Fetch all user logins from the database
    res.status(200).json(userLogins);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/:userName', getUserLoginByUserName); 
router.put('/:userName', updateUserLogin); 
router.delete('/:userName', deleteUserLogin); 

export default router;
