'use client';
import styles from '@/styles/ProductCard.module.scss';

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    images: string[];
  };
  showAddToCart: boolean;
}

const ProductCard = ({ product, showAddToCart }: ProductProps) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img
        src={product.images[0]}
        alt={product.title}
        className={styles.image}
      />
      {product.discountPercentage > 0 && (
        <span className={styles.discount}>-{product.discountPercentage}%</span>
      )}
    </div>
    <div className={styles.info}>
      <h2 className={styles.name}>{product.title}</h2>
      <p className={styles.price}>
        ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}{' '}
        {product.discountPercentage > 0 && (
          <span className={styles.original}>${product.price.toFixed(2)}</span>
        )}
      </p>
      <p className={styles.rating}>⭐ {product.rating.toFixed(1)}</p>
      <p className={styles.stock}>In stock: {product.stock}</p>
      {showAddToCart && <button className={styles.button}>Add to cart</button>}
    </div>
  </div>
);

export default ProductCard;
