
import { useRouter, useEffect } from 'components'

export default function InApp() {
    const router = useRouter()
    const { from } = router.query

    useEffect(() => {

        if (router.query) {
            //will work on closing the app here
            //console.log("come from in app",router.query)
           //router.push('/io')
        }

        return () => {

        }
    }, [router])

    return (
        <>

        </>
    )
}

