import { Routes, Route } from 'react-router-dom'
import SecondaryPage from './pages/SecondaryPage'
import PrimaryPage from './pages/PrimaryPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PrimaryPage />} />
      <Route path="/country/:CountryName" element={<SecondaryPage />} />
    </Routes>

  )
}

export default App