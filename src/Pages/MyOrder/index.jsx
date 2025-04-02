import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { CheckoutSideMenuContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

const MyOrder = () => {

    const {
        order
    } = useContext(CheckoutSideMenuContext)

    return (
        <Layout>
            My Order

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