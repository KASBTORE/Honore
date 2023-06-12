import Product from "components/Product";
import Main from "components/Main";
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
export default function Search({ filteredProducts, category, categories }) {
    return (
        <>
            <div class="epix-breadcrumb-area mb-40">
                <div class="container">
                    <h4 class="epix-breadcrumb-title">{category}</h4>
                </div>
            </div>
            <Main products={filteredProducts} categories={categories} />
        </>
    )
}
export async function getServerSideProps({ params }) {
    const session = await getSession()
    const products = await fetch(`https://kabstore-7p9q.onrender.com/product`)
        .then(response => response.json())
    const categories = await fetch(`https://kabstore-7p9q.onrender.com/category`)
        .then(response => response.json())
    let carts = []
    if (session) {
        console.log("Doing this is in index", session);
        console.log(session.id);
        carts = await fetch(`https://kabstore-7p9q.onrender.com/user/${session.id}/cart`)
            .then(response => response.json())
        console.log("hello here area the carts", carts);
    }
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
            carts, categories
        },
    };
}