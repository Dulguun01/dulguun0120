import { useEffect } from "react";
import { useState } from "react";
import SeachIcon from "../Icons/SearchIcons"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div>
                <Link to={"/"} className="brand" >
                  My blog
                </Link>
              </div>
              <div>
              <form className="position-relative" action="">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search Medium"
            />
            <button className="btn search-button">
              <SeachIcon />
            </button>
          </form>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <nav>
              <ul>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <a href="">{cat.name}</a>
                  </li>
                ))}
                <li>
                  <Link to={"chartscreen"}>chartscreen</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
