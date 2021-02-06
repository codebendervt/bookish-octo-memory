
import { useEffect, useState } from 'components'
import styles from 'sauveur_style'

export default function Location({location}) {

    const [value] = useState({ location: "pep", address: "pep" })

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

            <p>Vendor will contact you to find out which pep store to deliver to</p>


        </div>
    )
}
