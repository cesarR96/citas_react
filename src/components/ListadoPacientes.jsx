import React from 'react'
import Pacientes from './Pacientes'


const   ListadoPacientes = ({ pacientes ,setPacienteIndividual,eliminarPaciente}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll' >

      {pacientes && pacientes.length ? (

        <>
          <h2 className='font-black text-3xl text-center'>ListadoPacientes</h2>
          <p className='text-xl mt-5 text-center'>
            Administra tus {' '}
            <span className='text-indigo-600 font-bold'> Pacientes y Citas </span>
          </p>

          {pacientes.map(pas => (
            <Pacientes
              paciente={pas}
              setPacienteIndividual={setPacienteIndividual}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 text-center'>
            Empieza agregando pacientes  {' '}
            <span className='text-indigo-600 font-bold'> y apareceran en este lugar </span>
          </p>
        </>
      )}


    </div>
  )
}

export default ListadoPacientes