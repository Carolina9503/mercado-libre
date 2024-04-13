import React from "react";
import styles from "./BreadCrumbs.module.scss";
import Link from "next/link";
import { EnumBreadCrumbs } from "@/app/utils/Enums/EnumBreadCrumbs";

export interface IBreadCrumb {
  id: number;
  label: string;
  href: string;
  active: boolean;
}
interface BreadcrumbsProps {
  items: IBreadCrumb[];
  returnFavorite?: boolean;
  urlFavorite?: string;
}

const BreadCrumbs = ({
  items,
  returnFavorite = false,
  urlFavorite = "",
}: BreadcrumbsProps) => {
  return (
    <ul className={styles.breadcrumbs}>
      {items?.map((item) => (
        <li className={styles.breadcrumbs__item} key={item.id}>
          {item.active ? (
            <Link href={item.href} className={styles.breadcrumbs__link}>
              {EnumBreadCrumbs[item.label] || item.label}
            </Link>
          ) : (
            <span className={styles.breadcrumbs__link}>
              {EnumBreadCrumbs[item.label] || item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
