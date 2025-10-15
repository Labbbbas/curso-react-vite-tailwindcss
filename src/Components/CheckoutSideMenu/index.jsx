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

    const handleIncrease = (id) => {
        // Se utiliza prev antes del map, y no directamente el map, para que sea la versión 
        // más actualizada del estado. Una buena práctica en React
        setCartProducts(prev =>
            prev.map(p =>
                p.id === id // Si encontramos el id
                    ? { ...p, quantity: p.quantity + 1 } // Incrementa en 1 la cantidad
                    : p // Sino, se queda así, no se toca
            )
        )
    }

    const handleDecrease = (id) => {
        setCartProducts(prev =>
            prev.map(p =>
                p.id === id
                    ? { ...p, quantity: p.quantity - 1 }
                    : p
            )
        )
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
            className='flex flex-col bg-white fixed right-0 border border-black rounded-lg top-[75px] w-[360px] h-[calc(95vh-68px)]'
        >
            {/* La cabecera */}
            <div className='flex justify-between items-center px-6 py-4'>
                <h2 className='font-medium text-xl'> My Order </h2>
                <div onClick={() => closeCheckoutSideMenu()} >
                    <RiCloseLargeFill className='text-lg cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180' />
                </div>
            </div>

            {/* La lista de productos */}
            <div className='px-6 flex-1 overflow-y-auto'>
                {cartProducts.map((product) => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                        quantity={product.quantity ?? 1} // Por default es 1
                        handleIncrease={handleIncrease} // Para reenderizar el icono +
                        handleDecrease={handleDecrease} // Para reenderizar el icono -
                    />
                ))}
            </div>

            <div className="px-6 mb-4">
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