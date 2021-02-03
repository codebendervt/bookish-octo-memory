import Head from 'components/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Modals from 'components/models'
import { setLocalStorage } from 'sauveur_core/utility';
import getData from 'sauveur_core/fetch/fetch'
import { useRouter } from 'next/router'

export default function BrandView({ data, id }) {
    const router = useRouter()
    const [stateText, setStateText] = useState('One Moment Please')
    const [state, setState] = useState(false)
    //const [body, setBody] = useState(null)
    const [res, setRes] = useState(JSON.parse(data.data))

    useEffect(() => {

        console.log("this is the brand ",data)
        brandSetUp()


        return () => {
            cleanup
        }

    }, [])

    const cleanup = () => {
        console.log("leaving status page")
    }

    const brandSetUp = async () => {
        let response = {}
        let body = {}
        if (data.mode == "create") {
            let logo = ""
            if(data.logo){
                logo = getImage(data.name)
            }
            body = {
                id: id,
                data: {
                    email: data.id,
                    name: data.name.trim(),
                    links: [],
                    logo: logo
                }
            }
            response = await getData("/api/storage/genus", "POST", false, body)

        } else {
            console.log("original data",data)
            body.id = res.id
            body.data = {
                data: {
                    name: data.name.trim(),
                    logo: getImage(data.name)
                }
            }
            
            response = await getData("/api/storage/genus", "PUT", false, body)
        }





        console.log(response.requestResult)
        if (response.msg) {
            if (response.msg.requestResult.statusCode == 400) {
                console.log("not unique")
                if (data.mode == "create") {
                    setStateText("Brand Exists")  
                    //need to support multiple accounts
                    //await createBrand();
                } else {

                }
            }

        } else {
            setBrand(response)
        }

    }

    const setBrand = (response) => {
        let _data = {
            id: response.ref["@ref"].id,
            data: response.data
        }
        console.log("created brand", _data)
        setLocalStorage('genus', _data)
        if(data.mode == "create"){
            setStateText("Brand Created")
        }else{
            setStateText("Brand Updated")
        }
       
        setState(true)
    }

    const createBrand = async () => {
        let _data ={}
        _data.id = data.data.email;
        const identity = await getData("/api/storage/backpack/identity", "POST", false, data)
        console.log('your identity is ', _data)
        if (identity.data.model = "founder") {
            _data.data = identity.data
            const brand = await getData("/api/storage/genus/identity", "POST", false, _data)
            setBrand(brand)
        }else{
            setStateText("Brand Exisits")  
        }
    }
    const updateBrand = () => {

    }
    const getImage = (brand) => {
        let ext = data.logo.split(".")[1]
        let logo = `${brand}.${ext}`
        let imgUrl = `https://sauveurstore.blob.core.windows.net/datas/${logo}`

        return imgUrl;


    }


    return (
        <div className={"w-full h-screen flex justify-center items-center"}>
            <Head title="Brand Setup" />

            <h1 className={"text-3xl md:text-5xl font-default-title text-white capitalize text-center flex-col " + (state ? "" : " animate-pulse")}>
                <div>
                    {stateText}
                </div>

                {
                    (state ?   <div className="text-xl font-default-accent cursor-emoji" onClick={() => router.push("/dashboard")} >Return</div> : "")
                }

            </h1>

        </div>
    )
}


