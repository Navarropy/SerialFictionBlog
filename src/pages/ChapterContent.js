import { useState, ueEffect, useEffect } from 'react'

import "./style/ChapterContent.scss"

import Container from "../components/Container"

export default function ChapterContent(props) {

    return(
        <Container width="100%">
            <h2>Chapter Title</h2>
            <p>Cras vestibulum vel risus non semper. Sed a pretium sapien. Maecenas sit amet finibus justo, at gravida justo. In hac habitasse platea dictumst. Sed nisi tortor, blandit id venenatis id, cursus non enim. Morbi tempor, nulla vel congue suscipit, dui orci interdum diam, et cursus nisl metus vitae risus. Quisque vulputate massa vel convallis cursus. Suspendisse eros ante, ullamcorper vel pellentesque eu, porttitor vel nibh. Vivamus placerat id augue in ornare. Nam accumsan viverra arcu at tempor. Aliquam erat volutpat. Phasellus sit amet dignissim dolor. Aliquam ipsum erat, sagittis et laoreet euismod, feugiat vel felis. Suspendisse suscipit ac leo vitae tincidunt. Aenean eleifend finibus ornare.</p>
            <p>Cras vestibulum vel risus non semper. Sed a pretium sapien. Maecenas sit amet finibus justo, at gravida justo. In hac habitasse platea dictumst. Sed nisi tortor, blandit id venenatis id, cursus non enim. Morbi tempor, nulla vel congue suscipit, dui orci interdum diam, et cursus nisl metus vitae risus. Quisque vulputate massa vel convallis cursus. Suspendisse eros ante, ullamcorper vel pellentesque eu, porttitor vel nibh. Vivamus placerat id augue in ornare. Nam accumsan viverra arcu at tempor. Aliquam erat volutpat. Phasellus sit amet dignissim dolor. Aliquam ipsum erat, sagittis et laoreet euismod, feugiat vel felis. Suspendisse suscipit ac leo vitae tincidunt. Aenean eleifend finibus ornare.</p>
        </Container>
    )
}