import Header1 from '../components/Header1'
import Main from '../components/Main'
import Product from '../components/Product'
export default function Home({products}) {
  return (
    <>
            <Header1/>
              <div class="epix-breadcrumb-area mb-40">
            <div class="container">
                <h4 class="epix-breadcrumb-title">SHOP PAGE</h4>
                <div class="epix-breadcrumb">
                    <ul>
                        <li>Home</li>
                        <li><span>Shop Page</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <Main products={products}/>


    </>
  )
}

export async function getServerSideProps() {
  const products= await   fetch('http://localhost:4000/product')
  .then(response => response.json())                     

  return {
    props: {
      products
    }
  }
}