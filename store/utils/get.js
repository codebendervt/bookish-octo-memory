import {$getLocalStorage} from 'components'

const GetStore = ( ) => {

    let store = {}

    try{

        if($getLocalStorage('cart')){
            store = $getLocalStorage('cart')

    
        }else{
            store = {}
        }

        return store

    }catch{

        return false
    }



}

export default GetStore;

//the begining of a new store state
