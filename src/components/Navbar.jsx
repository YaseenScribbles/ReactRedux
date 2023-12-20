import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const { data:cartProducts} = useSelector((state) => state.cart);
  const handleClick = (e) => {
    setActiveLink(e);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Redux ToolKit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/products"}
                  className={`nav-link ${
                    activeLink === "products" ? "active" : ""
                  }`}
                  aria-current="page"
                  onClick={() => handleClick("products")}
                >
                  Products
                </Link>
              </li>
            </ul>
            <div className="position-relative">
              <Link
                to={"/cart"}
                className={`nav-link ${activeLink == "cart" ? "active" : ""}`}
                onClick={() => handleClick("cart")}
              >
                <box-icon name="cart"></box-icon>
                <span className="position-absolute bottom-50 start-50 badge rounded-pill bg-danger">
                  {cartProducts.length != 0 && cartProducts.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
