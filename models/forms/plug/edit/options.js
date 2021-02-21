import { useEffect, useState, Link, useRouter } from 'components'


export default function PlugOptions({ id, data }) {
    const router = useRouter()

    useEffect(() => {

        //console.log(router.query)
        //console.log(id)
        console.log(data)
        return () => {

        }
    }, [router])


    return (

        <>
            <Link href={`/toolbox/plug/options/create?id=${id}`}>
                <a>{data ? "Edit":"Add"} options</a>
            </Link>

        </>
    )
}
