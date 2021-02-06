import getUser from './user'
import isAuth from './auth'
import {getPlug,UpdateCloudPlug,UpdateLocalPlug,DeletePlug} from './plug'
import getBrand from './genus'
import {GetBanks, CreateGuap,InitTransaction } from './guap'
import {BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack} from './backpack'

import {CreateIssue,CommentOnIssue} from './resource';
import {CreateToken} from './security/token';


export {getUser,isAuth,BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack,getPlug,getBrand, UpdateCloudPlug,UpdateLocalPlug,DeletePlug,CreateIssue,CommentOnIssue,GetBanks,CreateGuap,CreateToken,InitTransaction}