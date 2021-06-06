import { useEffect, useState } from 'components';
import FeaturedShow from 'components/featuredShow/component'


export default function ShowMenu({ shows, isReady, setStage }) {


    const [categories, setCategories] = useState()
    const [view, setView] = useState()
    const [show, setShow] = useState()

    useEffect(() => {

       // console.log("SHow Menu", shows)
        try {

            if (shows) {
                let _categories = new Set(shows.map((show) => show.additional))

                setCategories([..._categories])
            }

        } catch (e) {

            console.error('hello error', e.message)
        }



        return () => {

        }
    }, [])

    useEffect(() => {

        //console.log(categories)

        return () => {

        }
    }, [categories])


    const selectVideo = (_show) => {

        console.log(_show)
        setShow(_show)
        setView(true)
        setStage(true)

    }

    const closeStage = () => {
        setStage(false)
        setView(false)
    }

    return (

        <>
            {

                shows && isReady ?
                    <div className="w-screen h-full bg-white">

                        {categories ? categories.map((category) => {

                            return (
                                <div key={category} className="w-full flex flex-col">
                                    <div className="p-2">
                                        <h1>
                                            {category}
                                        </h1>
                                    </div>
                                    <div className="p-2 flex flex-wrap">

                                        {shows.map((show) => {

                                            if (show.additional == category) {
                                                return (
                                                    <a href="#stage" className="w-full lg:w-1/6" onClick={() => selectVideo(show)} key={show.items[0].snippet.title}>
                                                        <img src={`${show.items[0].snippet.thumbnails.maxres.url}`} className="w-full h-full z-10"></img>
                                                    </a>


                                                )
                                            }






                                        })}

                                    </div>

                                </div>
                            )

                        }) : <></>}

                    </div> : <>loading</>

            }

            {
                view && show ? <div id="stage" className="w-full h-full absolute flex flex-col bg-white items-center p-4 z-50">

                    <div className="w-full p-2 flex justify-end">

                        <div onClick={() => closeStage()}>close</div>

                    </div>

                    <FeaturedShow featuredVideo={[show]} />

                </div> : <></>
            }
        </>

    )
}

