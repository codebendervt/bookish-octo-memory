
import { useEffect, useState } from 'components'
import styles from 'sauveur_style'

export default function Location({location}) {

    const [value] = useState({ location: "collect", address: "collect" })

    useEffect(() => {

        location(value)

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


        </div>
    )
}
