// FeaturedProducts.js
import { useState } from 'react';
import ProductQuickView from './ProductQuickView';
import '../styles/FeaturedProducts.css';

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  // Sample product data - enhanced with additional properties needed for quick view
  const products = [
    {
      id: 1,
      name: "Minimalist Sneaker",
      category: "footwear",
      price: 89.99,
      oldPrice: 119.99,
      rating: 4.8,
      reviewCount: 142,
      colors: ["#2D3748", "#E53E3E", "#F6AD55"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
      ],
      description: "Premium minimalist sneakers crafted from sustainable materials. Features memory foam insoles for ultimate comfort and a sleek design that pairs with any outfit.",
      sku: "SH-SN-001",
      inStock: true,
      isNew: true,
      isTrending: true
    },
    {
      id: 2,
      name: "Classic Wool Coat",
      category: "outerwear",
      price: 149.99,
      oldPrice: 199.99,
      rating: 4.6,
      reviewCount: 89,
      colors: ["#1A202C", "#4A5568", "#CBD5E0"],
      sizes: ["S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80"
      ],
      description: "Timeless wool coat with a modern fit. Perfect for transitional weather, featuring a notched lapel and premium wool blend construction.",
      sku: "SH-WC-002",
      inStock: true,
      isNew: false,
      isTrending: true
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      category: "accessories",
      price: 79.99,
      oldPrice: null,
      rating: 4.9,
      reviewCount: 203,
      colors: ["#744210", "#1A202C", "#E53E3E"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1735&q=80",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1735&q=80",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1735&q=80"
      ],
      description: "Genuine leather crossbody bag with adjustable strap. Features multiple compartments and a sleek, minimalist design that complements any style.",
      sku: "SH-CB-003",
      inStock: true,
      isNew: true,
      isTrending: false
    },
    {
      id: 4,
      name: "Slim Fit Jeans",
      category: "bottoms",
      price: 59.99,
      oldPrice: 79.99,
      rating: 4.5,
      reviewCount: 167,
      colors: ["#3182CE", "#1A202C", "#4A5568"],
      sizes: ["28", "30", "32", "34", "36"],
      images: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80",
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80",
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80"
      ],
      description: "Comfortable slim fit jeans made from premium denim with just the right amount of stretch. Perfect for both casual and dressed-up occasions.",
      sku: "SH-JN-004",
      inStock: true,
      isNew: false,
      isTrending: false
    },
    {
      id: 5,
      name: "Cashmere Sweater",
      category: "tops",
      price: 129.99,
      oldPrice: 159.99,
      rating: 4.7,
      reviewCount: 94,
      colors: ["#F56565", "#ED8936", "#ECC94B"],
      sizes: ["S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1705&q=80",
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1705&q=80",
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1705&q=80"
      ],
      description: "Luxurious 100% cashmere sweater with a relaxed fit. Incredibly soft and warm, perfect for chilly days and elegant evenings.",
      sku: "SH-SW-005",
      inStock: true,
      isNew: true,
      isTrending: true
    },
    {
      id: 6,
      name: "Designer Sunglasses",
      category: "accessories",
      price: 149.99,
      oldPrice: 189.99,
      rating: 4.8,
      reviewCount: 231,
      colors: ["#1A202C", "#4A5568", "#718096"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
      ],
      description: "Designer sunglasses with UV400 protection and polarized lenses. Lightweight frame with comfortable nose pads for all-day wear.",
      sku: "SH-SG-006",
      inStock: true,
      isNew: false,
      isTrending: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'footwear', label: 'Footwear' },
    { id: 'tops', label: 'Tops' },
    { id: 'bottoms', label: 'Bottoms' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'accessories', label: 'Accessories' }
  ];

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToCart = (product) => {
    // Add to cart logic - you can integrate this with your cart system
    console.log('Added to cart:', product);
    // You might want to show a notification or toast here
  };

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll animate-slide-bottom animate-delay-2">Featured Collection</h2>
          <p className="section-subtitle">Discover our carefully curated selection of premium products</p>
        </div>

        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">
            View All Products
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Product Quick View Modal */}
        <ProductQuickView
          product={selectedProduct}
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
          onAddToCart={handleAddToCart}
        />
      </div>
    </section>
  );
};

const ProductCard = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleQuickViewClick = (e) => {
    e.stopPropagation();
    onQuickView(product);
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={currentImage} 
          alt={product.name} 
          className="product-image"
        />
        
        {product.isNew && <span className="product-badge new">New</span>}
        {product.isTrending && <span className="product-badge trending">Trending</span>}
        
        <button 
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={handleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "#EF4444" : "none"} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" 
                  stroke={isFavorite ? "#EF4444" : "currentColor"} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={`product-actions ${isHovered ? 'visible' : ''}`}>
          <button className="action-btn quick-view" onClick={handleQuickViewClick}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Quick View
          </button>
          <button className="action-btn add-to-cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-meta">
          <div className="price-container">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          
          <div className="rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill={i < Math.floor(product.rating) ? "#F59E0B" : "none"} 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                        stroke="#F59E0B" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                </svg>
              ))}
            </div>
            <span className="rating-value">{product.rating}</span>
          </div>
        </div>

        <div className="color-options">
          {product.colors.map((color, index) => (
            <button 
              key={index} 
              className="color-option" 
              style={{ backgroundColor: color }}
              aria-label={`Color option ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;