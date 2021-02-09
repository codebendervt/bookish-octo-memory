import { getAll, findById,findByIndex } from '../pages/api/storage/init';
import Store from './store'
import AddToStore from './store/utils/add'
import GetStore from './store/utils/get'
import DeleteInStore from './store/utils/delete'
import SecureStore from './store/utils/secure'
import DeleteStore from './store/utils/clear'

import GetIdentity from './identity/utils/get'
import CreateIdentity from './identity/utils/add'
import SecureIdentity from './identity/utils/secure'
import {CreateToken,CreateIssue,InitTransaction,CreateOrder,VerifyTransaction,UpdateCloudOrder,GetOrder,ReadToken,hasAccount} from './io'


export {getAll, findById, findByIndex, Store,AddToStore,GetStore,CreateIssue,GetIdentity,CreateIdentity,DeleteInStore,InitTransaction,CreateToken,SecureStore,SecureIdentity,CreateOrder,VerifyTransaction,UpdateCloudOrder,GetOrder,ReadToken,DeleteStore,hasAccount}


import {GetBanks} from './io'
import GuapModels from './models/guap'
import PlugModels from './models/plug'
import OldGuardModel from './models/oldguard'
import ModernForm from './form'
import Notice from './notice'


export {GetBanks,GuapModels,PlugModels,ModernForm,Notice,OldGuardModel}



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

import Card from './ui/card/'


export {Card}