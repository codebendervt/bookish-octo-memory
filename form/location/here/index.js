
import { useEffect, useState } from 'components'
import styles from 'sauveur_style'

export default function Location({}) {

    const [service, setService] = useState();
    const [results, setResults] = useState();
    const [value, setValue] = useState();
    const [location, setLocation] = useState(false);

    useEffect(() => {
        let platform = new H.service.Platform({
            'apikey': 'z3lriJH_PFrGzcCLAhZeCgmL-DwQKCAF6MZJFBlBMTw'
        });

        let service = platform.getSearchService()
        setService(service)


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



    const geoCode = (term) => {

        service.geocode({
            q: term,
            in: "countryCode:ZAF"
        }, (result) => {
            console.log(result)
            setResults(result.items)
        }, cleanup)
    }

    const cleanup = () => {
        console.log("location figured")
    }


    const Option = ({ title, address }) => {
        return (
            <div className="w-1/3 h-32 flex my-4 p-2 cursor-emoji" onClick={() => setValue(JSON.stringify(address))}>
                <div className="w-32 bg-gray-100 flex items-end rounded animated  p-2  fadeIn" onClick={() => setLocation(title)}>
                    <a>{title}</a>
                </div>
            </div>
        )

    }

    const search = (term) => {


        if (term.target.value.length > 6) {
            geoCode(term.target.value)
        } else {
            console.log("need more for the search")
        }

    }

    const Searching = ({toSearch}) => {
        return (

            <>

          

            {
            toSearch ? toSearch.map((i) => <Option key={i.title} title={i.title} address={i.address} />) : <></>

        }

        </>
        )
}



return (

    <div className="w-full flex flex-wrap">

          <input key={'search'} className={styles.input} placeholder="32 taurus rd" type="text" name="search" onChange={search} hidden={location}></input>

        {
            !location ? <Searching  toSearch={results}/> : <>your adress has been set to {location}</>
        }
        
        
        <input name="location" hidden defaultValue={location} />

        <input name="adress" hidden defaultValue={value} />


    </div>
)
}
