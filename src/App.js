import { Route, Routes } from 'react-router-dom'

import './App.scss'
import './style/TheoryOfTheWeek.scss'
import './style/Person.scss'

import Home from './pages/Home'
import Story from './pages/Story'
import Chapter from './pages/Chapter'

import Menu from './components/Menu'

function App() {
  return (
    <div className="main-Container">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Chapter" element={<Chapter />} />
      </Routes>
    </div>
  )
}

export default App;
