import { RequestAPI, APIEndpoint, PushAPI } from '../../models/utils'
import { setLocalStorage } from 'sauveur_core/utility';


const BackpackIdentity = async (id) => {

    let data = {
        id: id
    }
    return await RequestAPI(APIEndpoint.bacpackIdentity, data)
}

const UpdateLocalBackpack = async(email) => {

    let data = await BackpackIdentity(email)
    let _data = {}
    _data.data =data.data;
    _data.id = data.ref["@ref"].id;
    setLocalStorage('user',_data)

    return _data
}

const UpdateCloudBackpack = async(id,data) => {

    let _data = {
        id: id,
        data:{
            data:data
        }
    }

    console.log("data to update on backpack",_data)
    let response = await PushAPI(APIEndpoint.backpack,_data)

    console.log("response to update",response)
    _data.data = response.data
    setLocalStorage('user',_data)
    return _data;
}


export {BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack}