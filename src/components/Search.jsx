import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import useQuery from "../hooks/UseQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get("search");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //history(`/?search=` + searchText)
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            //console.log(value);

            history("/?search=" + value);
          }}
          placeholder="Ingrese el nombre"
        />
        <button className={styles.searchBoton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;
