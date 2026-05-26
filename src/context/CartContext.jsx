/* eslint-disable react-refresh/only-export-components */
import { useState, useContext, createContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product, quantity) => {
        const itemInCart = cart.find(item => item.id === product.id);
        if (itemInCart) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
        }
    };
    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };
    const clearCart = () => {
        setCart([]);
    };
    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };
    const getCartTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity,
            0);
    };
    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, clearCart,
            getCartQuantity, getCartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};