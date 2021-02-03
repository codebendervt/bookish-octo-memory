import { getLocalStorage } from 'sauveur_core/utility';



const Genus = () => {
    try{
        return  getLocalStorage('genus')
    }catch{
        return null
    }
   

}

export default Genus;
