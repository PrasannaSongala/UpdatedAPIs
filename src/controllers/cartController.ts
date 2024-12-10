import { Request, Response } from 'express';
import Cart from '../models/cart';

// Get all cart items for a specific user
export const getUserCartItems = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const cartItems = await Cart.findAll({
      where: { userId },
    });
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Error fetching cart items' });
  }
};

// Get a specific cart item by ID
export const getCartItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cartItem = await Cart.findByPk(id);
    if (cartItem) {
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ message: 'Cart item not found' });
    }
  } catch (error) {
    console.error('Error fetching cart item:', error);
    res.status(500).json({ message: 'Error fetching cart item' });
  }
};

// Add a product to the cart
export const addToCart = async (req: Request, res: Response) => {
  const { quantity, quantityUnit, productId, userId } = req.body;
  try {
    const newCartItem = await Cart.create({
      quantity,
      quantityUnit,
      productId,
      userId,
    });
    res.status(201).json(newCartItem);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Error adding to cart' });
  }
};

// Update a cart item
export const updateCartItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity, quantityUnit } = req.body;
  try {
    const cartItem = await Cart.findByPk(id);
    if (cartItem) {
      await cartItem.update({ quantity, quantityUnit });
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ message: 'Cart item not found' });
    }
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ message: 'Error updating cart item' });
  }
};

// Remove a product from the cart
export const removeFromCart = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cartItem = await Cart.findByPk(id);
    if (cartItem) {
      await cartItem.destroy();
      res.status(200).json({ message: 'Cart item removed' });
    } else {
      res.status(404).json({ message: 'Cart item not found' });
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ message: 'Error removing from cart' });
  }
};
