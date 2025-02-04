import { createContext, useState } from "react";

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    return (
        <ShoppingCartContext.Provider value={{
            counter,
            setCounter
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

const ProductDetailContext = createContext()

const ProductDetailProvider =({ children }) => {

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
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
            { children }
        </ProductDetailContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext, ProductDetailProvider, ProductDetailContext };
