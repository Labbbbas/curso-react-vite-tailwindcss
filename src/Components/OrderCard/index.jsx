import { MdDeleteOutline } from "react-icons/md";

const OrderCard = (props) => {

    const {
        id, title, image, price, handleDelete
    } = props

    let renderDeleteIcon
    if (handleDelete) {
        renderDeleteIcon = (
            <MdDeleteOutline
                onClick={() => handleDelete(id)}
                className='text-lg cursor-pointer size-5' />
        )
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100'>
                    <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>

            <div className='flex items-center gap-4'>
                <p className='text-lg font-medium pl-5'>${price}</p>
                {renderDeleteIcon}
            </div>
        </div>

    )
}

export { OrderCard }