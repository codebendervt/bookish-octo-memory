import { useEffect, useState } from 'react'
import Modals from 'components/models'
import { setLocalStorage } from 'sauveur_core/utility';
import models from 'components/models';
import Status from 'components/design/status'
import { UpdateCloudBackpack, CreateIssue, CommentOnIssue, CreateGuap} from 'components/io';

export default function AccountView({data}) {

    const [stateText, setStateText] = useState('One Moment Please')
    const [state, setState] = useState(false)


    useEffect(() => {

            if (data.mode == "create") {
                ItemCreate()
            } else {

                // let builtIn = JSON.parse(data.data);
                //ProductUpdate()
            }

        return () => {
            cleanup
        }

    }, [])




    const ItemCreate = async () => {


        try {
           
            let _data = {
                business_name : data.brand.data.name,
                settlement_bank: data.code,
                account_number : data.account_number,
                percentage_charge : 1.0

            }

            //console.log(_data)

            const response = await CreateGuap(_data,data.brand.data.name)
            //console.log('the repsonse is ', response)

            //convert into a faundadb response handler
            if (response.msg) {
                if (response.msg.name == "BadRequest") {

                }

            } else {

                 _data = {
                    id: response.ref["@ref"].id,
                    data: response.data
                }


                ItemInit(_data)

            }

        } catch (e) {
            //console.log(e)
            //CreateIssue("Creating Account", e.message)
            CommentOnIssue(21, e.message)
            setStateText("Error Creating Account")
        }


    }

    const ProductUpdate = async () => {

        try {
            let _body = convertData();

            //update the paystack plug here

            console.log(data)
            if (data.image) {
                _body.image = getImage(data.name)
            }


            UpdateCloudPlug(data.dataID, _body)


            console.log("updated product")
            setStateText("Product Updated")
            setState(true)
        } catch (e) {
            console.log(e)
            //CommentOnIssue(20, e.message)
            setStateText("Error Updating Account")
        }

    }


    const ItemInit = async (_data) => {
        try {

            setLocalStorage('guap', _data)
            console.log("created account")
            setStateText("Account Created")
            setState(true)
        } catch (e) {
            console.log(e)
            CommentOnIssue(21, e.message)
            setStateText("Error Creating Account")

        }

    }



    const cleanup = () => {
        console.log("leaving status page")
    }

    // const getImage = (name) => {

    //     let ext = data.image.split(".")[1]
    //     let logo = `${name}-${_brand.data.name}.${ext}`
    //     let imgUrl = `https://sauveurstore.blob.core.windows.net/datas/${logo}`

    //     return imgUrl;

    // }


    return (

        <Status url="/toolbox/plug/products" state={state} text={stateText} title="Product Update" />

    )
}



