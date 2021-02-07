import account from 'components/models/guap/account';
import { getLocalStorage, setLocalStorage } from 'sauveur_core/utility';
import { RecieveAPI, APIEndpoint, RequestAPI, RemoveAPI } from '../../../models/utils'




const CreateToken = async (data) => {
    //will eventually use brand to maybe increase securirtyconso

    try{
        console.log('encrypting...')
        const init = await RequestAPI(APIEndpoint.createToken, data)
    
        return init
    }catch(e){
        console.log('what could possibly be the problem',e)
    }

}

const ReadToken = async (data) => {
    //will eventually use brand to maybe increase securirtyconso

    try{
        console.log('decrypting...')
        const init = await RequestAPI(APIEndpoint.readToken, data)
    
        return init
    }catch(e){
        console.log('what could possibly be the problem',e)
    }

}



export {CreateToken,ReadToken}