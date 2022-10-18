import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products , previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleRemoveItem = (id) =>{
      const remaining = cart.filter(product => product.id !== id)
    setCart(remaining);
    removeFromDb(id);
    };

    const clearCart = () =>{
      setCart([]);
      deleteShoppingCart();
  }
    return (
        <div className='shop-container'>
          <div className='orders-product-container'>
            {
                cart.map(product => <ReviewItem 
                key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                ></ReviewItem>)
            }
            {
              cart.length === 0 && <h2>No Item Review Please <Link to='/'>Visit Shop</Link></h2>
            }
          </div>
          <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Orders;