import { createContext, useContext, useState } from "react";
import axios from 'axios';


export const initialValues={
    quote:"Im the best",
    author:"Kanye"
}

export const UserContext = createContext();

export function UserContextProvider (props) {
    const [values,setValues] = useState(initialValues)

    const addValues = ()  => {
        setValues({color:"red"})
    }  

    const loadValuesFromAPI = ()=> {

        if(values.author !== "Kanye") {
            axios.get(`https://api.kanye.rest`)
        .then(res => {
            const {quote} = res.data
            setValues({quote,author:"Kanye"})
        })
     }
     else {
        axios.get(`https://quotes.rest/qod?language=en`)
        .then(res => {
            const quote = res.data.contents.quotes[0].quote
            setValues({quote,author:"Someone"})
        })
     }


    }
    
    

    const data={values,addValues,loadValuesFromAPI}
    
    return(<UserContext.Provider value={data} {...props}/>)
}

export function useUserContext(){
    return useContext(UserContext)
}
