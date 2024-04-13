import React from "react";
import styles from "./CardItem.module.scss";

interface CardItemProps {
  image: string;
  price: string;
  description: string;
  place: string;
}

const CardItem = ({ image, price, description, place }: CardItemProps) => {
  return (
    <div className={styles.cardItem}>
      <img src={image} alt="Item" />
      <div className={styles.cardItem__left}>
        <div className={styles.cardItem__left__body}>
          <span>{price}</span>
          <p>{description}</p>
        </div>
        <span className={styles.cardItem__left__place}>{place}</span>
      </div>
    </div>
  );
};

export default CardItem;
