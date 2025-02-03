import { FaCirclePlus } from "react-icons/fa6";

const Card = () => {

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md p-2 hover:shadow-xl transition-all duration-250'>
            <figure className='relative mb-3 w-full h-4/5'>
                <span
                    className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-1'
                >
                    Electronics
                </span>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src='https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    alt='headphones'
                />
                <button
                    className="absolute top-0 right-0 flex justify-center items-center rounded-full m-1.5 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180"
                >
                    <FaCirclePlus className="text-white text-xl hover:text-gray-300" />
                </button>

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>Headphones</span>
                <span className='text-lg font-medium'>$300</span>
            </p>
        </div>
    )
}

export default Card;