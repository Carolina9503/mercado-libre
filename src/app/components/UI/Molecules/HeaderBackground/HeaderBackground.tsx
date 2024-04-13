
import React from 'react'
import logo from "../../../../assets/Logo_ML.png";
import styles from "./HeaderBackground.module.scss";
import Image from 'next/image';


interface HeaderBackgroundProps {
    children: React.ReactNode
}

const HeaderBackground = ({children}:HeaderBackgroundProps) => {
  return (
    <div className={styles.headerBackground}>
      <Image src={logo} alt="logo"/>
        {children}
    </div>
  )
}

export default HeaderBackground