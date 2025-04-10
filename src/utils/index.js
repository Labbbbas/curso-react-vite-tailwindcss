const totalPrice = (products) => {
    return products.reduce((acc, product) => acc + product.price, 0)
}

export { totalPrice }