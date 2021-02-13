import { useEffect, useState,styles } from '../../'


export default function FormEdit({ type, name, label, value, func, mode, image, uploaded, location }) {

    const [msg, setMsg] = useState('Upload product image')
    const [animation, setAnimation] = useState('')

    useEffect(() => {

        return () => {

        }
    }, [])

    const addFileListener = () => {
        document.getElementById('image').addEventListener('click', () => {
            setMsg("Uploading image")
            setAnimation("animate-pulse")
        })
    }



    return (
        type == "options" && mode == "create" ? <></> :
            <div id={name} className={`w-${colByType(type)} h-${heightByType(type)} p-2`}>
                <div className=" h-full bg-gray-800  rounded items-center flex relative flex-col items-center text-white">

                    <RenderControl name={name} value={value} type={type} func={func} label={label} image={image} uploaded={uploaded} msg={msg} animation={animation} location={location} />
                </div>

            </div>
    )


}

//#region control


const RenderControl = ({ name, value, type, func, label, image, uploaded, msg, animation, location }) => {

    if (type == "options") {
        return (<></>)
    } else if (type == "file") {
        addFileListener()
        return (<>

            <input className="opacity-0 w-full h-full absolute cursor-emoji" name={name} id="fileInput" type="file" onChange={func} />
            {image == null ? (uploaded ? <Notice text="Image is uploaded" /> : <Notice text={msg} animation={animation} />) : <img className="h-72 w-full" src={image} />}

        </>)
    } else if (name == "desc") {
        return (<textarea className={styles.input} rows="3" cols="50" name={name} value={value} onChange={func} />)
    } else if (type == "location") {
        return (
            <>
                <div className="w-full  px-4">{label}</div>
                <div className=" text-sm w-full h-full flex items-center px-4 ">{location.location}
                <input hidden type="text" defaultValue={JSON.stringify(location)} name="location" hidden ></input>
                </div>
            </>
            // <Location />
        )
    } else {
        return (
            <>
                <div className="w-full  px-2">{label}</div>
                <input className={styles.input} type={type} name={name} value={value} onChange={func} />
            </>
        )

    }

}


const Notice = ({ text, animation }) => {
    return (

        <div className={"text-lg font-default-accent  cursor-emoji flex items-center h-full " + animation}>
            <p>{text}</p>
        </div>

    )

}

//#endregion




//#region configuration

//will have to actally be by type
const colByType = (type) => {

    switch (type) {
        case "location":
            return "full";
        default:
            return "1/2";
    }

}

//will have to actally be by type
const heightByType = (type) => {
    switch (type) {
        case "textarea":
            return 40
        case "file":
            return 20
        default:
            return 23
    }
}

//#endregion