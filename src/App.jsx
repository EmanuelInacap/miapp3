
import './App.css'
import Datos from './Datos.jsx'
function App() {
  const alumnos=[
    {
      nombre:'Carlos',
      edad:22
    },
    {
      nombre:'Ana',
      edad:21
    }
  ]

  return(
    <Datos alumnos={alumnos}/>
  )
}

export default App
