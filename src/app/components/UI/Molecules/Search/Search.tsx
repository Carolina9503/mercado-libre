
import React, { ChangeEvent } from "react";
import styles from "./Search.module.scss";
import search from "../../../../assets/ic_Search.png";
import Image from 'next/image';


interface SearchProps {
  onSearch: (searchValue: string) => void;
  placeholder?: string;
  onClick?: () => void;
  value?: string;
}

const Search = ({ onSearch, placeholder, onClick, value }: SearchProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search__input}
        onChange={handleSearch}
        placeholder={placeholder}
        value={value}
      />

      <button className={styles.search__button} onClick={onClick}>
        <Image src={search} alt='search'/>
      </button>
    </div>
  );
};

export default Search;
