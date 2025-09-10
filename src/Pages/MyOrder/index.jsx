import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { CheckoutSideMenuContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { IoChevronBackCircleOutline } from "react-icons/io5";   
import { Link } from "react-router-dom";

const MyOrder = () => {

    const {
        order
    } = useContext(CheckoutSideMenuContext)

    return (
        <Layout>
            <div className='flex gap-6'>
                <Link to={'/my-orders'}>
                    <IoChevronBackCircleOutline className='h-6 w-6 text-black cursor-pointer' />

                </Link>
                <h1>My Order</h1>
            </div>

            {/* La lista de mi orden */}
            <div className='flex flex-col w-80 mt-6'>
                {order?.slice(-1)[0].products.map((product) => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.images}
                        price={product.price}
                    />
                ))}
            </div>
        </Layout>
    );
}

export { MyOrder }