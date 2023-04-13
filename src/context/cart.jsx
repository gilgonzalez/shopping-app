import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";


//1 create context
export const CartContext = createContext()



//2 create the Provider of the context
export function CartProvider ({children}) {

  //3 create the functionality of the context

  //USING THE REDUCER

  const {addToCart,removeFromCart,clearCart, state} = useCartReducer()

 

  // const addToCart = product => {
  //   //Check if there is already any item like the new item to add
  //   const productInCartIndex = cart.findIndex(item => item.id ===product.id)

  //   if(productInCartIndex >= 0){ 
  //     //Using structuredClone
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     setCart(newCart)
  //     return ;
  //   }
  //   setCart(prevState => ([
  //     ...prevState, 
  //     {
  //       ...product, quantity : 1
  //     }
  //   ]))
  // }


  // const removeFromCart = (product)=> {
  //   setCart(prevState => prevState.filter( item => item.id !== product.id)
  //   )
  // }

  // const clearCart = ()=> setCart([])
  
  const total = state.reduce(
    (acc, curr)=> acc + curr.price*curr.quantity, 
    0
  )

  //4 Return the provider with all the functionalities that you will use
  return (
    <CartContext.Provider value={{
      cart : state, addToCart, clearCart, removeFromCart,total
    }}
    >
      {children}
    </CartContext.Provider>
  )
}