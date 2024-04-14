import React from "react";
import styles from "./BreadCrumbs.module.scss";
import Link from "next/link";
import { randomKey } from "@/app/functions/randomKey";


interface BreadcrumbsProps {
  items: string[];
}

const BreadCrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <ul className={styles.breadcrumbs}>
      {items &&
        items?.length > 0 &&
        items?.map((item) => (
          <li
            className={styles.breadcrumbs__item}
            key={randomKey("row-" + item)}
          >
            <Link href="" className={styles.breadcrumbs__link}>
              {item}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default BreadCrumbs;
