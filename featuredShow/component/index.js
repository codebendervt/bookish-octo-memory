import { useEffect, useState } from 'components';



export default function FeaturedShow({ featuredVideo }) {



    // useEffect(() => {

    //     setYoutube(data.genus.filter((i) => i.type == "Youtube"))

    //     return () => {

    //     }
    // }, [ ])


    return (
        <div className="w-screen max-w-screen-xl h-full flex flex-col p-2 items-center justify-center relative">
            <div className="w-full text-start py-2 text-xl">
                {featuredVideo.items[0].snippet.title}
            </div>

            <div className="w-full flex relative">
                <img src={`${featuredVideo.items[0].snippet.thumbnails.maxres.url}`} className="w-full h-full z-10"></img>

                <iframe id="player" type="text/html" className="w-full h-full absolute "
                    src={`http://www.youtube.com/embed/${featuredVideo.items[0].id}?enablejsapi=1`}
                    frameBorder="0"></iframe>
            </div>

            <div className="w-full flex my-2 text-sm lg:text-sm  line-clamp-3">
                {featuredVideo.items[0].snippet.description ? featuredVideo.items[0].snippet.description : "Air of Mystery"}
            </div>


        </div>

    )
}

