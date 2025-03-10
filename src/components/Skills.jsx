// ==============================================>>> روابط <<<====================================
// -------------------))) CSS (((-------------------
import '../public/css/components/skills.css'
import '../public/css/components/articles.css'

import Title from '../articles/Title'
import Backet from '../articles/Backet'

import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaLaravel } from "react-icons/fa";


























// ==============================================>>> الصفحة <<<====================================
// -------------------))) APP (((-------------------
export default function Skills() {
    //
    // List Rendering
    //
    const backets = [
        {
            backetId: 1,
            backetIcon: <FaBootstrap style={{ fontSize: "4rem" }}/>,
            backetTitle: "Bootstrap",
            backetBody: "user interface"
        },
        {
            backetId: 2,
            backetIcon: <IoLogoJavascript style={{ fontSize: "4rem" }}/>,
            backetTitle: "JavaScript",
            backetBody: "Interaction"
        },
        {
            backetId: 3,
            backetIcon: <FaReact style={{ fontSize: "4rem" }}/>,
            backetTitle: "React",
            backetBody: "JavaScript Framework"
        },
        {
            backetId: 4,
            backetIcon: <FaPhp style={{ fontSize: "4rem" }}/>,
            backetTitle: "PHP",
            backetBody: "Web Server"
        },
        {
            backetId: 5,
            backetIcon: <GrMysql style={{ fontSize: "4rem" }}/>,
            backetTitle: "MySQL",
            backetBody: "Database"
        },
        {
            backetId: 6,
            backetIcon: <FaLaravel style={{ fontSize: "4rem" }}/>,
            backetTitle: "Laravel",
            backetBody: "PHP Framework"
        },
    ];

    const backetList = backets.map((backet) => {
        return (
            <Backet
                key={backet.backetId}
                backetIcon={backet.backetIcon}
                backetTitle={backet.backetTitle}
                backetBody={backet.backetBody}
            />
        );
    });









    return (
        <section className="section_skills section_image_3" id="skills">
            <Title
                title="my skills"
            />
            
            <div className="container">

                <div className="backets">
                    {backetList}
                </div>
            </div>
        </section>
    );
}