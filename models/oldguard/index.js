import Identity from './identity'

const OldGuardModels = (model) => {

    switch (model) {
        case "identity":
            return Identity
        default:
            break;
    }
}

export default OldGuardModels; 
