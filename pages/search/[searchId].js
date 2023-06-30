import Product from "components/Product";
import Main from "components/Main";
export default function Search({ filteredProducts, word, categories }) {
    return (
        <>
            <div class="epix-breadcrumb-area mb-40">
                <div class="container">
                    <h4 class="epix-breadcrumb-title">SEARCH RESULTS</h4>
                    <div class="epix-breadcrumb">
                        <ul>
                            <li><span>{word}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Main products={filteredProducts} categories={categories} />
        </>
    )
}

export async function getServerSideProps({ params }) {
    const products = await fetch(`https://kabstore-7p9q.onrender.com/product`)
        .then(response => response.json())
    const categories = await fetch(`https://kabstore-7p9q.onrender.com/category`)
        .then(response => response.json())
    const filteredProducts = products.filter(
        product => {
            return (

                product
                    .category
                    .toLowerCase()
                    .includes(params.searchId)
                ||

                product
                    .name
                    .toLowerCase()
                    .includes(params.searchId)
            );
        }
    );
    const word = params.searchId
    return {
        props: {
            filteredProducts,
            word,
            categories
        },
    };
}