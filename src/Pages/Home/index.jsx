// useEffect siempre nos ayuda al consumir una API
import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from '../../Components/Card'
import { ProductDetail } from "../../Components/ProductDetail";
import { ProductDetailContext, CheckoutSideMenuContext, ShoppingCartContext } from "../../Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

const Home = () => {

    const {
        isProductDetailOpen
    } = useContext(ProductDetailContext)

    const {
        isCheckoutSideMenuOpen
    } = useContext(CheckoutSideMenuContext)

    const {
        items,
        setSearchByTitle
    } = useContext(ShoppingCartContext)

    return (
        <Layout>
            <p className='mb-6 font-medium'>Exclusive Products</p>

            <input 
                type='text' 
                placeholder='Search a product' 
                className='border rounded-2xl text-center p-1 mb-6 focus:outline-none w-80'
                onChange={(e) => setSearchByTitle(e.target.value)}
            />

            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mb-10'>
                {
                    items?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            {isProductDetailOpen && <ProductDetail />}
            {isCheckoutSideMenuOpen && <CheckoutSideMenu />}
        </Layout>
    );
}

export { Home }