import { useEffect, useState } from 'react'
import styles from 'sauveur_style'
import Location from '../location'

export default function FormInput({ type, name, label, func, mode }) {



    return (

        <div className={"p-4"}>
            <h1 className={styles.title}>{label}</h1>
            <div className={styles.input_border}>



                <RenderControl name={name} type={type} func={func} label={label} />

                <div className="w-32" id={name}>Required</div>

            </div>
        </div>
    )


}

//#region control


const RenderControl = ({ name, type, func, label }) => {

    if (type == 'textarea') {
        return (
            <textarea className={styles.input} rows="3" cols="50" name={name} onChange={func} required />
        )

    }else if(type == "location"){
        return(
            <Location />
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




