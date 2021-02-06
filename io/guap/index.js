import account from 'components/models/guap/account';
import { getLocalStorage, setLocalStorage } from 'sauveur_core/utility';
import { RecieveAPI, APIEndpoint, RequestAPI, RemoveAPI } from '../../models/utils'


const GetBanks = async () => {

    const result = await RecieveAPI(APIEndpoint.bank)
    return result.data;
}


const CreateGuap = async (data, brand) => {
    let result = {};
    const init = await RequestAPI(APIEndpoint.subaccount, data)

    //console.log("initialize",init)

    if (init.status) {
        let _data = {
            data: {
                id: init.data.id,
                code: init.data.subaccount_code,
                brand: brand
            }
        }
        const account = await RequestAPI(APIEndpoint.guap, _data)
        //console.log("guap account",account)
        result = account;
    }

    return result
}

const InitTransaction = async(payload,brand) =>{

    let _data = {id:brand}
    const {data}  = await RequestAPI(APIEndpoint.getGuap, _data)
    
    console.log(data.code)
    console.log(payload)

    const createTransaction = {
        email : payload.customer.contact,
        amount : payload.price,
        callback_url : "",
        subaccount : data.code
    }

    console.log(createTransaction)

   const transaction = await RequestAPI(APIEndpoint.transaction, createTransaction)

   console.log(transaction)
}

export { GetBanks, CreateGuap,InitTransaction };