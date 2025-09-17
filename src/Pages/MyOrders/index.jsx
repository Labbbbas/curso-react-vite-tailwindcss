import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { CheckoutSideMenuContext } from "../../Context";
import { Link } from "react-router-dom";

const MyOrders = () => {
    const context = useContext(CheckoutSideMenuContext)
    
    return (
        <Layout>
            My Orders
            {
                context.order.map((order, index) => (

                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>

                ))
            }
        </Layout>
    );
}

export { MyOrders }