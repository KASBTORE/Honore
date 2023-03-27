import Header1 from '../components/Header1'
import Main from '../components/Main'
import Product from '../components/Product'
import Loader from 'components/Loader'
import { useSession, getSession } from "next-auth/react";
export default function Home({ products, carts, isLoading }) {
  const { data: session, status } = useSession()
  console.log("This is the session", carts);
  console.log(isLoading);
  return (
    <>
      {/* {isLoading && <Loader />} */}
      <Header1 carts={carts} />
      <Main products={products} />


    </>
  )
}

export async function getServerSideProps(ctx) {
  const products = await fetch('http://localhost:4000/product')
    .then(response => response.json())
  const session = await getSession(ctx)
  const carts = []
  const { pathname } = ctx
  if (session) {
    console.log(session.id, "Thr id of the user");
    const carts = await fetch(`http://localhost:4000/user/${session.id}/cart`)
      .then(response => response.json())
    let isLoading = true
    return {
      props: {
        products, isLoading, carts
      }
    }
  }
  return {
    props: {
      products, carts
    }
  }

}
