import ProductForm from "./ProductForm";
import { useState } from "react";

export default function ProductContainer() {
    const [formProduct, setFormProduct] = useState({
        title: "",
        description: "",
        image: "",
        price: 0.00
    })
   
    const [loading,setLoading] = useState(false);

    const handlerChange = (e) => {
        setFormProduct({ ...formProduct, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await new Promise(resolve => setTimeout(resolve, 2000));
   

        console.log('form producto ', formProduct);
        setLoading(false);
    }
    return (<>

        <ProductForm formData={formProduct} onSubmit={onSubmit} handlerChange={handlerChange} loading={loading} />
    </>)
}