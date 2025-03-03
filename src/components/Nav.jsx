import "../resources/ressurser.js";
import { showInfo } from "../resources/ressurser.js";

export default function Nav() {
return (
    <nav>
        <button className="button" onClick={() => showInfo('HTML')}></button>
        <button className="button" onClick={() => showInfo('CSS')}></button>
        <button className="button" onClick={() => showInfo('JavaScript')}>JavaScript</button>
        <button className="button" onClick={() => showInfo('React')}>React</button>
        <button className="button" onClick={() => showInfo('Sanity and headless CMS')}>Sanity and headless CMS</button>
    </nav>
)
}