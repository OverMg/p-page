import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

export function Search() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" />
        <button className={styles.searchButton} type="submint">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
