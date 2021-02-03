import Link from 'next/link'
import Head from 'components/head'
import { useRouter } from 'next/router'


export default function Status({ text, state, title }) {
    const router = useRouter()

    return (
        <div className={"w-full h-screen flex justify-center items-center"}>
            <Head title={title} />

            <h1 className={"text-3xl md:text-5xl font-default-title text-white capitalize text-center flex-col " + (state ? "" : " animate-pulse")}>
                <div>
                    {text}
                </div>

                {
                    (state ? <div className="text-xl font-default-accent cursor-emoji" onClick={() => router.push("/dashboard")} >Return</div> : "")
                }

            </h1>

        </div>
    )
}
