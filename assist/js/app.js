let open=document.querySelector("#open"),nav=document.querySelector("#nav"),nav_right=document.querySelector("#nav_right");open.addEventListener("click",(()=>{nav.classList.toggle("nav_up"),nav.classList.contains("nav_up")?open.style.color="var(--color_light)":open.style.color=""})),open.addEventListener("click",(()=>{nav_right.classList.toggle("nav_right"),nav_right.classList.contains("nav_right")?open.style.color="var(--color_light)":open.style.color=""})),document.addEventListener("click",(e=>{nav.contains(e.target)||e.target===open||(nav.classList.remove("nav_up"),open.style.color="")}));let summary=document.querySelector("#summary"),close=document.querySelectorAll("#close"),color_container_hidden=document.querySelector("#color_container_hidden"),language_container_hidden=document.querySelector("#language_container_hidden");summary.addEventListener("click",(()=>{summary.classList.toggle("button_color"),summary.classList.toggle("rotate_45")})),close.forEach((e=>{e.addEventListener("click",(()=>{color_container_hidden.classList.remove("display_flex"),language_container_hidden.classList.remove("display_flex")}))}));let color_button=document.querySelector("#color_button"),list_buttons=document.querySelector("#list_buttons"),color_1=document.querySelector("#color_1"),color_2=document.querySelector("#color_2"),color_3=document.querySelector("#color_3");color_button.addEventListener("click",(()=>{color_container_hidden.classList.toggle("display_flex")})),color_1.addEventListener("click",(function(){let e=document.querySelector('link[href="assist/css/color_2.css"]'),o=document.querySelector('link[href="assist/css/color_3.css"]');e&&document.head.removeChild(e),o&&document.head.removeChild(o)})),color_2.addEventListener("click",(function(){let e=document.querySelector('link[href="assist/css/color_2.css"]'),o=document.querySelector('link[href="assist/css/color_3.css"]');if(!e){let e=document.createElement("link");e.rel="stylesheet",e.href="assist/css/color_2.css",document.head.appendChild(e)}o&&document.head.removeChild(o)})),color_3.addEventListener("click",(function(){let e=document.querySelector('link[href="assist/css/color_2.css"]');if(!document.querySelector('link[href="assist/css/color_3.css"]')){let e=document.createElement("link");e.rel="stylesheet",e.href="assist/css/color_3.css",document.head.appendChild(e)}e&&document.head.removeChild(e)}));let language_button=document.querySelector("#language_button"),language_arabic=document.querySelector("#language_arabic"),language_english=document.querySelector("#language_english"),language_francais=document.querySelector("#language_arabic");language_button.addEventListener("click",(()=>{language_container_hidden.classList.toggle("display_flex")}));