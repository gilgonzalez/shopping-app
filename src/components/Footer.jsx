import React from 'react'
import './Footer.css'
import { useFilters } from '../hooks/useFilters'

export const Footer = () => {

  const {filters} = useFilters()
  return (
    <footer className='footer'>
      <h4>Prueba técnica de React </h4>
      <span>Francisco javier gil </span>
      <h5>Shopping cart con useContext & useReducer</h5>
      <p>Filtrado por precio : {filters.minPrice}</p>
      <p>Filtrado por categoria : {filters.category}</p>
    </footer>
  )
}
