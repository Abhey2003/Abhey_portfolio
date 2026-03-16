import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {ThemeProvider} from "./context/ThemeContext"
import ParticlesBackground from "./components/ParticlesBackground";


function App(){

return(

<ThemeProvider>

<BrowserRouter>

<ParticlesBackground/>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

</Routes>

</BrowserRouter>

</ThemeProvider>

)

}

export default App