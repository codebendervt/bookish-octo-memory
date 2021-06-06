import { useEffect, useState } from 'components';



export default function FeaturedShow({ featuredVideo }) {

    const [playVideo, isPlay] = useState(false)
    const [video, setVideo] = useState()


    useEffect(() => {

      
        featuredVideo ? featuredVideo.length > 0 ? setVideo(featuredVideo[0]) : setVideo(false) :setVideo(false)

        return () => {

        }
    }, [featuredVideo])


    return (

        video  ?  
        <div className="w-screen max-w-screen-xl lg:h-full flex flex-col p-2 items-center justify-center relative lg:flex-grow">


            <div className="w-full flex relative">
                <img src={`${video.items[0].snippet.thumbnails.maxres.url}`} className="w-full h-full z-10"></img>

                <div className="w-full h-full absolute z-20 flex items-end">
                    <div className="w-full h-24 lg:h-32   relative">

                        <div className="w-full h-full bg-black absolute z-20 opacity-50"></div>

                        <div className="z-30 text-start text-xl absolute">
                            <h1 className="text-white   p-2 ">
                                {video.items[0].snippet.title}
                            </h1>

                            <div className="text-white" onClick={() => isPlay(!playVideo)}>
                                Press Play
                            </div>

                        </div>

                    </div>

                </div>

                <iframe id="player" type="text/html" className={`w-full h-full absolute ${playVideo ? "z-40" : ""}`}
                    src={`http://www.youtube.com/embed/${video.items[0].id}?enablejsapi=1`}
                    frameBorder="0" allowFullScreen></iframe>
            </div>

            <div className="w-full flex my-2 text-sm lg:text-sm  lg:line-clamp-3">
                {video.items[0].snippet.description ? video.items[0].snippet.description : "Air of Mystery"}
            </div>


        </div> :
        <>loading</>


    )
}

