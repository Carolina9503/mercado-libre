"use client";
import { randomKey } from "@/app/functions/randomKey";
import { GetProduct } from "@/app/models/product";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BreadCrumbs from "../../UI/Molecules/BreadCrumbs/BreadCrumbs";
import CardItem from "../../UI/Molecules/CardItem/CardItem";
import styles from "./Home.module.scss";

const Home = () => {
  const [product, setProduct] = useState<GetProduct>();
  const searchParams = useSearchParams();

  const search = searchParams.get("search");


  useEffect(() => {
    axios
      .get(`http://localhost:53000/api/items?q=${search}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [search]);

  return (
    <>
      <BreadCrumbs items={product?.categories!} />
      {(product && product.items.length > 0 && (
        <div className={styles.mainContainer}>
          {product.items.map((item, id) => (
            <div key={randomKey("row-" + id)}>
              <CardItem
                id={item.id}
                image={item.picture}
                price={item.price.amount}
                description={item.title}
                place={item.seller}
                isFreeShipping={item.free_shipping}
              />
              <hr className={styles.mainContainer__hr} />
            </div>
          ))}
        </div>
      )) || <div className={styles.content}>Loading.......</div>}
    </>
  );
};

export default Home;
