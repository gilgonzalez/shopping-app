import { useContext } from "react";
import {CartContext} from '../context/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  if(context === undefined) {
    throw new Error('Estas utilizando este contexto en un lugar que no deberias')
  }
  return context
}