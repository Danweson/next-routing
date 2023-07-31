import Link from "next/link"
import {useRouter} from "next/router"
import AxeptioInjector from "../components/Axeptio"

function Home(){

    const router = useRouter()

    const handleClick = () => {

         console.log('Placing your order')
         router.replace('/product')
    }

    return (
        <div>
            <Link href="/blog">
                <a>Blog</a>
            </Link> &nbsp; || &nbsp;
            <Link href="/product">
                <a>Products</a>
            </Link>

            <h1>Home Page</h1>
            <button onClick={handleClick}>Place Order</button>
            <AxeptioInjector/>
        </div>
    )
}

export default Home