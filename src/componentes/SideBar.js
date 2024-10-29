import {Link, useLocation} from 'react-router-dom'
import {FaHome, FaUserCog, FaCog} from 'react-icons/fa'

export default function SideBar(){
    const location = useLocation();


    const menuItems = [
        { path:"/", name: 'DashBoard', icon: <FaHome size={20} /> },
        { path:"/profile", name: 'perfil',icon: <FaUserCog size ={20} /> },
        { path:"/settings", name: 'Ajustes', icon: <FaCog size={20} /> },
    ]


    return (
        <div calassName='fixed left-0 top-0 h-sreen w'>
            teste
        </div>
    )
}