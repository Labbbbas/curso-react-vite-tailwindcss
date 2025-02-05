// useEffect siempre nos ayuda al consumir una API
import { useState, useEffect, useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from '../../Components/Card'
import { ProductDetail } from "../../Components/ProductDetail";
import { ProductDetailContext } from "../../Context";

const Home = () => {

    const {
        isProductDetailOpen
    } = useContext(ProductDetailContext)

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <Layout>
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    items?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            {isProductDetailOpen && <ProductDetail /> }
        </Layout>
    );
}

export { Home }