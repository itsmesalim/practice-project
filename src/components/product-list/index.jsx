import { useState } from 'react';
import '../../style/product-list.css';

const ProductList = ({ ProductsList }) => {
  const [filter, setFilter] = useState("");

    const filteredProducts = ProductsList.filter(
        (product) => product?.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleAddToCart = (name) => {
        alert(`Product ${name} added to cart!`);
    }

    return (
        <div className="product-list">

            <div className="filter-container">
                <input 
                    id="priceRange"
                    type="text"  
                    placeholder="Search by name..."
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>

            {
                filteredProducts.map((product) => {
                    const { id, name, category, price, stock, rating, brand, image } = product;
                    return (
                        <div key={id} className="product-card">
                            <img src={image} alt={name} />
                            <h2>{name}</h2>
                            <p>Brand: {brand}</p>
                            <p>Category: {category}</p>
                            <p>Rating: {rating}</p>
                            <p>Price: ${price}</p>

                            <button 
                                className="add-to-cart-btn" 
                                disabled={stock < 50}
                                style={{
                                    backgroundColor: stock >= 50 ? "green" : "red",
                                    cursor: stock >= 50 ? "pointer" : "not-allowed"
                                }}
                                onClick={() => handleAddToCart(name)}
                            >
                                {
                                    stock >= 50
                                    ? <span>Add to Cart</span> 
                                    : <span>Out of Stock</span>
                                }
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default ProductList;