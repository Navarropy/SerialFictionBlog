import "./style/Menu.scss"

import { Link } from 'react-router-dom'

export default function Menu() {
    return(
        <>
            <nav>
                <div className="left-container">
                    <Link to="/Home">Home</Link>
                </div>
                <div className="right-container">
                    <Link to="/Chapter">Chapter</Link>
                    <Link to="/Story">Story</Link>
                </div>
            </nav>
            <div className="ghost-nav"></div>
        </>
    )
}