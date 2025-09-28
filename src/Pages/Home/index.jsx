// useEffect siempre nos ayuda al consumir una API
import { useContext, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from '../../Components/Card'
import { ProductDetail } from "../../Components/ProductDetail";
import { ProductDetailContext, CheckoutSideMenuContext, ShoppingCartContext } from "../../Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { PiSmileySadThin } from "react-icons/pi";

const Home = () => {

    const {
        isProductDetailOpen,
        setIsProductDetailOpen
    } = useContext(ProductDetailContext)

    const {
        isCheckoutSideMenuOpen
    } = useContext(CheckoutSideMenuContext)

    const {
        items,
        setSearchByTitle,
        searchByTitle,
        filteredItems
    } = useContext(ShoppingCartContext)

    // Versión larga y no optimizada
    // const renderView = () => {
    //     // Si hay búsqueda
    //     if (searchByTitle?.length > 0) {
    //         // Y si encontramos algo 
    //         if (filteredItems?.length > 0) {
    //             return (
    //                 filteredItems?.map((item) => (
    //                     <Card key={item.id} data={item} />
    //                 ))
    //             )
    //         }
    //         // Y si no encontramos algo
    //         else {
    //             return (
    //                 <div>We couldn't find the product :(</div>
    //             )
    //         }
    //     }
    //     // Si no hay búsqueda
    //     else {
    //         return (
    //             items?.map((item) => (
    //                 <Card key={item.id} data={item} />
    //             ))
    //         )
    //     }
    // }

    // Obtenemos la categoría sin el /
    const category = window.location.pathname.split('/').pop()

    console.log('SearchByTitle: ', searchByTitle);

    useEffect(() => {
        // Limpia el searchByTitle cuando cambiamos de ruta
        setSearchByTitle(null)

        setIsProductDetailOpen(false)
    }, [location.pathname, setSearchByTitle])

    // Versión optimizada
    const renderView = () => {
        const baseItems = searchByTitle?.length > 0 ? filteredItems : items

        const itemsToRender = category
            ? baseItems?.filter(item => (item.category.name).toLowerCase() === category)
            : baseItems

        if (itemsToRender?.length > 0) {
            return (
                itemsToRender?.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            )
        }
        else {
            return (
                <div className='flex flex-col justify-center col-span-4 h-90 items-center'>
                    <PiSmileySadThin className='size-10 mb-6' />
                    <p className='text-xl text-gray-600'>{
                        category
                            ? "We don't have any prodcuts in this category"
                            : "We couldn't find the product"
                    }</p>
                </div>
            )
        }
    }

    return (
        <Layout>
            <p className='mb-6 font-medium'>
                {
                    category 
                        ? 'Explore ' + category.charAt(0).toUpperCase() + category.slice(1)
                        : 'Exclusive Products'
                }
            </p>

            <input
                type='text'
                placeholder='Search a product'
                className='border rounded-2xl text-center p-1 mb-6 focus:outline-none w-80'
                value={searchByTitle || ''}
                onChange={(e) => setSearchByTitle(e.target.value)}
            />

            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mb-10'>
                {renderView()}
            </div>
            {isProductDetailOpen && <ProductDetail />}
            {isCheckoutSideMenuOpen && <CheckoutSideMenu />}
        </Layout>
    );
}

export { Home }