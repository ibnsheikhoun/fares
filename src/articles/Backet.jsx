// ==============================================>>> روابط <<<====================================
// -------------------))) CSS (((-------------------
import '../public/css/components/articles.css'





























// ==============================================>>> الصفحة <<<====================================
// -------------------))) APP (((-------------------
export default function Backet({backetIcon, backetTitle, backetBody}) {
    return (
        <div className="backet">
            {backetIcon}
            <div className="info">
                <p className="backet_title">{backetTitle}</p>
                <p>{backetBody}</p>
            </div>
        </div>
    );
}