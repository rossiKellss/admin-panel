import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare
    
} from "@iconscout/react-unicons"

export const lists=[
    {
        icon:UilEstate,
        name:"Dashboard"
    },
    {
        icon:UilClipboardAlt,
        name:"Orders"
    },
    {
        icon:UilUsersAlt,
        name:"Customers"
    },
    {
        icon:UilPackage,
        name:"Products"
    },
    {
        icon:UilChart,
        name:"Analytics"
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