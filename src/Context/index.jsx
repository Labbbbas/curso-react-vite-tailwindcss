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
    
    return (
        <ProductDetailContext.Provider value={{
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}>
            { children }
        </ProductDetailContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext, ProductDetailProvider, ProductDetailContext };
