


const Pacientes = ({ paciente,setPacienteIndividual,eliminarPaciente}) => {

  
   const { nombre, propietario, email, fecha, sintomas,idGenerico } = paciente
   

   const handleEliminar  = () =>{
      const respuesta = confirm ('Deseas eliminar este paciente?');

      if(respuesta){
         eliminarPaciente(idGenerico)
      }
   }

   return (
      <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {' '}
            <span className='font-normal normal-case'>{nombre}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {' '}
            <span className='font-normal normal-case'>{propietario}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {' '}
            <span className='font-normal normal-case'>{email}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {' '}
            <span className='font-normal normal-case'>{fecha}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {' '}
            <span className='font-normal normal-case'>{sintomas}</span>
         </p>
         <div className="">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
                 uppercase rounded-lg"
                 onClick={() => setPacienteIndividual(paciente)}
                 > editar</button>
            <button type="button" className="py-2 px-10  ml-5 bg-red-600 mr-5 hover:bg-red-700 text-white font-bold
                 uppercase rounded-lg"
                 onClick={handleEliminar}
                 > eliminar</button>
         </div>
      </div>
   )
}

export default Pacientes