
import { Link, } from 'components'
export default function Choice({ choice,url }) {

    return (
        <Link href={url}>

            <a className="w-64 h-52  p-2 animated fadeIn">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                    {choice}
                </div>

            </a>
        </Link>


    )
}

