import Header1 from '../components/Header1'
import Main from '../components/Main'
import Product from '../components/Product'
import Loader from 'components/Loader'
export default function Home({ products, carts, isLoading }) {
  console.log(isLoading);
  return (
    <>
      {isLoading && <Loader />}
      <Header1 carts={carts} />
      <Main products={products} />


    </>
  )
}

export async function getServerSideProps(ctx) {
  const products = await fetch('https://kabstore-7p9q.onrender.com/product')
    .then(response => response.json())
  const carts = await fetch('https://kabstore-7p9q.onrender.com/cart')
    .then(response => response.json())

  const { pathname } = ctx
  if (pathname === '/') {
    let isLoading = true
    return {
      props: {
        products, carts, isLoading
      }
    }
  }
  return {
    props: {
      products, carts
    }
  }

}
