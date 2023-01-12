import Image from "next/image";
export default function Product({ product }) {
    return (
        <>
            <Image src={product.picture} width={200} height={200} />
        </>
    )
}
export async function getStaticPaths() {

    const data = await fetch('http://localhost:4000/product')
        .then(response => response.json())
    const paths = data.map((product) => ({ params: { productId: product._id } }))
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const product = await fetch(`http://localhost:4000/product/${params.productId}`)
        .then(response => response.json())
    return {
        props: {
            product,
        },
    };
}