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

export { GetBanks, CreateGuap };