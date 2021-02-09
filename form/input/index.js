import { useEffect, useState } from 'react'
import {styles} from 'components'
import Location from '../location'
import Number from '../number'

export default function FormInput({ type, name, label, func, mode, location }) {

    const [isNumber] =useState(type !== 'number')



    return (

        <div className={"p-4"}>
            {
                isNumber ? 
                <h1 className={styles.title}>{label}</h1> :<></>
            }

            <div className={isNumber ? styles.input_border: ""}>



                <RenderControl name={name} type={type} location={location} func={func} label={label} />

                {type != "location" || isNumber ?
                    <div className="w-32 px-2" id={name}>Required</div> : <></>}


            </div>
        </div>
    )


}

//#region control


const RenderControl = ({ name, type, func, label, location }) => {

    if (type == 'textarea') {
        return (
            <textarea className={styles.input} rows="3" cols="50" name={name} onChange={func} required />
        )

    } else if (type == "location") {
        return (
            <Location location={location} />
        )
    } else if (type == "number") {
        console.log(type)

        return (
            <div className="w-full flex-col h-full">

                <Number func={func} name={name} label={label}  />
            </div>
        )

    } else {
        return (
            <input placeholder={name} className={styles.input} onChange={func} type={type} name={name} required></input>
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




