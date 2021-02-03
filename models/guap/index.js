import SubAccount from './account'

const GuapModels = (model) => {

    switch (model) {
        case "account":
            return SubAccount
        default:
            break;
    }
}

export default GuapModels; 

