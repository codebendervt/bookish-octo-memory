import Head from 'components/head'
import { useEffect, useState } from 'react'
import Modals from 'components/models'
import styles from 'sauveur_style'
import HiddenField from './utils/hidden';
import { getUser } from 'components/io';
import IsAuth from 'components/status/isAuth'
import uploadFileToBlob from './utils/azureUpload.ts';
import FormInput from './input'
import FormEdit from './edit'

export default function Form({ mode, type, data, initData = {}, modal, dataId,custom,length }) {
    const [_data, setData] = useState(initData)
    const [state, setState] = useState(0);
    const [_dataId, setDataId] = useState(dataId);
    const [isUpload, setIsUpload] = useState(false)
    const [brand, setBrand] = useState()
    const [isBrand, setIsBrand] = useState(true)
    const [user, setUser] = useState()
    const [isMode, setMode] = useState(mode == "create")
    const [itemName, setItemName] = useState()
    const [itemImage, setItemImage] = useState()

    useEffect(() => {


        console.log("current modal",modal)
        setUser(getUser().data)

        setData(initData)
        //setProducImage(initData['image'])


        if (mode == "edit") {
            setItemName({ name: initData['name'] })
        }

        console.log("this is the user", user)
        console.log("this is the data", _data)


        return () => {

        }
    }, [])


    const renderForm = (thedata) => {

        return (

            isMode || !(state == length) ?
                modal.map((i, k) => {
                    return (
                        <div id={k} key={k} className={"w-full " + (state == k ? "animated fadeIn" : formState("hidden"))} >

                            <FormInput func={createData} type={i.type} name={i.name} label={i.label} />

                        </div>


                    )
                }) : modal.map((i, k) => {

                    return (
                        <FormEdit
                        key={i.name} 
                        type={i.type} 
                        name={i.name} 
                        label={i.label} 
                        value={_data[i.name]} 
                        func={editData} 
                        mode={mode}/>
                    )
                })
        )

    }

    const CheckRequired = (e) => {
        let result = e.target.validity.valid ? "Thank you" : "Required";

        return result;

    }



    const fileUpload = async (e) => {
        let file = e.target.files[0];
        let ext = file.name.split(".")[1];
        let result = await uploadFileToBlob(file, `${itemName.name}-${brand.name}.${ext}`);
        console.log("file upload ", result)
        setIsUpload(result);

    }

    const createData = (e) => {
        try {
            if (e.target.type == "file") {
                console.log('uploading file')
                fileUpload(e)

            } else {

                if (e.target.name == 'name') {
                    setItemName({ [e.target.name]: e.target.value })
                    setData({ [e.target.name]: e.target.value })
                } else {
                    let _value = Object.assign(_data, { [e.target.name]: e.target.value })
                    setData(_value)
                }

            }
            let elmText = document.getElementById(e.target.name);
            elmText.innerText = CheckRequired(e);

        } catch (err) {
            console.error("unable to edit form line 113 Modern Form", err)
        }
    }


    //to be used now with form edit
    const editData = async (e) => {
        try {
            if (e.target.type == "file") {
                fileUpload(e)

            } else {
                if (e.target.name == 'name') {
                    setItemName({ [e.target.name]: e.target.value })
                    setData({ [e.target.name]: e.target.value })
                } else {

                    setData({ [e.target.name]: e.target.value })
                }
            }
        } catch (e) {
            console.error("unable to edit form", e)
        }


    }

    const formState = (states) => (state == length ? "" : states);


    const changeState = () => {
        setState(state + 1)

        if (state == (length - 1)) {
            console.log("in edit mode")
            setMode(false)
        }
    }

    return (
      



            isBrand ? <>
                <Head title="The Plug" />

                <form action="/io/status/submit" method="GET" className="w-full h-full flex flex-col text-white">
                <div className="flex flex-col w-full h-full lg:w-screen lg:h-screen realtive">

                    <div className="flex-grow w-full">
                        <div className={(isMode ? "w-full flex flex-grow h-auto lg:flex-col" : "grid grid-cols-3 flex flex-col flex-grow grid-flow-row-dense gap-2 max-w-lg p-2")}>

                            {renderForm(_data)}


                        </div>
                    </div>



                    <div className="w-full h-12 sticky inset-x-0 bottom-0 flex p-2 border-t border-double border-black shadow-2xl lg:shadow-none transition duration-500 ease-in-out hover:bg-black">
                        {
                            state < length ? (<a href={"#" + state} className={styles.form_button} onClick={() => changeState()}>next</a>) : (

                                <div className={styles.form_submit}><button type="submit">
                                    {mode == "create" ? "submit" : "update"}

                                </button></div>)
                        }

                    </div>

                </div>



                <HiddenField type={type} dataId={_dataId} mode={mode} data={data} custom={custom} />
                </form>


            </> : <IsAuth auth={false} url={`/io/form/create?type=brand&id=${user.email}`} message={"You Do not have a brand signed up, create one below"} btn="Create Brand" />

        

    )
}

{/* <ModernForm 
mode={} 
type={} 
data={} 
initData={} 
modal={} 
dataId={}
    
/> */}