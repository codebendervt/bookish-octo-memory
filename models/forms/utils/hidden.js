
export default function HiddenFields({type, id, dataId, mode, data}) {

    return (

        <>

            <input hidden type="text" defaultValue={type} name="model" hidden ></input>
            <input hidden type="text" defaultValue={dataId} name="dataID" hidden ></input>
            <input hidden type="text" defaultValue={mode} name="mode" hidden ></input>
            <input hidden type="text" defaultValue={JSON.stringify(data)} name="data" hidden ></input>
        </>

    )
}


