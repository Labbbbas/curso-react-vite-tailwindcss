import { createContext, useState } from "react";

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

    // Estado para contabilizar los productos dentro del carrito
    const [counter, setCounter] = useState(0)

    // Estado para agregar productos al carrito
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            counter,
            setCounter,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

const ProductDetailContext = createContext()

const ProductDetailProvider = ({ children }) => {

    // Estado para saber si el Product Detail está abierto o cerrado
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    // Para abrir y cerrar el Product Detail
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Estado para guardar el producto que se quiere mostrar en el Product Detail
    const [productToShow, setProductToShow] = useState({}) // El estado inicial es un objeto porque la data del producto así viene

    return (
        <ProductDetailContext.Provider value={{
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ProductDetailContext.Provider>
    )
}


const CheckoutSideMenuContext = createContext()

const CheckoutSideMenuProvider = ({ children }) => {

    // Estado para saber si está abierto
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

    // Para abrir y cerrar el Checkout Side Menu
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Toggle para abrir y cerrar el carrito
    const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)

    // Estado para guardar el pedido al dar clic en Checkout
    const [order, setOrder] = useState([])

    return (
        <CheckoutSideMenuContext.Provider value={{
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            toggleCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </CheckoutSideMenuContext.Provider>
    )
}

export {
    ShoppingCartProvider,
    ShoppingCartContext,
    ProductDetailProvider,
    ProductDetailContext,
    CheckoutSideMenuProvider,
    CheckoutSideMenuContext
};
