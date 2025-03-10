// ==============================================>>> روابط <<<====================================
// -------------------))) CSS (((-------------------
import '../public/css/components/about.css'
import '../public/css/components/articles.css'

import Title from '../articles/Title';
import Card from '../articles/Card';

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";




























// ==============================================>>> الصفحة <<<====================================
// -------------------))) ABOUT (((-------------------
export default function About() {
    //
    // List Rendering
    //
    const cards = [
        {
            cardId: 1,
            cardIcon:  <FaAward style={{ fontSize: "4rem" }}/>,
            cardTitle: "Experience",
            cardBody: "+3 years working"
        },
        {
            cardId: 2,
            cardIcon:  <FiUsers style={{ fontSize: "4rem" }}/>,
            cardTitle: "Clients",
            cardBody: "+99 worldwide"
        },
        {
            cardId: 3,
            cardIcon:  <VscFolderLibrary style={{ fontSize: "4rem" }}/>,
            cardTitle: "Projects",
            cardBody: "+30 completed"
        },
    ];
    
    const cardList = cards.map((card) => {
        return (
            <Card
                key={card.cardId}
                cardIcon={card.cardIcon}
                cardTitle={card.cardTitle}
                cardBody={card.cardBody}
            />
        );
    });









    return (
        <section className="section_about section_image_2" id="about">
            <Title
                title="about me"
            />

            <div className="container">

                <div className="cards">
                    {cardList}
                </div>

                <p>
                    I am Fares, a Full Stack Developer with strong expertise in both Front-end and Back-end technologies. With over three years of experience, I have served more than 99 clients worldwide and successfully completed over 30 projects.

                    Experience:
                    Over 3 years of continuous work providing innovative web development solutions.

                    Clients:
                    Serving over 99 clients around the world with top-notch web development services.

                    Projects:
                    Successfully completed more than 30 projects, focusing on quality and efficiency.

                    Skills:
                    Front-end: React, JavaScript, CSS, HTML.
                    Back-end: PHP, MySQL, Laravel.
                    Lets work together to create something amazing!
                </p>

                <hr />
                <div style={{ width: "100%", display: "flex", justifyContent: "right" }}>
                    <a className="button button_primary" href="#contacts">Contact</a>
                </div>
            </div>
        </section>
    );
}