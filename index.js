import { getAll, findById,findByIndex,read } from '../pages/api/storage/init';

 import {CreateToken, ReadToken} from '../pages/api/token/init'

import Store from './store'
import AddToStore from './store/utils/add'
import GetStore from './store/utils/get'
import DeleteInStore from './store/utils/delete'
import SecureStore from './store/utils/secure'
import DeleteStore from './store/utils/clear'

import GetIdentity from './identity/utils/get'
import CreateIdentity from './identity/utils/add'
import SecureIdentity from './identity/utils/secure'

import {CreateIssue,InitTransaction,CreateOrder,VerifyTransaction,UpdateCloudOrder,GetOrder,GetGuap,InitSimpleTransaction,UpdateCloudBackpack,hasAccount,MenuConfig,Storage,PlugProduct,UpdateCloudPlug,CommentOnIssue} from './io'


export {getAll, findById, findByIndex, Store,AddToStore,GetStore,CreateIssue,GetIdentity,CreateIdentity,DeleteInStore,InitTransaction,CreateToken,SecureStore,SecureIdentity,CreateOrder,VerifyTransaction,UpdateCloudOrder,GetOrder,ReadToken,DeleteStore,GetGuap,InitSimpleTransaction,UpdateCloudBackpack,hasAccount,MenuConfig,Storage,UpdateCloudPlug,PlugProduct,read,CommentOnIssue}


import {GetBanks,getUser,UpdateLocalGenus,getBrand} from './io'
import GuapModels from './models/guap'
import PlugModels from './models/plug'
import CatModel from './models/utils/cat'
import OldGuardModel from './models/oldguard'
import ModernForm from './form'
import Notice from './notice'


export {GetBanks,GuapModels,PlugModels,ModernForm,Notice,OldGuardModel,getUser,UpdateLocalGenus,getBrand,CatModel}




import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'

export {Link,useRouter,useEffect,useState,Image}


import {Choice,Section} from './design'

export {Choice,Section}


import { getLocalStorage, setLocalStorage,$getLocalStorage, $setLocalStorage,$deleteStorage } from '../core/technical/core/utility';
import styles from '../core/styles'
import Head from './head'

export {Head,styles,setLocalStorage,getLocalStorage,$setLocalStorage,$getLocalStorage,$deleteStorage}


//models

import {CleanOrder,InitProduct,cleanProduct} from './models/utils'


export {CleanOrder,InitProduct,cleanProduct}


// UI Components

import Toolbar from '../core/design/toolbar'
import Container from 'components/container'
import Share from 'components/elements/share'
import Card from './ui/card'


export {Card,Toolbar,Container,Share}