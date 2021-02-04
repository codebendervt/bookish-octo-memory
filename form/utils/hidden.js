
export default function HiddenFields({ type, dataId, mode, data,location={}, custom = {} }) {

    return (

        <>

            <input hidden type="text" defaultValue={type} name="model" hidden ></input>
            <input hidden type="text" defaultValue={JSON.stringify(custom)} name="custom" hidden ></input>
            <input hidden type="text" defaultValue={dataId} name="dataID" hidden ></input>
            <input hidden type="text" defaultValue={mode} name="mode" hidden ></input>
            <input hidden type="text" defaultValue={JSON.stringify(data)} name="data" hidden ></input>

            <input hidden type="text" defaultValue={JSON.stringify(location)} name="location" hidden ></input>
        </>

    )
}


