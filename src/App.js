import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './componentes/SideBar';
import Dashboard from  './pages/Dashboard'
import Profile from './pages/Profile';
import Settings from './pages/Profile';

export default function App() {
  return (
    <Router>
      <div className='flex min-h-screen bg-gray-100'>
        <SideBar />

        <div className='flex-1 ml-64'>
          <Routes>
            <Route path="/" element={<Dashboard />}  />
            <Route path="/profile" element={<Profile />}  />
            <Route path="/settings" elemeent={<Settings />}  />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

