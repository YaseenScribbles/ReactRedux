import { useDispatch } from 'react-redux';
import { add, remove } from '../store/cartSlice';
import { useLocation } from 'react-router-dom';

export default function Card(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  const updateCart = (product) => {
    if (pathname.toLowerCase() == '/products') {
      dispatch(add(product))
    } else if (pathname.toLowerCase() == '/cart') {
      dispatch(remove(product.id))
    }
  }

  return (
    <>
      <div  
        className="card p-1 m-2"     
        style={{ width:'20rem' }}  
      >
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ height: '12rem',width: '100%', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column align-items-center justify-content-between">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text h3"> ₹ {product.price}</p>
        </div>
        <div className="card-footer bg-white text-center">
          <a href="#" type="button" className={`btn ${pathname === '/cart' ? 'btn-danger' : 'btn-info'} text-light`} onClick={() => updateCart(product)}>
            {  pathname === '/cart' ? ('Delete') : ('Add to cart')  }
          </a>
        </div>
      </div>
    </>
  );
}
