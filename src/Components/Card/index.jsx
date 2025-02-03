import { FaCirclePlus } from "react-icons/fa6";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ data }) => {

    const {
        counter,
        setCounter
    } = useContext(ShoppingCartContext)

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md p-2 hover:shadow-xl transition-all duration-250'>
            <figure className='relative mb-3 w-full h-4/5'>
                <span
                    className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-1'
                >
                    { data.category.name }
                </span>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={ data.images }
                    alt={ data.title }
                />
                <button
                    className="absolute top-0 right-0 flex justify-center items-center rounded-full m-1.5 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180"
                    onClick={() => (setCounter(counter + 1))}
                >
                    <FaCirclePlus className="text-white text-xl hover:text-gray-300" />
                </button>

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'> { data.title } </span>
                <span className='text-lg font-medium'> ${ data.price } </span>
            </p>
        </div>
    )
}

export default Card;