// ==============================================>>> روابط <<<====================================
// -------------------))) CSS (((-------------------
import '../public/css/components/header.css'
import '../public/css/app/classes.css'

import { useState } from 'react';

import { IoHomeOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaFreeCodeCamp } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
























// ==============================================>>> الصفحة <<<====================================
// -------------------))) APP (((-------------------
export default function Header() {
    //
    // Use State
    //
    const [active, setActive] = useState('#home')










    return (
        <header>
            <div className="container">
                <nav>
                    <a href="#home"       className={active === '#home'? 'active' : ''}        onClick={()=> setActive('#home')}><IoHomeOutline className='i'/></a>
                    <a href="#about"      className={active === '#about'? 'active' : ''}       onClick={()=> setActive('#about')}><IoInformationCircleOutline className='i'/></a>
                    <a href="#skills"     className={active === '#skills'? 'active' : ''}      onClick={()=> setActive('#skills')}><FaFreeCodeCamp className='i'/></a>
                    <a href="#contacts"   className={active === '#contacts'? 'active' : ''}    onClick={()=> setActive('#contacts')}><PiTelegramLogoDuotone className='i'/></a>
                </nav>
            </div>
        </header>
    );
}