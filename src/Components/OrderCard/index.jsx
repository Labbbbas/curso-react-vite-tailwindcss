import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import { PiMoneyWavyThin, PiHandbagThin } from "react-icons/pi";

const OrderCard = (props) => {

    const {
        id, title, image, price, handleDelete, handleIncrease, quantity, handleDecrease
    } = props

    let renderDeleteIcon
    if (handleDelete) {
        renderDeleteIcon = (
            <CiTrash
                onClick={() => handleDelete(id)}
                className='cursor-pointer size-5'
            />
        )
    }

    let renderIncreaseIcon
    if (handleIncrease) {
        renderIncreaseIcon = (
            <GoPlus
                onClick={() => handleIncrease(id)}
                className='cursor-pointer size-5'
            />
        )
    }

    let renderDecreaseIcon
    if (handleDecrease) {
        renderDecreaseIcon = (
            <HiMinus
                onClick={() => handleDecrease(id)}
                className='cursor-pointer size-5'
            />
        )
    }

    const isReadOnly = !handleDecrease && !handleDelete && !handleIncrease

    return (
        <div className='flex items-center gap-4 mb-4'>

            {/* Imagen fija a la izquierda */}
            <figure className='w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100'>
                <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
            </figure>

            {/* Columna de titulo, controles de cantidad y subtotal */}
            <div className='flex flex-col flex-1 min-w-0 space-y-2'>

                {/* Título */}
                <p className='text-sm font-light line-clamp-2 break-words'>{title}</p>

                {/* Contenedor partido en dos */}
                <div className='flex items-center text-sm'>

                    {/* Mitad izquierda | Controles de cantidad */}
                    <div className='flex gap-1 text-center items-center select-none w-1/2'>
                        {
                            quantity > 1
                                ? renderDecreaseIcon
                                : renderDeleteIcon
                        }

                        {isReadOnly ? (
                            <p className='flex gap-2 text-sm'>
                                <PiHandbagThin className='size-5' />
                                <span className='font-semibold text-gr tabular-nums'>{quantity}</span>
                            </p>
                        ) : (
                            <p className='w-8 text-center tabular-nums font-light'>
                                {quantity}
                            </p>
                        )}

                        {renderIncreaseIcon}
                    </div>

                    {/* Mitad derecha | Subtotal */}
                    <div className='flex gap-2 text-sm items-center w-1/2 justify-end'>
                        {/* Subtotal */}
                        <PiMoneyWavyThin className='size-6' />
                        <span className='font-semibold text-gray-900 tabular-nums'>${price * quantity}</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export { OrderCard }