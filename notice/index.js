
import Link from 'next/link'
import Head from 'components/head'


export default function Notice() {

    return (



        <div className="absolute w-screen h-screen flex items-end lg:justify-end lg:p-4   ">


            <div className="max-h-80 max-w-md  rounded rounded-t-xl bg-trueGray-900 relative flex  animated fadeInUp z-10 ">

                <div className="w-screen h-full flex-grow p-8 lg:p-6 text-white flex flex-col relative">
                    <Link href="/">
                    <a className="w-full flex justify-end -my-4 font-default-accent">close</a>
                    </Link>
                  
                    <h1 className="w-full text-left font-default-title text-3xl">Notice</h1>
                    {/* <h2 className="w-full text-center font-default-sub-title text-xl">FYI will live here</h2> */}

                    <div className="w-full flex justify-center">
                        <p className="w-auto text-right font-default-paragraph text-lg">This page is currently under conttruction</p>
                    </div>

                    {/* <div className="w-full flex justify-center ">
                        <div className="font-default-accent mx-8 text-lg">
                            True
                        </div>
                        <div className="font-default-accent mx-8 text-lg">
                            False
                        </div>
                    </div> */}




                </div>

            </div>
        </div>

    )
}
