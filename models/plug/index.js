import Add from './product/add'

const PlugModels = (model) => {

    switch (model) {
        case "add":
            return Add
        default:
            break;
    }
}

export default PlugModels; 
