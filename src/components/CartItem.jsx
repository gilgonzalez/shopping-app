import React from 'react'


const CartItem = ({thumbnail, title, price,addToCart, quantity,removeFromCart, key }) => {
  return (
    <li key={key}>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button type='button' onClick={addToCart}>+</button>
        <button type='button' onClick= {removeFromCart}>
            X
        </button>
      </footer>
    </li>
  )
}

export default CartItem