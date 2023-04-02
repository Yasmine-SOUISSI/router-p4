import { useState } from "react";
import { products } from "../Data/products";
import { Link } from "react-router-dom";


const Products = () => {
    const [productsList, setProductsList] = useState(products);
    const [search, setSearch] = useState("");
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
    });

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };
    const addProduct = (e) => {
        e.preventDefault();
        setProductsList([...productsList, newProduct]);
    };
    const filterData = productsList.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <div>
            <input type="search" placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            {filterData.map((product) => (

                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <Link to={`/products/${product.id}`}>
                        <button>View</button>
                    </Link>
                </div>

            ))
            }
            <form onSubmit={(e) => addProduct(e)}>
                <input type="text" name="name"
                    onChange={handleChange}
                />
                <input type="text" name="description"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                >Add Product</button>

            </form>
        </div>
    );
};

export default Products;