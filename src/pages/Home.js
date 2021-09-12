import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { useState, useEffect } from 'react'
import { useApi } from '../hooks/useApi'


export const Home = () => {
  const {products} = useApi('products')
  return(
    <div>
      <Hero />
      <ProductList data={products} />
    </div>
  )

}
  

export default Home;
