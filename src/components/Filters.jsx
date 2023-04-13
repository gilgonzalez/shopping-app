import React, {  useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

const Filters = () => {

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const {setFilters, filters } = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  const handleChangeCategory = (event)=> {
    setFilters(prevState => ({
      ...prevState,
      category : event.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor="price">Precio Mínimo</label>
        <input 
          type="range" 
          id={minPriceFilterId}
          min='0'
          max='2000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice } €</span>
      </div>
      <label htmlFor={categoryFilterId}>Categoría</label>
      <select id={categoryFilterId} onChange={handleChangeCategory}>
        <option value="all"> Todas</option>
        <option value="laptops"> Portátiles</option>
        <option value="smartphones"> Móviles</option>
      </select>
    </section>
  )
}

export default Filters