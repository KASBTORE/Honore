import Product from "components/Product";
import Main from "components/Main";
export default function Search({ filteredProducts, category }) {
    return (
        <>
            <div class="epix-breadcrumb-area mb-40">
                <div class="container">
                    <h4 class="epix-breadcrumb-title">{category}</h4>
                </div>
            </div>
            <Main products={filteredProducts} />
        </>
    )
}
export async function getServerSideProps({ params }) {
    const products = await fetch(`http://localhost:4000/product`)
        .then(response => response.json())
    const carts = await fetch(`http://localhost:4000/cart`)
        .then(response => response.json())
    const filteredProducts = products.filter(
        product => {
            return (

                product
                    .category
                    .toLowerCase()
                    .includes(params.categoryId)
            );
        }
    );
    const category = params.categoryId
    return {
        props: {
            filteredProducts,
            category,
            carts
        },
    };
}