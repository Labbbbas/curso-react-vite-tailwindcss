import { RiCloseLargeFill } from "react-icons/ri";
import { useContext } from "react";
import { CheckoutSideMenuContext, ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {

    const {
        closeCheckoutSideMenu,
        order,
        setOrder
    } = useContext(CheckoutSideMenuContext)

    const {
        cartProducts,
        setCartProducts,
        counter,
        setCounter,
        setSearchByTitle
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const newCart = cartProducts.filter(product => product.id !== id)
        setCartProducts(newCart)
        setCounter(counter - 1)
    }

    const handleCheckout = () => {
        // Creamos un objeto con la orden
        const orderToAdd = {
            date: new Date(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd]) // Agregamos la orden al estado
        setCounter(0) // Reiniciamos el contador
        setCartProducts([]) // Limpiamos el carrito
        setSearchByTitle(null)
    }

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

            {/* La lista de productos */}
            <div className='px-6 flex-1'>
                {cartProducts.map((product) => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>

            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-3">
                    <span className="font-medium">Total:</span>
                    <span className="font-semibold text-xl">${totalPrice(cartProducts)}</span>
                </p>

                <Link to={'/my-orders/last'}>
                    <button
                        className="bg-black text-white w-full py-3 rounded-lg cursor-pointer"
                        onClick={() => handleCheckout()}
                    > 
                        Checkout
                    </button>
                </Link>
        </div>

        </aside >
    )
}

export { CheckoutSideMenu }