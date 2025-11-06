import {useState} from "react";
import ProductCard from "./ProductCard";

function ProductList() {
    const [products, updateProduct] = useState([
        {id: 1, name: "Ice cream", price: 15, stock: "Available"},
        {id: 2, name: "Milk shake", price: 50, stock: "Unavailable"},
        {id: 3, name: "Oats", price: 20, stock: "Available"}
    ]);

    const handleProduct = (id, newStock) => {
        updateProduct(products.map(product =>
            product.id === id ? {...product, stock: newStock} : product
    ));
    }

    return (
        <div>
            <h2>Products List</h2>
            {products.map(product => (
                <ProductCard 
                key = {product.id}
                id = {product.id}
                name = {product.name}
                price = {product.price}
                stock = {product.stock}
                onStatusChange = {handleProduct}/>
        ))}
        </div>
    );
}

export default ProductList;