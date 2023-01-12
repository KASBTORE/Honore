import Header1 from '../components/Header1'
import Main from '../components/Main'
import Product from '../components/Product'
export default function Home({ products }) {
  return (
    <>
      <Header1 />
      <Main products={products} />


    </>
  )
}

export async function getServerSideProps() {
  const products = await fetch('http://localhost:4000/product')
    .then(response => response.json())

  return {
    props: {
      products
    }
  }
}