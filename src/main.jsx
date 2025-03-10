// ==============================================>>> روابط <<<====================================
// -------------------))) REACT (((-------------------
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'












// -------------------))) CSS (((-------------------
//
// Fonts
//
import './public/fonts/poppins.css'



//
// Settings
//
import './public/css/components/all.min.css'
import './public/css/components/style.css'



//
// App
//
import './public/css/app/classes.css'

























// ==============================================>>> الصفحة <<<====================================
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)