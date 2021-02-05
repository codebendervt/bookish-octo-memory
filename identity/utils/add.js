import {$setLocalStorage,$getLocalStorage} from 'components'

const CreateIdentity = ( item ) => {

    try{

        if($getLocalStorage('identity')){
            let _storage = $getLocalStorage('identity')
    
            console.log('there is alreay and idenity', _storage)
          
    
        }else{
        
    
            let _data = {idenity: item}
            $setLocalStorage('identity',_data)
        }

        return true

    }catch{

        return false
    }



}

export default CreateIdentity;

//the begining of a new store state
