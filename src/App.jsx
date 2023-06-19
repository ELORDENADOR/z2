
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from "./componentes/layouts/footer/Footer"
import Navbar from "./componentes/layouts/navbar/Navbar"
import ProfesionalesContainer from "./componentes/pages/ProfesionalesContainer"
import GlobalContextProvider from "./context/GlobalContext"



function App() {
  return (
   <BrowserRouter>
      <GlobalContextProvider>
          <Routes>
            
                <Route element={<Navbar/>}>
                <Route  element={<Footer/>}>
                    <Route path="/" element={<h1>Home</h1>}  />
                    <Route path="/dentistas" element={<ProfesionalesContainer/>} />
                    <Route path="/dentista/:id" element={<h1>Aca va el profecional</h1>} />
                    <Route path="/contacto" element={<h1>Aca va el form de contacto</h1>} />
                    <Route path="/favoritos" element={<h1>Aca van los Favoritos</h1>} />
                </Route>
                </Route>
             <Route path="*" element={<h1>No existe</h1>} />
        </Routes>   
      </GlobalContextProvider>
   
   </BrowserRouter>
  )
}

export default App
