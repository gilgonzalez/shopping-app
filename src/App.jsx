import { useState } from 'react'
import {Products } from './components/Products'
import {products as initialProducts} from './mock/product.json'
import Header from './components/Header'
import {useFilters} from './hooks/useFilters'
import {Footer} from './components/Footer'
import { Cart } from './components/Cart'
import {  CartProvider } from './context/cart'
function App() {

  const [products] = useState(initialProducts)
  const { filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <div className="App">
      <CartProvider>
        <Header/>
        <Cart/>
        <Products products={filteredProducts}/>
        <Footer />
      </CartProvider>
    </div>
  )
}

export default App
