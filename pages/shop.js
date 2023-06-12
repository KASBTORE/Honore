import Header1 from '../components/Header1'
import Main from '../components/Main'
import { useSession, getSession } from "next-auth/react";
export default function Home({ products, carts, isLoading, categories }) {
  const { data: session, status } = useSession()
  console.log("This is the session", carts);
  console.log(isLoading);
  return (
    <>
      {/* {isLoading && <Loader />} */}
      <Header1 carts={carts} />
      <Main products={products} categories={categories} />


    </>
  )
}

export async function getServerSideProps(ctx) {
  const products = await fetch('https://kabstore-7p9q.onrender.com/product')
    .then(response => response.json())
  const categories = await fetch('https://kabstore-7p9q.onrender.com/category')
    .then(response => response.json())

  const session = await getSession(ctx)
  const carts = []
  const { pathname } = ctx
  if (session) {
    console.log(session.id, "Thr id of the user");
    const carts = await fetch(`https://kabstore-7p9q.onrender.com/user/${session.id}/cart`)
      .then(response => response.json())
    let isLoading = true
    return {
      props: {
        products, isLoading, carts, categories
      }
    }
  }
  return {
    props: {
      products, carts, categories
    }
  }

}
