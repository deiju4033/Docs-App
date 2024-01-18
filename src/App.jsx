
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Doc from './components/Doc'

import EditDoc from './components/EditDoc'
import { database } from './firebaseConfig'

function App() {


  return (
   
       <Routes>
    
       <Route path='/' element={ <Doc database={database} />} /> 
        <Route path='/editDoc/:id'  element={<EditDoc database={database}   />}  />
   
   
     </Routes>
   
   
  )
}

export default App
