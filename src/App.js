import './App.scss';
import './style/TheoryOfTheWeek.scss'
import './style/Person.scss'

import Menu from './components/Menu';
import Container from './components/Container';

function App() {
  return (
    <div className="main-Container">
      <Menu />
      <div className="homepage-story">
        <h2>Story Name</h2>
        <div className="homepage-story-list">
          <div className="homepage-story-item"></div>
          <div className="homepage-story-item"></div>
        </div>
      </div>

      <div className="stats-container">
        <Container width={"50%"} title={"Theory of the Week"}>
          <div className="TheoryOfTheWeek">
            <h3>Seraf is the King of Skulls</h3>
            By notSerafia
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum sapien, vulputate in gravida sed, elementum non massa. Maecenas commodo diam ac massa sodales, nec gravida risus elementum. Praesent suscipit venenatis dui at consectetur. Vestibulum at tincidunt mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum sapien, vulputate in gravida sed, elementum non massa. Maecenas commodo diam ac massa sodales, nec gravida risus elementum. Praesent suscipit venenatis dui at consectetur. Vestibulum at tincidunt mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum sapien, vulputate in gravida sed, elementum non massa. Maecenas commodo diam ac massa sodales, nec gravida risus elementum. Praesent suscipit venenatis dui at consectetur. Vestibulum at tincidunt mi. </p>
            <div className="read-more">Click to read more</div>
          </div>
        </Container>
        <div className="person-of-the-week">
          <div className="reddit">
            <Container width="90%" title={"Redditor of the Week"}>
              <div className="person">
                  <img src="https://i.imgur.com/7bGaqg7.jpg" width="120px" height="120px" />
                  <div className="person-data"><strong>@User</strong> was the most active person on <strong>/r/Heavark</strong> this week, engaging on <strong>X</strong> topics.</div>
              </div>
            </Container>
          </div>
          <div className="discord">
            <Container width="90%" title={"Discorder of the Week"}>
              <div className="person">
                  <img src="https://i.pinimg.com/736x/92/b5/7c/92b57c5cdad2191571e59818a2efcbde.jpg" width="120px" height="120px" />
                  <div className="person-data"><strong>@User</strong> was the most active person on <strong>The Server of Heavark</strong> this week, engaging on <strong>X</strong> topics.</div>
              </div>
            </Container>
          </div>
        </div>
        <div className="art-of-the-week">
          <Container width="90%" title={"Art of the Week"}>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb58b8ec-b3b1-4677-8cff-cd284638c251/deqix2x-1eb94803-37b0-4d44-bc48-6daf28871011.jpg/v1/fill/w_446,h_350,q_70,strp/arlinn_by_akreon_deqix2x-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3OCIsInBhdGgiOiJcL2ZcL2JiNThiOGVjLWIzYjEtNDY3Ny04Y2ZmLWNkMjg0NjM4YzI1MVwvZGVxaXgyeC0xZWI5NDgwMy0zN2IwLTRkNDQtYmM0OC02ZGFmMjg4NzEwMTEuanBnIiwid2lkdGgiOiI8PTE1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.imzWtWzTSLJ_FAoq5Rsv8bRT9HADPXF6Ajb3Wd-UXnU" />
          </Container>
        </div>
      </div>
    </div>
  )
}

export default App;
