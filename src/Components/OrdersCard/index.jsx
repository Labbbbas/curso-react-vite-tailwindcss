import { CiCalendar } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";

const OrdersCard = (props) => {

    const {
        totalPrice, totalProducts, date
    } = props

    return (
        <div className='flex justify-between mb-3 border border-black p-3 rounded-2xl w-90 items-center'>

            <div className='flex flex-col font-light space-y-1'>

                <div className='flex items-center'>
                    <CiCalendar className='mr-2' />
                    <span>{new Date(date).toLocaleString()}</span>
                </div>

                <div className='flex items-center'>
                    <CiShoppingBasket className='mr-2' />
                    <span>{totalProducts} {totalProducts > 1 ? 'Articles' : 'Article'}</span>
                </div>

            </div>

            <div className='flex items-center'>
                <span className='font-semibold text-lg mr-3'>${totalPrice}</span>
                <BsChevronRight className='h-5 w-5' />
            </div>

        </div >
    )
}

export { OrdersCard }