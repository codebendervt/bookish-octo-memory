import {$setLocalStorage,$getLocalStorage} from 'components'

const AddToStore = ( item ) => {

    try{

        if($getLocalStorage('cart')){
            let _storage = $getLocalStorage('cart')
    
            console.log('there is something in the cart', _storage)
            _storage.cart.push(item)
            $setLocalStorage('cart',_storage)
            console.log('after', _storage)
    
        }else{
            let cart = []
            cart.push(item)
    
            let _data = {cart: cart}
            $setLocalStorage('cart',_data)
        }

        return true

    }catch{

        return false
    }



}

export default AddToStore;

//the begining of a new store state
