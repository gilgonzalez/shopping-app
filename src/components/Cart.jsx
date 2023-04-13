import {ClearCartIcon, CartIcon} from './Icons.jsx'
import {useId} from 'react'
import './Cart.css' 
import { useCart } from '../hooks/useCart.jsx';
import CartItem from './CartItem.jsx';

export function Cart(){

  const cartCheckboxId = useId();
  const {cart, clearCart, addToCart, removeFromCart, total} = useCart();


  return ( 
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product=><CartItem 
              key={product.id} 
              {...product} 
              addToCart={()=>addToCart(product)}
              removeFromCart={()=>removeFromCart(product)}
              />)
          }
        </ul>
        <button type='button' onClick={()=>clearCart()}>
          <ClearCartIcon/>
        </button>
        <div>
          <small>Total : $ {total}</small>
        </div>
      </aside>
    </>
  )

}