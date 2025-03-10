// ==============================================>>> روابط <<<====================================
// -------------------))) CSS (((-------------------
import '../public/css/components/articles.css'





























// ==============================================>>> الصفحة <<<====================================
// -------------------))) APP (((-------------------
export default function Card({cardIcon, cardTitle, cardBody, children}) {
    return (
        <div className="card">
            {cardIcon}
            <p className="card_title">{cardTitle}</p>
            <p>
                {cardBody}
            </p>   
            {children}
        </div>
    );
}