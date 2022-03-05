import "./style/Story.scss"

import Container from '../components/Container';

export default function Story() {
    return(
        <div className="storypage-container">
            <div className="left">
                <Container width={"100%"} title={"Story Name"}>
                    <div className="story-poster">
                        <img src="https://br.web.img3.acsta.net/pictures/19/03/21/16/16/4487457.jpg" width="276px" height="400px"/>
                    </div>
                    <h3>Story Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus orci lacinia, vulputate ligula eu, commodo est. Morbi aliquam volutpat facilisis. Nulla ante est, lobortis non urna ac, egestas pellentesque nunc. Ut eget dui tempor justo consequat euismod. Suspendisse quis rutrum diam. Morbi efficitur nibh et tempus varius. Curabitur ante arcu, fermentum eu varius non, pulvinar ultricies est. Donec sapien nibh, luctus et nisl vitae, elementum rutrum magna. Sed eu turpis non magna viverra semper vel nec sapien. </p>
                </ Container>
            </div>
            <div className="right">
                <Container width={"100%"} title={"Story Name"}>
                    <ul>
                        <li>Table of Contents</li>
                        <li>Chapter 1</li>
                        <li>Chapter 2</li>
                        <li>Chapter 3</li>
                        <li>Chapter 4</li>
                        <li>Chapter 5</li>
                        <li>Chapter 6</li>
                        <li>Chapter 7</li>
                        <li>Chapter 8</li>
                        <li>Chapter 9</li>
                        <li>Chapter 10</li>
                        <li>Chapter 11</li>
                        <li>Chapter 12</li>
                        <li>Chapter 13</li>
                        <li>Chapter 14</li>
                        <li>Chapter 15</li>
                        <li>Chapter 16</li>
                        <li>Chapter 17</li>
                        <li>Chapter 18</li>
                        <li>Chapter 19</li>
                        <li>Chapter 20</li>
                    </ul>
                </ Container>
            </div>
        </div>
    )
}