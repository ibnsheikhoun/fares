// ==============================================>>> روابط <<<====================================
// -------------------))) CSS (((-------------------
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../public/css/components/contacts.css'
import '../public/css/components/articles.css'

import Title from '../articles/Title'
import Card from '../articles/Card'

import { FaInstagram } from "react-icons/fa";
























// ==============================================>>> الصفحة <<<====================================
// -------------------))) APP (((-------------------
export default function Contacts() {
    //
    // Email JS
    //
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ng92u5w', 'template_tyn968a', form.current, 'qewbJM6-wZxQRBNTb')

      e.target.reset()
    };



    //
    // List Rendering
    //
    const cards = [
        {
            cardId: 1,
            cardIcon:  <FaInstagram style={{ fontSize: "4rem" }}/>,
            cardTitle: "Instagram",
            cardBody: "ibnsheikhoun7",
            children: (
                <div>
                    <p style={{ margin: "0.5rem 0" }}></p>
                    <a className="button button_primary" href="https://www.instagram.com/ibnsheikhoun7/" target="_blank">Send me</a>
                </div>
            ),
        },
    ];
    
    const cardList = cards.map((card) => {
        return (
            <Card
                key={card.cardId}
                cardIcon={card.cardIcon}
                cardTitle={card.cardTitle}
                cardBody={card.cardBody}
            >
                {card.children}
            </Card>
        );
    });









    return (
        <section className="section_contacts section_image_4"  id="contacts">
            <Title
                title="Contacts"
            />
            
            <div className="container form_container">
                <div className="form_first">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Your name..." name="name" />
                        <input type="text" placeholder="Your instagram user..." name="instagram" />
                        <textarea placeholder="Your message..." name="message"></textarea>
                        <button className="input_button">Send me</button>
                    </form>
                </div>

                <br /><br /><br /><br />

                <div className="form_second">
                    <div className="cards">
                        {cardList}
                    </div>
                </div>
            </div>
        </section>
    );
}