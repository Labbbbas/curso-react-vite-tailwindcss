import { RiCloseLargeFill } from "react-icons/ri";
import { useContext } from "react";
import { CheckoutSideMenuContext, ShoppingCartContext } from "../../Context";
import { OrderCart } from "../OrderCart";

const CheckoutSideMenu = () => {

    const {
        closeCheckoutSideMenu,
    } = useContext(CheckoutSideMenuContext)

    const {
        cartProducts
    } = useContext(ShoppingCartContext)

    return (
        <aside
            // La primera es otra forma de hacerlo
            // className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col bg-white fixed right-0 border border-black rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)]`}
            className='flex flex-col bg-white fixed right-0 border border-black rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)] overflow-y-auto'
        >
            {/* La cabecera */}
            <div className='flex justify-between items-center px-6 py-4'>
                <h2 className='font-medium text-xl'> My Order </h2>
                <div onClick={() => closeCheckoutSideMenu()} >
                    <RiCloseLargeFill className='text-lg cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180' />
                </div>
            </div>

            <div className='px-6'>
                {cartProducts.map((product) => (
                    <OrderCart
                        key={product.id}
                        title={product.title}
                        image={product.images}
                        price={product.price}
                    />
                ))}
            </div>

        </aside >
    )
}

export { CheckoutSideMenu }