import "./style/Container.scss"

export default function Container(props) {
    return(
        <>
            <div className="container">
                <div className="wrapper" style={{width: props.width}}>
                    <h2>{props.title}</h2>
                    {props.children}
                </div>
            </div>
        </>
    )
}