import React from "react";
import styles from "./Details.module.scss";
import Image from "next/image";
import Button from "../../UI/Atoms/Button/Button";

interface CardItemProps {
  detailItem: {
    image: string;
    price: string;
    title: string;
    description: string;
  };
}

const Details = ({ detailItem }: CardItemProps) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.cardItem__main}>
        <img src={detailItem.image} alt="Item" />
        <div className={styles.cardItem__main__left}>
          <div className={styles.cardItem__main__left__body}>
            <p className={styles.cardItem__main__left__body__status}>Nuevo - 234 vendidos</p>
            <p className={styles.cardItem__main__left__body__title}>
              {detailItem.title}
            </p>
            <div className={styles.cardItem__main__left__body__price}>
                <span className={styles.cardItem__main__left__body__price__amount}>$ {detailItem.price}</span>
                <span className={styles.cardItem__main__left__body__price__decimal}>00</span>
            </div>
            <Button text="Comprar" />
          </div>
        </div>
      </div>
      <div className={styles.cardItem__description}>
        <small>Descripción del producto</small>
        <p>{detailItem.description}</p>
      </div>
    </div>
  );
};

export default Details;
