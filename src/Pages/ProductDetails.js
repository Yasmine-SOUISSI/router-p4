import { useParams } from "react-router-dom";
import { products } from "../Data/products";

const ProductDetails = () => {
    const { id } = useParams();
    const findProduct = products.find((product) => product.id === parseInt(id));
    return (
        <div>
            <h1>{findProduct.name}</h1>
            <p>{findProduct.description}</p>
            <p>{findProduct.price}</p>

        </div>
    );
}

export default ProductDetails;