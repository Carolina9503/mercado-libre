import React from "react";
import styles from "./CardItem.module.scss";
import Image from "next/image";
import shipping from "../../../../assets/ic_shipping.png";
import { useRouter } from "next/navigation";
import { currencyFormatMoviments } from "@/app/functions/formatAmout";

interface CardItemProps {
  id: string;
  image: string;
  price: string;
  description: string;
  place: string;
  isFreeShipping: boolean;
}

const CardItem = ({
  id,
  image,
  price,
  description,
  place,
  isFreeShipping,
}: CardItemProps) => {
  const router = useRouter();
  const handleCardItemClick = () => {
    router.push(`/items/:${id}`);
  };
  return (
    <main className={styles.cardItem} onClick={() => handleCardItemClick()}>
      <img src={image} alt="Item" />
      <div className={styles.cardItem__left}>
        <div className={styles.cardItem__left__body}>
          <span>{currencyFormatMoviments(parseInt(price)) ?? ""}</span>
          {isFreeShipping && <Image src={shipping} alt="shipping" />}

          <p className={styles.cardItem__left__body__description}>
            {description}
          </p>
        </div>
        <span className={styles.cardItem__left__place}>{place ?? ""}</span>
      </div>
    </main>
  );
};

export default CardItem;
