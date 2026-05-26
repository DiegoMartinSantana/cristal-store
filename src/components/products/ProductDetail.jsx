import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch("/data/products.json");
                if (!response.ok) throw new Error("Failed to fetch products.");
                const products = await response.json();
                const found = products.find(p => p.id === Number(id));
                if (!found) throw new Error("Product not found.");
                setProduct(found);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        };
        fetchProduct();
    }, [id]);

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!product) {
        return <p>Loading product...</p>;
    }

    return (
        <div className="max-w-xl mx-auto p-6 border rounded shadow mt-6">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-sm mx-auto mb-4 rounded"
                style={{objectFit: "cover"}}
            />
            <p className="mb-2 text-gray-800"><span className="font-semibold">Price:</span> ${product.precio ?? product.price}</p>
            <p className="mb-2 text-gray-600">{product.description}</p>
        </div>
    );
}