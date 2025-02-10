import { RiCloseLargeFill } from "react-icons/ri";

const OrderCart = (props) => {

    const {
        id, title, image, price
    } = props

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <RiCloseLargeFill className='text-lg cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180' />
            </div>
        </div>

    )
}

export { OrderCart }