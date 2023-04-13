import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

export function Products ( { products }){

  const { addToCart, cart, removeFromCart } = useCart()

  const checkItemInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.slice(0,10).map(product => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>
                  {product.title}
                </strong> - $ {product.price}
              </div>
              <div>
                <button type='button' style={{backgroundColor:'cadetblue'}} onClick={()=> addToCart(product)}>
                  <AddToCartIcon/> 
                </button>
                {
                    checkItemInCart(product) && (
                      <button type='button' style={{marginLeft:'8px', backgroundColor:'tomato'}} onClick={()=> removeFromCart(product)}>
                        <RemoveFromCartIcon/>
                      </button>
                    )
                }
              </div>
            </li>
          ))
        }
      </ul>

    </main>
  )
}