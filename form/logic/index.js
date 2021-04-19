import { useEffect, useState, Card } from '../..'


export default function Options({ func, name, model, modal, Control }) {

    const [value, setValue] = useState(false)
    const [logicState, setLogicState] = useState()

    useEffect(() => {

        return () => {
            cleanup
        }
    }, [])


    // const setOptions = (term, index) => {

    //     setValue(term)

    //     if (modal == "plug") {
    //         func({ [name]: model.values[index] })
    //     } else {

    //         func({ [name]: term })
    //     }

    // }



    const cleanup = () => {
        // location(value)
        // console.log("location figured", value)
    }

    const changeLogic = (e) => {
        console.log(e)
        setLogicState(e)
    }

    const renderLogic = (data) => {

        return (
            <Control model={data} name={data.name} type={data.type} func={func} label={data.label} modal={modal} trigger={changeLogic} />
        )


    }

    const CreateLogic = ({position}) => {

        if (position >= 0) {
            return (
                renderLogic(model.step.step[position])
            )

        } else {
            return (
                renderLogic(model.step)
            )
        }


    }



    return (

        <div className="w-full flex flex-wrap">
           <CreateLogic position={logicState}/>
        </div>
    )
}


// { name, type, func, label, location, model, modal }
