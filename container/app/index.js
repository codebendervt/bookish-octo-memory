

export default function App({children}) {

    return (


            <div className="h-full w-full bg-black text-white">

                <div className="h-screen w-full bg-black">
                    {children[0]}
                </div>

                <div className="h-full w-full bg-black">
                {children[1]}
                    {/* content goes here */}
                    <div className="w-full h-24 bg-white sticky bottom-0 ">
                        {children[2]}
                    </div>
                </div>

            </div>




      

    )
}


//window.scrollTo(0, 0)