import {useRouter} from 'next/router'
import Link from 'next/link'

function ProductDetail(){

    const router = useRouter()
    const productId = router.query.productId

    return (
        <div>
            <Link href="/">
            <a>Home</a>
            </Link> &nbsp; || &nbsp;
            <Link href="/product">
                <a>Products</a>
            </Link>
            <h2>Details about product {productId}</h2>
        </div>
    )
}

export default ProductDetail