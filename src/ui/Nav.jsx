import { MdHome, MdMail } from 'react-icons/md';
import { scrollToSection } from '../Hooks/ScrollToSection';
import { FaLocationPin } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Logout from '../Features/authentication/Logout';
import Logins from '../Features/authentication/Logins';
import { useUser } from '../Features/authentication/useUser';


const Nav = () => {
 const { isAuthenticated } = useUser();

 const navigate = useNavigate();

 return (
  <div className=" hidden items-center md:grid grid-cols-2 p-4 bg-blue-700 text-slate-100">
   <img onClick={() => navigate('/')} src='/ve.png' alt='Logo' className=' h-12 bg-zinc-100 p-2 rounded-full' />

   <ul className=" lg:text-lg [&>*]:cursor-pointer flex justify-between">
    <li className=' hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2 flex items-center justify-center gap-1' onClick={() => navigate('/')}><MdHome />Home</li>

    <li className=' flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('contact')}><MdMail />Contact</li>

    <li className=' flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2' ><FaLocationPin />Track</li>

    <li className=' flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2' >
     {isAuthenticated ? <Logout /> :
      <Logins />}
    </li>
   </ul>
  </div>
 );
};

export default Nav;