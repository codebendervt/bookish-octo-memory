import {$getLocalStorage,CreateToken} from 'components'

const SecureStore = async( ) => {

    let store = {}
    let _secureStore = undefined

    try{

        if($getLocalStorage('cart')){
            store = $getLocalStorage('cart')
            
            _secureStore  = await CreateToken(store)

            console.log("encrypted store",_secureStore)
    
        }else{
            store = {}
        }

        
        return _secureStore

    } catch(e){

        console.log('error',e.message)
        //return false
    }



}

export default SecureStore;

//the begining of a new store state
