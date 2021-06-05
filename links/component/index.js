import { useEffect, useState } from 'components';

export default function GenusLink({ i }) {

    const [data, setData] = useState()

    useEffect(() => {

        //make this more accebile
        if (i.type == "Youtube") {

        } else {
            setData(i)
        }

        return () => {

        }
    }, [])

    return (

        data ?

            //handle the support for different types of links here
            <a href={i.url} className={`font-bold  ${i.name.length > 10 ? "text-4xl" : "text-6xl"} py-2`}>{i.name}</a> : <></>
    )
}

