import '../../style/product-list.css';

const ProductList = () => {

    const products = [
        {
            id: 1,
            name: "Wireless Mouse",
            category: "Electronics",
            price: 29.99,
            stock: 120,
            rating: 4.5,
            brand: "LogiTech",
            image: "https://picsum.photos/300/300?random=1"
        },
        {
            id: 2,
            name: "Mechanical Keyboard",
            category: "Electronics",
            price: 79.99,
            stock: 80,
            rating: 4.8,
            brand: "KeyPro",
            image: "https://picsum.photos/300/300?random=2"
        },
        {
            id: 3,
            name: "Gaming Headset",
            category: "Electronics",
            price: 59.99,
            stock: 45,
            rating: 4.6,
            brand: "HyperSound",
            image: "https://picsum.photos/300/300?random=3"
        },
        {
            id: 4,
            name: "USB-C Hub",
            category: "Accessories",
            price: 39.99,
            stock: 65,
            rating: 4.3,
            brand: "ConnectX",
            image: "https://picsum.photos/300/300?random=4"
        },
        {
            id: 5,
            name: "Laptop Stand",
            category: "Accessories",
            price: 34.99,
            stock: 55,
            rating: 4.4,
            brand: "DeskMate",
            image: "https://picsum.photos/300/300?random=5"
        },
        {
            id: 6,
            name: "Smart Watch",
            category: "Wearables",
            price: 199.99,
            stock: 30,
            rating: 4.7,
            brand: "FitPulse",
            image: "https://picsum.photos/300/300?random=6"
        },
        {
            id: 7,
            name: "Bluetooth Speaker",
            category: "Audio",
            price: 89.99,
            stock: 70,
            rating: 4.6,
            brand: "BoomBox",
            image: "https://picsum.photos/300/300?random=7"
        },
        {
            id: 8,
            name: "Portable SSD 1TB",
            category: "Storage",
            price: 119.99,
            stock: 40,
            rating: 4.9,
            brand: "FastDrive",
            image: "https://picsum.photos/300/300?random=8"
        },
        {
            id: 9,
            name: "Webcam HD",
            category: "Electronics",
            price: 49.99,
            stock: 60,
            rating: 4.4,
            brand: "VisionCam",
            image: "https://picsum.photos/300/300?random=9"
        },
        {
            id: 10,
            name: "Monitor 27 Inch",
            category: "Electronics",
            price: 249.99,
            stock: 25,
            rating: 4.8,
            brand: "ViewMax",
            image: "https://picsum.photos/300/300?random=10"
        },
        {
            id: 11,
            name: "Office Chair",
            category: "Furniture",
            price: 179.99,
            stock: 18,
            rating: 4.5,
            brand: "ComfortSeat",
            image: "https://picsum.photos/300/300?random=11"
        },
        {
            id: 12,
            name: "Desk Lamp",
            category: "Home",
            price: 24.99,
            stock: 95,
            rating: 4.2,
            brand: "BrightLite",
            image: "https://picsum.photos/300/300?random=12"
        },
        {
            id: 13,
            name: "Coffee Maker",
            category: "Kitchen",
            price: 69.99,
            stock: 35,
            rating: 4.6,
            brand: "BrewPro",
            image: "https://picsum.photos/300/300?random=13"
        },
        {
            id: 14,
            name: "Air Fryer",
            category: "Kitchen",
            price: 129.99,
            stock: 20,
            rating: 4.7,
            brand: "CrispyCook",
            image: "https://picsum.photos/300/300?random=14"
        },
        {
            id: 15,
            name: "Vacuum Cleaner",
            category: "Home",
            price: 149.99,
            stock: 22,
            rating: 4.5,
            brand: "CleanMax",
            image: "https://picsum.photos/300/300?random=15"
        },
        {
            id: 16,
            name: "Yoga Mat",
            category: "Fitness",
            price: 19.99,
            stock: 120,
            rating: 4.4,
            brand: "FlexFit",
            image: "https://picsum.photos/300/300?random=16"
        },
        {
            id: 17,
            name: "Dumbbell Set",
            category: "Fitness",
            price: 89.99,
            stock: 30,
            rating: 4.7,
            brand: "PowerGym",
            image: "https://picsum.photos/300/300?random=17"
        },
        {
            id: 18,
            name: "Running Shoes",
            category: "Footwear",
            price: 99.99,
            stock: 75,
            rating: 4.6,
            brand: "RunFast",
            image: "https://picsum.photos/300/300?random=18"
        },
        {
            id: 19,
            name: "Backpack",
            category: "Bags",
            price: 44.99,
            stock: 0,
            rating: 4.5,
            brand: "TravelGo",
            image: "https://picsum.photos/300/300?random=19"
        },
        {
            id: 20,
            name: "Travel Mug",
            category: "Kitchen",
            price: 18.99,
            stock: 140,
            rating: 4.3,
            brand: "SipMate",
            image: "https://picsum.photos/300/300?random=20"
        },   
    ]

    return (
        <div className="product-list">
            {
                products.map((product, index) => (
                    <div key={index} className="product-card">
                        {/* <h1 className="id-number">{product.id}</h1> */}
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Brand: {product.brand}</p>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Price: ${product.price}</p>
                        <p>
                            {product.stock > 50 ? (
                                <span style={{color: "green"}}>In Stock</span>
                            ) : (
                                <span style={{color: "red"}}>Out of Stock</span>
                            )}
                        </p>
                    </div>
                ))
            }
        </div>
    )

}

export default ProductList;