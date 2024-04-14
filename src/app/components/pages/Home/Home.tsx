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
    console.log('search', search)
  useEffect(() => {
    axios
      .get(`http://localhost:53000/api/items?q=${search}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
    <BreadCrumbs items={product?.categories!}/>
      {product && product.items.length > 0 && (
        <div className={styles.mainContainer}>
          {product.items.map((item, id) => (
            <>
              <CardItem
                key={randomKey("row-" + id)}
                id={item.id}
                image={item.picture}
                price={item.price.amount}
                description={item.title}
                place={"Capital Federal"}
                isFreeShipping={item.free_shipping}
              />
              <hr className={styles.mainContainer__hr} />
            </>
          ))}
        </div>
      ) || <div className={styles.content}>No se encontraron productos disponibles para esta Categoria</div>}
    </>
  );
};

export default Home;
