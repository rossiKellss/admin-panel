import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare
    
} from "@iconscout/react-unicons"

import user from '../assets/user.png'
import { link } from "framer-motion/client"

export const lists=[
    {
        icon:UilEstate,
        name:"Dashboard",
        link:"/"
    },
    {
        icon:UilClipboardAlt,
        name:"Orders",
        link:"/orders"
    },
    {
        icon:UilUsersAlt,
        name:"Customers",
        link:"/customers"
    },
    {
        icon:UilPackage,
        name:"Products",
        link:"/products/list-all"
    },
    {
        icon:UilChart,
        name:"Analytics",
        link:"/analytics"
    },
    
    
]

export const cardsData=[
    {
        title:"Sales",
        color:{
            backGround:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5"
        },
        barValue:70,
        png:UilUsdSquare,
        series:[

        ]
    },
    {
        title:"Revenue",
        color:{
            backGround:"linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow:"0px 10px 20px 0px #fdc0c7",
        },
        barValue:70,
        png:UilMoneyWithdrawal,
        series:[
            
        ]
    },
    {
        title:"Expenses",
        color:{
            backGround:"linear-gradient(rgb(248,212,154) -146.42%, rgb(255,202,113) -46.42%)",
            boxShadow:"0px 10px 20px 0px #f9d59b"
        },
        barValue:70,
        png:UilClipboardAlt,
        series:[
            
        ]
    }
]

export const updatesData=[
    {
        icon:user,
        name:"Rossi",
        message:"Fuckkerrr just odered something",
        time:"2h"
    },
    {
        icon:user,
        message:"roshan just odered sex toy and some lubes",
        time:"3h"


    },
    {
        icon:user,
        message:"roshan just odered sex toy and some lubes",
        time:"3h"


    },
    
    

]