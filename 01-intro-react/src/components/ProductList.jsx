import {useState} from "react";
import ProductCard from "./ProductCard";

function ProductList() {
    const [products, setProducts] = useState([
        {id: 1, name: "Ice cream", price: 15, stock: "Available"},
        {id: 2, name: "Milk shake", price: 50, stock: "Unavailable"},
        {id: 3, name: "Oats", price: 20, stock: "Available"}
    ]);

    const handleProduct = (id, newStock) => {
        setProducts(products.map(product =>
            product.id === id ? {...product, stock: newStock} : product
    ));
    }

    return (
        <div>
            <h2>Products List</h2>
            {products.map(({id, name, price, stock}) => (
                <ProductCard 
                key = {id}
                id = {id}
                name = {name}
                price = {price}
                stock = {stock}
                onStatusChange = {handleProduct}/>
        ))}
        </div>
    );
}

export default ProductList;