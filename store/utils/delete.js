import {$setLocalStorage,$getLocalStorage} from 'components'

const DeleteInStore = ( item ) => {

    try{

        if($getLocalStorage('cart')){
            let _storage = $getLocalStorage('cart')
            let _cart = []
    
            console.log('there is something in the cart', _storage)
            _storage.cart.map((i) => {

                if(i.id == item.id){
                    console.log('item wants to be deleted')
                }else{
                    _cart.push(i)
                }
            })
            _storage.cart = _cart
            $setLocalStorage('cart',_storage)
            console.log('after', _storage)
    
        }else{

            console.log("what are you trying to delete")
        }

        return true

    }catch{

        return false
    }



}

export default DeleteInStore;

//the begining of a new store state
