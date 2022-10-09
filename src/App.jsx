import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [pacienteIndividual, setPacienteIndividual] = useState([]);

  useEffect(() => {

        const pacientesLS = JSON.parse(localStorage.getItem('pacientesX'));
        setPacientes(pacientesLS)
  
    console.log("registro primero en appx")
  }, []);

  /*useEffect(() => {
    localStorage.setItem('pacientesX', JSON.stringify(pacientes))
    console.log("registro appx")
  }, [pacientes])*/



  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.idGenerico !== id);
    setPacientes(pacientesActualizados)
    localStorage.setItem('pacientesX', JSON.stringify(pacientesActualizados))
  }



  return (
    <div className='container mx-auto mt-20 bg-gray-100 flex-1' >
      <Header

      />
      <div className='mt-12 flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteIndividual={pacienteIndividual}
          setPacienteIndividual={setPacienteIndividual}>
        </Formulario>
        <ListadoPacientes
          pacientes={pacientes}
          setPacienteIndividual={setPacienteIndividual}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
