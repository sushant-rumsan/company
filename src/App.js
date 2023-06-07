import {Routes, Route} from 'react-router-dom';
import Left from './component/left';
import Right from './component/right';
import Add from './pages/add';
import Home from './pages/home'
import Single from './pages/single';
import Update from './pages/update';
import './styles/main.scss'

const App = ()=>{
  return(
    <div className='App'>
      <Left/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/company/:id" element={<Single/>} />
      <Route path="/update/:id" element={<Update/>} />
    </Routes>
    <Right/>
    </div>
  )
}

export default App;