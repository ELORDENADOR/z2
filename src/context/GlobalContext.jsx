import React, {createContext,useReducer} from 'react'

// 1
export const Globalcontext = createContext()

const initialstate = {
    users: [],
    isDark: false,
    favoritos: []
}


const globalReducer = (state,action) =>{

     switch (action.type){
         case "GET_USERS":
           return {...state,users: action.payload}

         case "SWITCH_MODE":
           return {...state,isDark: !state.isDark}


         default:
             state;
     }
}



const GlobalContextProvider = ({children}) => {

// 2

const [state,dispatch] = useReducer(globalReducer,initialstate)

  return (
// 3


    <Globalcontext.Provider value={{state,dispatch}}>
{/* 4 */}

       {children}
      

    </Globalcontext.Provider>
  )
}




export default GlobalContextProvider