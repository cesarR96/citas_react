import { useState, useEffect } from 'react'
import Error from './Error'

function Formulario({ pacientes, setPacientes, pacienteIndividual, setPacienteIndividual }) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [idGenerico, setIdGenerico] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacienteIndividual).length > 0) {
      setNombre(pacienteIndividual.nombre)
      setPropietario(pacienteIndividual.propietario)
      setEmail(pacienteIndividual.email)
      setFecha(pacienteIndividual.fecha)
      setSintomas(pacienteIndividual.sintomas)
    }
  }, [pacienteIndividual])


  const generarId = () => {
    const radom = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return radom + fecha
  }

  const handleSumit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('hay almenos un campo vacio')
      setError(true)
    } else {
      console.log('todos llenos')
      setError(false)
    }

      //objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if (pacienteIndividual.idGenerico) {
      //Agregando el id
      objetoPaciente.idGenerico = pacienteIndividual.idGenerico
      //validando si id es el mismo de la lista de pacientes
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.idGenerico ===
        pacienteIndividual.idGenerico ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      localStorage.setItem('pacientesX', JSON.stringify(pacientesActualizados))
      setPacienteIndividual({})

    } else {
      //nuevo registro
      //Agregando el id
      objetoPaciente.idGenerico = generarId();
      setPacientes([...pacientes, objetoPaciente]);
      localStorage.setItem('pacientesX', JSON.stringify(pacientes))
    }

    //reiniciar el form

    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }


  return (
    <div className='w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Formulario</h2>
      <p className='text-lg mt-5 text-center'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form onSubmit={handleSumit} className='m-3  bg-white shadow-md rounded-lg py-10 px-5'>
        {error && <Error> <p>todos los campos son obligatorios </p></Error>}
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='inputTextMascota'>Nombre Mascota</label>
          <input id="inputTextMascota" type="text" className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md'
            placeholder='Nombre Mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='inputTextNombrePropietario'>Nombre Propietario</label>
          <input id="inputTextNombrePropietario" type="text" className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md'
            placeholder='Nombre Propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          ></input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='inputTextEmail'>Email</label>
          <input id="inputTextEmail" type="email" className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='inputDateAlta'>Alta</label>
          <input id="inputDateAlta" type="date" className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md'
            placeholder='Alta'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}></input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='inputTextAreaSintomas'>Sintomas</label>
          <textarea id='inputTextAreaSintomas' className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md'
            placeholder='Describe los Sìntomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}></textarea>
        </div>
        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700
                  cursor-pointer'  value={pacienteIndividual.idGenerico ? 'Editar Paciente' : 'Agregar Paciente'}></input>
      </form>
    </div>
  )
}

export default Formulario