import { RiCloseLargeFill } from "react-icons/ri";
import { useContext } from "react";
import { ProductDetailContext } from "../../Context";

const ProductDetail = () => {

    const {
        closeProductDetail,
        productToShow
    } = useContext(ProductDetailContext)

    return (
        <aside
            // La primera es otra forma de hacerlo
            // className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col bg-white fixed right-0 border border-black rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)]`}
            className='flex flex-col bg-white fixed right-0 border border-black rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)]'
        >
            {/* La cabecera */}
            <div className='flex justify-between items-center px-6 py-4'>
                <h2 className='font-medium text-xl'> Detail </h2>
                <div onClick={() => closeProductDetail()} >
                    <RiCloseLargeFill className='text-lg cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180' />
                </div>
            </div>

            <div className='flex flex-col overflow-y-auto '>
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
                    <span className='font-light text-md text-justify'>{productToShow.description}</span>
                </p>
            </div>


        </aside >
    )
}

export { ProductDetail }