import { FaCirclePlus } from "react-icons/fa6";
import { useContext } from "react";
import { ShoppingCartContext, ProductDetailContext } from "../../Context";

const Card = ({ data }) => {

    const {
        counter,
        setCounter,
        setCartProducts,
        cartProducts
    } = useContext(ShoppingCartContext)

    const {
        openProductDetail,
        setProductToShow,
    } = useContext(ProductDetailContext)

    const ShowProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
    }

    const addProductToCart = (productToAdd) => {
        setCartProducts([...cartProducts, productToAdd])
        setCounter(counter + 1)
    }

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md p-2 hover:shadow-xl transition-all duration-250'
            onClick={() => ShowProduct(data)
            }
        >
            <figure className='relative mb-3 w-full h-4/5'>
                <span
                    className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-1'
                >
                    {data.category.name}
                </span>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={data.images}
                    alt={data.title}
                />
                <button
                    className="absolute top-0 right-0 flex justify-center items-center rounded-full m-1.5 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180"
                    onClick={(e) => {
                        e.stopPropagation() // Para que no abra el Product Detail cuando demos click en +
                        addProductToCart(data)
                    }}
                >
                    <FaCirclePlus
                        className="text-white text-xl hover:text-gray-200"
                    />
                </button>

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'> {data.title} </span>
                <span className='text-lg font-medium'> ${data.price} </span>
            </p>
        </div>
    )
}

export { Card };