
const cleanOrder = (data) => {
    return {
        id:data.id,
        brand:data.brand,
        data:{
            product:cleanProduct(data),
            customer:{
                name:data.customer.name,
                location: data.customer.location,
                contact: data.customer.contact
            }
        }
    }

}


const cleanProduct = (data) => {

    return {
            name:data.name,
            quantity : data.quantity,
            cost : data.price * data.quantity
        }
}


export default cleanOrder