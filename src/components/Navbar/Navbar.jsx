import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [open, setOpen] = useState(false);
    const routes = [
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/services", name: "Services", id: 3 },
        { path: "/contact", name: "Contact", id: 4 },
        { path: "/faq", name: "FAQ", id: 5 },
      ];
      
    return (
        <nav className="text-black p-6 ">
          <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> 
                    : <AiOutlineMenu className=""></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex duration-500 absolute md:static
            ${open ? 'top-16': '-top-60'}
             px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;