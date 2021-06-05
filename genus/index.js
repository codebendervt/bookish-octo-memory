import GenusLink from 'components/links/component'
import { useEffect, useState } from 'components';
import PlayIcon from 'components/icons/vzy/play'


export default function GenusHome({ data,brandName }) {

    const [youtube, setYoutube] = useState(false)


    useEffect(() => {

        setYoutube(data.genus.filter((i) => i.type == "Youtube"))
         
        return () => {
             
        }
    }, [ ])


    return (
        <>


            <div className="leading-none py-2 flex flex-col flex-grow">

                {data.genus.sort((x, y) => x.name.length - y.name.length).map((i, k) => <GenusLink i={i} key={k} />)}
            </div>

            

            <div className="flex pin-b">
                {youtube ? <a href={`${brandName}/show`}><PlayIcon/></a> : <></>}
            </div>
        </>

    )
}

