import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Product({ id, title, description, image, price, category, stock }) {
    const product = { id, title, description, image, price, category, stock };
    const quantity = 1;
    const { addToCart } = useCart();

    //stock handler
    const handleAddToCart = () => {
        if (stock === 0) {
            alert("No hay stock disponible");
            return;
        }
        addToCart(product, quantity);
    };

    return (
        <>
            <div className=" group text-wrap bg-white border-primary-200 border  rounded-2xl shadow-primary-300 shadow-md mt-4 overflow-hidden  hover:scale-105 transition-transform duration-500 ">
                <div className="aspect-4/3 w-full  ">
                    <img
                        src={image}
                        className=" w-full h-full rounded-2xl object-cover "
                        alt={title}
                    ></img>
                </div>

                <div className="p-5 ">
                    <div className="flex  justify-between items-start  gap-2">
                        <h2 className="font-semibold  leading-tight"> {title}</h2>
                        <span className="font-bold  ">${price}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-slate-400">Categoría: {category}</span>
                        <span className={`text-xs font-medium ${stock > 0 ? "text-green-600" : "text-red-500"}`}>
                            Stock: {stock}
                        </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{description}</p>
                    <button className="mt-4 w-full py-2.5  text-sm font-medium bg-slate-700 text-white  rounded-lg hover:scale-103  transition-transform duration-500  ">
                        <Link to={`/product/${id}`}>Ver detalles</Link>
                    </button>
                    <div>
                        <button
                            onClick={handleAddToCart}
                            className="flex items-center justify-center gap-2 mt-4 w-full py-2.5 rounded-lg text-sm font-medium  bg-gray-100 400 hover:bg-gray-200  shadow-sm transition-all duration-500 hover:scale-102"
                            disabled={stock === 0}
                        >
                            Añadir al carrito
                            <ShoppingCartIcon className="w-6 text-primary-500" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Product;
