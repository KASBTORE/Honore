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
    const session = await getSession()
    const products = await fetch(`https://kabstore-7p9q.onrender.com/product`)
        .then(response => response.json())
    const carts = await fetch(`https://kabstore-7p9q.onrender.com/user/${session.id}/cart`)
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