import React, { useEffect, useState } from 'react'
import ProductCard from '../components/product-card';
import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get('query');
  const location = useLocation();
  console.log("location",location);

  useEffect(() => {
    async function fetchData() {
      const response = await axios("https://dummyjson.com/products/search?q="+query);
      const data = response.data;
      setProducts(data.products);
    }

    fetchData();
  }, [query])

  function onQuerySubmit(formData) {
    const data = Object.fromEntries(formData);
    setParams({
      ...params,
      query: data.query
    })
  }

  return (
    <div className='space-y-4'>
      <h1 className='text-lg my-4 '>All Products: {query}</h1>
      <form action={onQuerySubmit}>
        <input type="text" defaultValue={query} placeholder='e.g. polish' name='query' className='border px-4 py-2 w-full' />
      </form>
      <div className='flex flex-wrap gap-2'>{products.map(item => (<ProductCard key={item.id} product={item} />))}</div>
    </div>
  )
}

export default Products
