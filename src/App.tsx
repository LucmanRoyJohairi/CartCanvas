import { Route } from "wouter";
import LandingPage from "./pages/landingPage";

const App = () => {
  return (
    <div className="font-body">
      {/* <Link href="/users/1">
      <a className="link">Profile</a>
    </Link> */}
      <Route path="/" component={LandingPage} />
      <Route path="/users/:name">
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
      {/* <Route path="/inbox" component={InboxPage} /> */}
    </div>
  );
};

export default App;
