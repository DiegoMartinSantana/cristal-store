import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


export default function ProductList() {
    const [products, setProducts] = useState([]);


    const fetchData = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await fetch("/data/products.json");
            if (!response.ok)
                throw new Error("An error occurred while getting the products");
            const products = await response.json();
            setProducts(products);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <h1 className="text-2xl font-bold mb-3">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p) => (
                    <ProductCard key={p.id} {...p} />
                ))}
            </div>
        </>
    );
}
