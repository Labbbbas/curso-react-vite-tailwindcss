import { RiCloseLargeFill } from "react-icons/ri";

const ProductDetail = () => {
    return (
        <aside className='flex flex-col bg-white fixed right-0 border border-black rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)]'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'> Detail </h2>
                <div >
                    <RiCloseLargeFill className='text-lg' />
                </div>
            </div>
        </aside>
    )
}

export { ProductDetail }