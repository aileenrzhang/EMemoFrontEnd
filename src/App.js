import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Typography';
import TypoGraphy from '@material-ui/core/Typography';
import organizationPosts from './organizationPosts';
import Forum from './Forum';

function Company(props) {
  return (
    <div class="Company-Name">
      <h1>Welcome to {props.name}</h1>
    </div>
  )
}

function Post(props) {
  return (
    <div class="Comment" onClick={() => this.getPosts("402881d0763a18a901763a19c70e0000")}>
      <div class="comment-grid">
        <div class="comment-left">
          <div class="UserInfo">
            <img class="Avatar"
              src={props.avatarUrl}
              alt={props.name}
            />
          </div>
        </div>
        <div class="comment-right">
          <div class="UserInfo-name">
            <p>{props.name}</p>
          </div>
          <div class="Comment-text">
            {props.text}
          </div>
        </div>
      </div>
      {/* <div className="Comment-date">
        {formatDate(props.date)}
      </div> */}
    </div>
  );
}

function App() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title"
            color="inherit"
          >
            Welcome to eMemo!
          </TypoGraphy>
        </Toolbar>
      </AppBar>

      <Company name="The Blakery"></Company>
      <Forum name="Coding God" avatarUrl="https:via.placeholder.com/100" text="Wow I'm a coding god !!" />
      {/*<Post name="Coding God" avatarUrl="https:via.placeholder.com/100" text="Wow I'm a coding god !!"/>
      <Post name="Donair King" avatarUrl="https:via.placeholder.com/100" text="Wow I'm a Donair king !!"/>
      <Post name="Mandarin King" avatarUrl="https:via.placeholder.com/100" text="Wow I'm a Mandarin king !!"/>
  <Post name="Evan" avatarUrl="https:via.placeholder.com/100" text="Wow I'm a whole ass clown !!"/>*/}
    </div>
  );
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

export default App;
