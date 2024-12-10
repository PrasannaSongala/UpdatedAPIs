import express from 'express';
import {
  getUserCartItems,
  getCartItemById,
  addToCart,
  updateCartItem,
  removeFromCart,
} from '../controllers/cartController';

const router = express.Router();

router.get('/user/:userId', getUserCartItems);  // Get cart items for user
router.get('/:id', getCartItemById);  // Get cart item by ID
router.post('/', addToCart);  // Add item to cart
router.put('/:id', updateCartItem);  // Update cart item
router.delete('/:id', removeFromCart);  // Remove item from cart

export default router;
