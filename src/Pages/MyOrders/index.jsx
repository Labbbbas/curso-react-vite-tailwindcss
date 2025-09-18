import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { CheckoutSideMenuContext } from "../../Context";
import { Link } from "react-router-dom";

const MyOrders = () => {
    const context = useContext(CheckoutSideMenuContext)
    
    return (
        <Layout>
            <p className='mb-6 font-medium'>My Orders</p>
            {
                context.order.map((order, index) => (

                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                            date={order.date}
                        />
                    </Link>

                ))
            }
        </Layout>
    );
}

export { MyOrders }