import { useEffect } from 'react'

import "./style/Redditor.scss"

import Container from "./Container"


export default function Redditor() {
    return(
    <div className="reddit">
        <Container width="90%" title={"Redditor of the Week"}>
        <div className="person">
            <img src="https://i.imgur.com/7bGaqg7.jpg" width="120px" height="120px" />
            <div className="person-data tertiary"><strong>@User</strong> was the most active person on <strong>/r/Heavark</strong> this week, engaging on <strong>X</strong> topics.</div>
        </div>
        </Container>
    </div>
    )
} 