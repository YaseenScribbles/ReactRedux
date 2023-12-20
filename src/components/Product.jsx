import { useEffect } from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";
import { getProducts } from "../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { status } from "../Utils/Status";
import Loading from "./Loading";

export default function Products() {
  // const [products, setProducts] = useState([]);
  const { pathname } = useLocation();

  const { data: products, status: fetchingStatus } = useSelector(
    (state) => state.products
  );
  const { data: cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result))
    //   .catch((error) => console.error(error));

    dispatch(getProducts());
  }, []);

  return (
    <>
      {fetchingStatus == status.LOADING ? (
        <Loading />
      ) : (
        <>
          <div className="header">
            <h1 className="text-center">{`${
              pathname == "/cart" ? "Cart" : "Products"
            } Dashboard`}</h1>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="row mb-5">
              {pathname == "/products"
                ? products.map((product) => {
                    return (
                      <div key={product.id} className="col-sm-6 col-md-3">
                        <Card product={product} />
                      </div>
                    );
                  })
                : cartProducts.map((product) => {
                    return (
                      <div key={product.id} className="col-sm-12">
                        <div className="row justify-content-center">
                          <Card product={product} />
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
