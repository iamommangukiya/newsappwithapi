import React, { Component } from "react";
import Navbar from "./com/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Newsfild from "./com/Newsfild";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <toNewsfild
                key="general"
                pageSize={8}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <toNewsfild
                key="business"
                pageSize={8}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <toNewsfild
                key="entertainment"
                pageSize={8}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <toNewsfild
                key="general"
                pageSize={8}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <toNewsfild
                key="health"
                pageSize={8}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <toNewsfild
                key="science"
                pageSize={8}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <toNewsfild
                key="sports"
                pageSize={8}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <toNewsfild
                key="technology"
                pageSize={8}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div> */}
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Newsfild
                key="businesss"
                pageSize={8}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <Newsfild
                key="business"
                pageSize={8}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <Newsfild
                key="entertainment"
                pageSize={8}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <Newsfild
                key="general"
                pageSize={8}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <Newsfild
                key="health"
                pageSize={8}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <Newsfild
                key="science"
                pageSize={8}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/technology">
              <Newsfild
                key="sports"
                pageSize={8}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/technology">
              <Newsfild
                key="technology"
                pageSize={8}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
