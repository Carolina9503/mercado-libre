import Image from "next/image";
import { ChangeEvent, FormEvent } from "react";
import search from "../../../../assets/ic_Search.png";
import styles from "./Search.module.scss";

interface SearchProps {
  onSearch: (searchValue: string) => void;
  placeholder?: string;
  onClick?: (event: FormEvent) => void;
  value?: string;
}

const Search = ({ onSearch, placeholder, onClick, value }: SearchProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <form className={styles.search} onSubmit={onClick}>
      <input
        type="text"
        className={styles.search__input}
        onChange={handleSearch}
        placeholder={placeholder}
        value={value}
      />

      <button type="submit" className={styles.search__button}>
        <Image src={search} alt="search" />
      </button>
    </form>
  );
};

export default Search;
