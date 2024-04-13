import React from "react";
import styles from "./CardItem.module.scss";
import Image from "next/image";
import shipping from "../../../../assets/ic_shipping.png";

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
          {true && <Image src={shipping} alt="shipping" />}

          <p className={styles.cardItem__left__body__description}>
            {description}
          </p>
          <p>Completo unico!</p>
        </div>
        <span className={styles.cardItem__left__place}>{place}</span>
      </div>
    </div>
  );
};

export default CardItem;
