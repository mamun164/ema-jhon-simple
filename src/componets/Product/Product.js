import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'


const Product = (props) => {
    // console.log(props.product)
    const {addProductToCart, product} = props;
    const {name, img, price, seller, ratings } = product;
    return(
        <div className='product'>
           <img src={img} alt="No img available"></img> 
          <div className='product-info'>
          <p className='product-name'>{name}</p>
           <p>Price: ${price}</p>
           <p><small>Seller: {seller}</small></p>
           <p><small>Rating: {ratings}</small></p>
        </div>
        <button onClick={()=> addProductToCart(product)} className='button-cart'>
            <p className='button-text'>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

        </button>
        </div>
    );
};

export default Product;