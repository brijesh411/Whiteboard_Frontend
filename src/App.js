import { Route, Routes } from 'react-router-dom'
import './App.css'

import Forms from './components/Forms/index.jsx'
import RoomPage from './pages/RoomPage/RoomPage.jsx'

const App = () => {
  return(
    <div className="container">
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  )
}

export default App;
