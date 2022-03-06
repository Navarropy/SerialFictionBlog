import "./style/Home.scss"

import "../Colors.scss"


import Container from '../components/Container';
import HomepageStory from '../components/Homepage-story';
import Footer from "../components/Footer";

export default function Home() {
    return(
        <>
            <HomepageStory />

            <div className="stats-container">
                <Container width={"50%"} title={"Theory of the Week"}>
                    <div className="TheoryOfTheWeek">
                        <div className="title">
                            <h3 className="primary">Seraf is the King of Skulls</h3>
                            <p className="tertiary">By notSerafia</p>
                        </div>
                        <p className="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum sapien, vulputate in gravida sed, elementum non massa. Maecenas commodo diam ac massa sodales, nec gravida risus elementum. Praesent suscipit venenatis dui at consectetur. Vestibulum at tincidunt mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum sapien, vulputate in gravida sed, elementum non massa. Maecenas commodo diam ac massa sodales, nec gravida risus elementum. Praesent suscipit venenatis dui at consectetur. Vestibulum at tincidunt mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum sapien, vulputate in gravida sed, elementum non massa. Maecenas commodo diam ac massa sodales, nec gravida risus elementum. Praesent suscipit venenatis dui at consectetur. Vestibulum at tincidunt mi. </p>
                        <div className="read-more secondary"><a href="" target="_blank">Click to read more</a></div>
                    </div>
                </Container>
                <div className="person-of-the-week">
                <div className="reddit">
                    <Container width="90%" title={"Redditor of the Week"}>
                    <div className="person">
                        <img src="https://i.imgur.com/7bGaqg7.jpg" width="120px" height="120px" />
                        <div className="person-data tertiary"><strong>@User</strong> was the most active person on <strong>/r/Heavark</strong> this week, engaging on <strong>X</strong> topics.</div>
                    </div>
                    </Container>
                </div>
                <div className="discord">
                    <Container width="90%" title={"Discorder of the Week"}>
                        <div className="person">
                            <img src="https://i.pinimg.com/736x/92/b5/7c/92b57c5cdad2191571e59818a2efcbde.jpg" width="120px" height="120px" />
                            <div className="person-data tertiary"><strong>@User</strong> was the most active person on <strong>The Server of Heavark</strong> this week, engaging on <strong>X</strong> topics.</div>
                        </div>
                    </Container>
                </div>
                </div>
                <div className="art-of-the-week">
                    <Container width="90%" title={"Art of the Week"}>
                        <div className="art-container">
                            <div className="title">
                                <h3 className="primary">Seraf is the King of Skulls</h3>
                                <p className="tertiary">By notSerafia</p>
                            </div>
                            <div className="artworks">
                                <img src="https://1.bp.blogspot.com/-n4Glnj1dNhA/XHhRf81VFBI/AAAAAAAAOKY/b1F3r6k0cEwlWVOJ44v3SwvneJFQvpWswCLcBGAs/s1600/gt8_key_fb_9x16_dani-embed_2019.jpg" height="20%" width="100%" />
                                <div className="previous-artworks">
                                <div className="title">
                                    <h3 className="primary">Previous Artworks</h3>
                                </div>
                                    <ul>
                                        <li>This is a drawing that was created by a user on reddit who likes the story enough to make an art about it.</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    )
}