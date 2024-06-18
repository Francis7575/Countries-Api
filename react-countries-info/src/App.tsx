import { Routes, Route } from 'react-router-dom'
import PrimaryPage from './pages/PrimaryPage'
import SecondaryPage from './pages/SecondaryPage'

const App = () => {
  return (
    <Routes>
      <Route path="/countries-info" element={<PrimaryPage />}/>
      <Route path="/country/:CountryName" element={<SecondaryPage />}/>
    </Routes>
  )
}

export default App