import { useCart } from "../../context/CartContext";

export default function Cart() {
    const { cart, getCartTotal, removeFromCart, clearCart } = useCart();

    return (
        <>
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-list">
                    {cart.map(product => (
                        <div key={product.id} className="cart-item flex gap-4 p-4 border-b">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                style={{width: "100px", height: "80px", objectFit: "cover", borderRadius: "8px"}} 
                            />
                            <div className="flex flex-col justify-between">
                                <h2 className="font-semibold">{product.title}</h2>
                                <p className="text-gray-500">Price: ${product.precio ?? product.price}</p>
                                <p className="text-gray-500">Quantity: {product.quantity}</p>
                                <p className="text-gray-500">Subtotal: ${((product.precio ?? product.price) * product.quantity).toFixed(2)}</p>
                                <button 
                                    className="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1 w-max mt-2"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary mt-6 text-right">
                        <h2 className="text-xl font-bold">
                            Total: ${getCartTotal().toFixed(2)}
                        </h2>
                        <button 
                            onClick={clearCart}
                            className="mt-4 bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}