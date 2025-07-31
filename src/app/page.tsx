'use client';
import { useEffect, useState } from 'react';
import useAuth from '@/store/auth';
import api from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import styles from '@/styles/Home.module.scss';

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  images: string[];
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const user = useAuth(state => state.user);

  // статические категории
  const categories = ['All', 'beauty', 'fragrances', 'furniture', 'groceries'];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const url =
          selectedCategory === 'All'
            ? '/products?limit=12'
            : `/products/category/${encodeURIComponent(selectedCategory)}?limit=12`;
        const { data } = await api.get<{ products: Product[] }>(url);
        setProducts(data.products);
      } catch {
        setError('Unable to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner} />
      </div>
    );
  }

  if (error) {
    return <div className={styles.message}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.tab} ${cat === selectedCategory ? styles.active : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            showAddToCart={!!user}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
