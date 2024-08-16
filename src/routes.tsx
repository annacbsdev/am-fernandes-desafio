import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PropertyList from './pages/PropertyList'
import Property from './pages/Property'


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/properties" element={<PropertyList />} />
    <Route path="/property/:id" element={<Property />} />
  </Routes>
)

export default AppRoutes