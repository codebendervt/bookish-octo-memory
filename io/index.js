import getUser from './user'
import isAuth from './auth'
import {getPlug,UpdateCloudPlug,UpdateLocalPlug,DeletePlug} from './plug'
import {getBrand,UpdateLocalGenus} from './genus'
import {GetBanks, CreateGuap,InitTransaction,VerifyTransaction,hasAccount,InitSimpleTransaction,GetGuap } from './guap'
import {CreateOrder,GetOrder,UpdateCloudOrder } from './order'
import {BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack} from './backpack'

import {CreateIssue,CommentOnIssue} from './resource';
import {CreateToken,ReadToken} from './security/token';


export {getUser,isAuth,BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack,getPlug,getBrand, UpdateCloudPlug,UpdateLocalPlug,DeletePlug,CreateIssue,CommentOnIssue,GetBanks,CreateGuap,CreateToken,InitTransaction,CreateOrder,VerifyTransaction,ReadToken,GetOrder,UpdateCloudOrder,hasAccount,InitSimpleTransaction,UpdateLocalGenus,GetGuap}