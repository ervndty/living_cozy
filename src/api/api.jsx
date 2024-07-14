import axios from 'axios';

const API_URL = 'http://http://127.0.0.1:8000/api';

export const getCartItems = async () => {
  const response = await axios.get(`${API_URL}/shopping-carts`);
  return response.data.shopping_carts;
};

export const addToCart = async (userId, productId, quantity) => {
  const response = await axios.post(`${API_URL}/shopping-carts`, {
    user_id: userId,
    product_id: productId,
    quantity: quantity,
  });
  return response.data.shopping_cart;
};

export const updateCartItemQuantity = async (itemId, quantity) => {
  const response = await axios.put(`${API_URL}/shopping-carts/${itemId}`, {
    quantity: quantity,
  });
  return response.data.shopping_cart;
};

export const removeCartItem = async (itemId) => {
  const response = await axios.delete(`${API_URL}/shopping-carts/${itemId}`);
  return response.data;
};
