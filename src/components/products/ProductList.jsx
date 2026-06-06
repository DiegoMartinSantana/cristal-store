import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


export default function ProductList(showFeaturesOnly = false) {
    const [products, setProducts] = useState([]);


    const fetchData = async () => {
        try {
            const productsCollection = collection(db, "products");
            getDocs(productsCollection).then((resp) => {
                setProducts(resp.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                }))
            });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className="mb-3">
                <h1 className="text-3xl font-extrabold text-primary-800 leading-tight">
                    {showFeaturesOnly ? "🌟 Featured Products" : "🛒 All Products"}
                </h1>
                <p className="text-base text-primary-600 mt-1">
                    {showFeaturesOnly
                        ? "Check out our hand-picked top choices, loved by our customers."
                        : "Browse our full assortment and find your perfect option."}
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p) => (
                    <ProductCard key={p.id} {...p} />
                ))}
            </div>
        </>
    );
}
