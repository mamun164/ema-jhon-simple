import React, { useEffect, useState } from 'react';
import {Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() =>{
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product=> product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity= quantity;
                savedCart.push(addedProduct);
                // console.log(addedProduct);
            }
            // console.log(addedProduct);
        }
        setCart(savedCart);
    }, [products])

    const addProductToCart = (selectedProduct) =>{
        let newCart = []
        const exists =cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart= [...cart, selectedProduct]
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity= exists.quantity + 1;
            newCart = [...rest, exists];
        }
        //  newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
             
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    addProductToCart ={addProductToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'><button>Review Order</button></Link>
                    
                    </Cart>
            </div>
        </div>
    );
};

export default Shop;