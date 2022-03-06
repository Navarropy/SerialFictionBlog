import "./style/Chapter.scss"

export default function Chapter() {
    return(
        <div className="chapter-container">
            <div className="left">
                <Chapter></Chapter>
            </div>
            <div className="right"></div>
        </div>
    )
}