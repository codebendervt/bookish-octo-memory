
import { useEffect, useState } from 'components'
import styles from 'sauveur_style'

export default function Location({ }) {

    const [value] = useState({ address: "collect" })

    useEffect(() => {


        return () => {
            cleanup
        }
    }, [])



    // useEffect(() => {

    //     console.log(service)


    //     return () => {
    //         cleanup
    //     }
    // }, [service])


    // useEffect(() => {

    //     console.log(service)


    //     return () => {
    //         cleanup
    //     }
    // }, [results])




    const cleanup = () => {
        console.log("location figured")
    }




    return (

        <div className="w-full flex flex-wrap">

            <p>You will have to pick up the order from the vendor</p>


            <input name="location" hidden defaultValue={JSON.stringify(value)} />


        </div>
    )
}
