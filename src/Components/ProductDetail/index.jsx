import { RiCloseLargeFill } from "react-icons/ri";
import { useContext } from "react";
import { ProductDetailContext } from "../../Context";
import { CheckoutSideMenuContext, ShoppingCartContext } from "../../Context";

const ProductDetail = ({ data }) => {

    const {
        openCheckoutSideMenu
    } = useContext(CheckoutSideMenuContext)

    const {
        closeProductDetail,
        productToShow
    } = useContext(ProductDetailContext)

    const {
        cartProducts,
        setCartProducts,
        counter,
        setCounter,
    } = useContext(ShoppingCartContext)

    const addProductToCart = (e, productToAdd) => {
        e.stopPropagation() // Para que no abra el Product Detail cuando demos click en +
        setCartProducts([...cartProducts, { ...productToAdd, quantity: 1 }])

        setCounter(counter + 1)
        openCheckoutSideMenu()
        closeProductDetail()
    }

    const renderButton = (data) => {
        const isInCart = cartProducts.filter(product => product.id === data.id).length > 0 // Devuelve true o false

        if (isInCart) {
            return (
                <button
                    className="bg-gray-500 text-white w-full py-3 rounded-lg cursor-not-allowed opacity-80"
                >
                    Already in your cart
                </button>
            )
        }
        else {
            return (
                <button
                    className="bg-black text-white w-full py-3 rounded-lg cursor-pointer"
                    onClick={(e) => addProductToCart(e, data)}
                >
                    Add Product
                </button>
            )
        }
    }

    return (
        <aside
            // La primera es otra forma de hacerlo
            // className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col bg-white fixed right-0 border border-black rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)]`}
            className='flex flex-col bg-white fixed right-0 border border-black rounded-2xl top-[75px] w-[360px] h-[calc(95vh-68px)]'
        >
            {/* La cabecera */}
            <div className='flex justify-between items-center px-6 py-4'>
                <h2 className='font-medium text-xl'> Detail </h2>
                <div onClick={() => closeProductDetail()} >
                    <RiCloseLargeFill className='text-lg cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180' />
                </div>
            </div>

            <div className='flex flex-col flex-1 overflow-y-auto '>
                {/* La imagen */}
                <figure className='px-6'>
                    <img
                        className='w-full h-full rounded-lg'
                        src={productToShow.images}
                        alt={productToShow.title} />
                </figure>

                {/* La información */}
                <p className='flex flex-col px-6 py-3'>
                    <span className='font-medium text-2xl mb-2 text-center'>${productToShow.price}</span>
                    <span className='font-medium text-lg mb-2 text-center'>{productToShow.title}</span>
                    <span className='font-light text-md text-justify pb-3'>{productToShow.description}</span>
                </p>

            </div>

            <div className='px-6 mb-4'>
                {renderButton(data)}

            </div>

        </aside >
    )
}

export { ProductDetail }