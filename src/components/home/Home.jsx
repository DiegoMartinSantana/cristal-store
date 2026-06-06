import ProductList from "../products/ProductList";

export default function Home() {
    return (
        <div>
            <ProductList showFeaturesOnly={true} />
        </div>
    )
}