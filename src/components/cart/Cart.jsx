import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
export default function Cart() {
    const { cart, getCartTotal, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const handleBuy = () => {
        clearCart();
        alert("Thank you for your purchase!");
        navigate("/");
    };

    return (
        <>

            {cart.length === 0 ? (
                <>
                    <div className="flex flex-col items-center mt-6 mb-4">
                        <ShoppingCartIcon className="h-14 w-14 text-primary-400 mb-2" />

                        <p className="text-lg text-primary-700 font-medium mb-1">Your cart is empty.</p>
                        <p className="text-sm text-primary-500 mb-3">Looks like you haven&apos;t added anything yet.</p>
                    </div>

                    <div className="flex justify-center"> 
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
                            <Link to="/">Continue Shopping</Link>
                        </button>
                    </div>
                </>
            ) : (
                <div className="cart-list">
                    {cart.map(product => (
                        <div key={product.id} className="cart-item flex gap-4 p-4 border-b">
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: "100px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
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
                        <div>
                            <button
                                className="w-25 bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded mr-4"
                                onClick={handleBuy}
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}