import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Globalcontext } from '../../context/GlobalContext'





const ProfesionalesContainer = () => {

// const [profesionales,setProfecionales] = useState([])
const {state,dispatch} = useContext(Globalcontext)


useEffect(() =>{

     const getProfesional = axios.get("https://jsonplaceholder.typicode.com/users")

     getProfesional      
       .then((res) => dispatch({type: "GET_USERS",payload: res.data}))
       .catch((err)=> console.log(err));
},[])
console.log(state.users)

  return (
    <div>Profesionales</div>
  )
}

export default ProfesionalesContainer