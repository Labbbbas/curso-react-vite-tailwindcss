const totalPrice = (products) => {      
    return products.reduce((acc, product) => acc + (product.price * product.quantity), 0)
}

export { totalPrice }