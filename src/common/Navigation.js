import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './Navigation.css';
import BlogPost from "../components/BlogPost";


class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div >
                <Router>
                    <div id="navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/tags">Tags</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                        <Switch>
                            <Route path="/tags">
                                <Tags />
                            </Route>
                            <Route path="/">
                                <BlogPost />
                            </Route>
                        </Switch>

                </Router>
            </div>
        );
    }
}

function Tags(){
    return <article><h2>Tags</h2></article>;
}



export default NavBar;