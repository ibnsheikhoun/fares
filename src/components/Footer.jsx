// ==============================================>>> روابط <<<====================================
// -------------------))) CSS (((-------------------
import '../public/css/components/footer.css'

import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";




























// ==============================================>>> الصفحة <<<====================================
// -------------------))) APP (((-------------------
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="contact">
                    <h3 className="section_title">Contact us</h3>
                    <p style={{ fontSize: "var(--h6_size)", fontWeight: "var(--h6_weight)", whiteSpace: "nowrap", display: "flex", gap: "0.5rem", alignItems: "center", justifyContent: "center", }}><IoLocationOutline style={{ border: "var(--border_text)", borderRadius: "1rem", fontSize: "1.5rem",            width: "2rem", height: "2rem",          display: "flex", alignItems: "center", justifyContent: "center", }} className='i'/> Egypt, Cairo, Ain Shams</p>
                    <a href="https://www.instagram.com/ibnsheikhoun7/" target="_blank"><FaInstagram className='i' style={{ fontSize: "1.4rem", width: "2rem", height: "2rem"}}/> ibnsheikhoun7</a>
                </div>
                <a className="copyright" href="https://www.instagram.com/ibnsheikhoun7/" target="_blank">2025 &copy; fares, all rights reserved</a>
            </div>
        </footer>
    );
}