"use client";
import { GetProductDetails } from "@/app/models/productDetail";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../../UI/Atoms/Button/Button";
import styles from "./Details.module.scss";
import { currencyFormatMoviments } from "@/app/functions/formatAmout";

const Details = () => {
  const [productDetails, setProductDetails] = useState<GetProductDetails>();

  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:53000/api/items/${params.id.slice(3)}`)
      .then((res) => {
        setProductDetails(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.cardItem}>
      {(productDetails && (
        <>
          <div className={styles.cardItem__main}>
            <img
              src={productDetails?.itemDetail.picture}
              alt="Imagen de Item no encontrado"
            />
            <div className={styles.cardItem__main__left}>
              <div className={styles.cardItem__main__left__body}>
                <p className={styles.cardItem__main__left__body__status}>
                  {productDetails?.itemDetail.sold_quantity ?? ""}
                </p>
                <p className={styles.cardItem__main__left__body__title}>
                  {productDetails?.itemDetail.title
                    ? productDetails?.itemDetail.title
                    : ""}
                </p>
                <div className={styles.cardItem__main__left__body__price}>
                  <span
                    className={styles.cardItem__main__left__body__price__amount}
                  >
                    {productDetails?.itemDetail.price.currency}
                    {currencyFormatMoviments(
                      parseInt(productDetails?.itemDetail.price.amount)
                    ) ?? ""}
                  </span>
                  <span
                    className={
                      styles.cardItem__main__left__body__price__decimal
                    }
                  >
                    {productDetails?.itemDetail.price.decimals
                      ? productDetails?.itemDetail.price.decimals
                      : "00"}
                  </span>
                </div>
                <Button text="Comprar" />
              </div>
            </div>
          </div>
          <div className={styles.cardItem__description}>
            <small>Descripción del producto</small>
            <p>
              {productDetails?.itemDetail.description
                ? productDetails?.itemDetail.description
                : ""}
            </p>
          </div>
        </>
      )) || <div>Loading...</div>}
    </div>
  );
};

export default Details;
