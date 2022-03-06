import "./style/Container.scss"
import "../Colors.scss"

export default function Container(props) {
    return(
        <>
            <div className="container">
                <div className="wrapper" style={{width: props.width}}>
                    <h2 className="secondary">{props.title}</h2>
                    {props.children}
                </div>
            </div>
        </>
    )
}