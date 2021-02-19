import getUser from './user'
import isAuth from './auth'
import {getPlug,UpdateCloudPlug,UpdateLocalPlug,DeletePlug} from './plug'
<<<<<<< HEAD
import getBrand from './genus'
import {GetBanks, CreateGuap,InitTransaction,VerifyTransaction,GetGuap } from './guap'
=======
import {getBrand,UpdateLocalGenus} from './genus'
import {GetBanks, CreateGuap,InitTransaction,VerifyTransaction,hasAccount,InitSimpleTransaction,GetGuap } from './guap'
>>>>>>> fb2bfb8ebe3c03de8d6ecaef5b1ac07de1f23357
import {CreateOrder,GetOrder,UpdateCloudOrder } from './order'
import {BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack} from './backpack'

import {CreateIssue,CommentOnIssue} from './resource';
import {CreateToken,ReadToken} from './security/token';


<<<<<<< HEAD
export {getUser,isAuth,BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack,getPlug,getBrand, UpdateCloudPlug,UpdateLocalPlug,DeletePlug,CreateIssue,CommentOnIssue,GetBanks,CreateGuap,CreateToken,InitTransaction,CreateOrder,VerifyTransaction,ReadToken,GetOrder,UpdateCloudOrder,GetGuap}
=======
export {getUser,isAuth,BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack,getPlug,getBrand, UpdateCloudPlug,UpdateLocalPlug,DeletePlug,CreateIssue,CommentOnIssue,GetBanks,CreateGuap,CreateToken,InitTransaction,CreateOrder,VerifyTransaction,ReadToken,GetOrder,UpdateCloudOrder,hasAccount,InitSimpleTransaction,UpdateLocalGenus,GetGuap}
>>>>>>> fb2bfb8ebe3c03de8d6ecaef5b1ac07de1f23357
