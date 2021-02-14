import { useEffect, useState } from 'react'
import {styles} from 'components'
import Location from '../location'
import Number from '../number'
import Options from '../options'

export default function FormInput({ type, name, label, func, model, location }) {

    const [isNumber] =useState(type !== 'number')



    return (

        <div className={"p-4"}>
            {
                isNumber ? 
                <h1 className={styles.title}>{label}</h1> :<></>
            }

            <div className={isNumber ? styles.input_border: ""}>



                <RenderControl model={model} name={name} type={type} location={location} func={func} label={label} />

                {type != "location" || isNumber ?
                    <div className="w-32 px-2" id={name}>Required</div> : <></>}


            </div>
        </div>
    )


}

//#region control


const RenderControl = ({ name, type, func, label, location,model }) => {

    if (type == 'textarea') {
        return (
            <textarea className={styles.input} rows="3" cols="50" name={name} onChange={func} required />
        )

    } else if (type == "location") {
        return (
            <Location location={location} />
        )
    } else if (type == "number") {
        return (
            <div className="w-full flex-col h-full">

                <Number placeholder={model.placeholder} func={func} name={name} label={label}  />
            </div>
        )

    }else if (type == "options") {
        return (
            <div className="w-full flex-col h-full">

                <Options model={model} func={func} name={name}/>
               
            </div>
        )

    } else {
        return (
            <input placeholder={model.placeholder || name} className={styles.input} onChange={func} type={type} name={name} required></input>
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




