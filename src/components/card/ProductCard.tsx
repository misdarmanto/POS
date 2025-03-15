import React from "react";
import Typography from "../typography/Typography";
import Button from "../button/Button";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  onAddToCart,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="caption" className={styles.price}>
          {price}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
