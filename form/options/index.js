import { useEffect, useState, Card } from '../../'


export default function Options({ func, name, model }) {

    const [value, setValue] = useState(false)

    useEffect(() => {

        return () => {
            cleanup
        }
    }, [])




    const cleanup = () => {
        // location(value)
        // console.log("location figured", value)
    }

    const renderOptions = (m) => {

        return (
            m.options.map((i) => {
                return (

                    <Card>
                        <div className="w-full h-full cursor-emoji text-black" key={i} onClick={() => setOptions(i)}>

                            <div>{i}</div>
                        </div>

                    </Card>

                )
            })
        )

    }

    const setOptions = (term) => {

        setValue(term)

        func({ [name]: term })
    }



    return (

        <div className="w-full flex flex-wrap">

            {
                model && !value ? renderOptions(model) : <></>
            }

            {
                value ? <p>you have selected {value}</p> : <></>
            }
        </div>
    )
}
