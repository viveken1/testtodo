import './App.css'
import Add from './Pages/Add'
import './index.css'
import { Route,Routes } from 'react-router-dom'


function App() {

  return (
    <>
   <Routes>
    <Route>
    <Route path='/' element={<Add/>}/>
    </Route>
   </Routes>
    </>
  )
}

export default App
