import Location from '../here'
import Collection from '../collection'
import options from '../options'

const setLocation = (key,) => {

    switch (key) {
        case options.door:
            return <Location />
        case options.collect:
                return <Collection />
        default:
            return <></>
    }

}

export default setLocation;