// ==============================================>>> روابط <<<====================================
// -------------------))) CSS (((-------------------
import '../public/css/components/home.css';
import '../public/css/components/articles.css';

import Title from '../articles/Title';

import { FaInstagram } from "react-icons/fa";
























// ==============================================>>> الصفحة <<<====================================
// -------------------))) Home (((-------------------
export default function Home() {
    return (
        <section className="section_background_text section_image_1" id="home">
            <div className="container">
                <div className="info">
                    {/* -------------------))) إضافة (((------------------- */}
                    {/*
                        Animation
                    */}
                    <Title
                        title="Full-Stack"
                    />
                    {/*
                        Animation
                    */}
                    <Title
                        title="Developer"
                    />
                    {/*
                        الأصل
                        <h1>Full-Stack Developer</h1> 
                    */}
                    {/* -------------------))) إضافة (((------------------- */}
                    <div className="info">
                        <a className="button button_primary" href="../public/files/CV.PDF" download>Download CV</a>
                        <a className="button button_primary" href="#contacts">Contact</a>
                    </div>
                </div>
                {/* -------------------))) Social (((------------------- */}
                <div className="social">
                    <a href="https://www.instagram.com/ibnsheikhoun7/" target="_blank"><FaInstagram className='i'/></a>
                </div>
                {/* -------------------))) Social (((------------------- */}
            </div>
        </section>
    );
}