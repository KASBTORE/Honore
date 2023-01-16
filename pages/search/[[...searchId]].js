import Product from "components/Product";
import Main from "components/Main";
export default function Search({ filteredProducts, word }) {
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
            <Main products={filteredProducts} />
        </>
    )
}

export async function getServerSideProps({ params }) {
    const products = await fetch(`http://localhost:4000/product`)
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
            word
        },
    };
}