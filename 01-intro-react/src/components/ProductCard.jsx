function ProductCard({id, name, price, stock, onStatusChange}) {

    const handleClick = () => {
        const newStatus = stock === "Available" ? "Unavailable" : "Available";
        onStatusChange(id, newStatus); //send back to the parent
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>₱ {price}</p>
            <p>Status: {stock}</p>
            <button onClick={handleClick}>Change Status</button>
        </div>
    )
}

export default ProductCard;