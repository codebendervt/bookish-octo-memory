
import { getLocalStorage } from '../../';

const Genus = () => {
    try{
        return  getLocalStorage('genus')
    }catch{
        return null
    }
   

}

export default Genus;
