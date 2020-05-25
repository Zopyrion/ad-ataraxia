import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch} from "react-router-dom";
import Home from "../common/Home"
import DropDownNav from "./DropDownNav";
import Tags from "./Tags";
import Posts from "./Posts";
import Game from "../components/Game";
import Contact from "./Contact";


class NavBar extends React.Component {

    render() {

        return (
            <React.Fragment >
                <Router>
                    <div id="navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Socials</Link>
                                </li>
                                <DropDownNav />
                            </ul>
                        </nav>
                    </div>

                        <Switch>
                            <Route path="/tags">
                                <GoTags />
                            </Route>

                            <Route path="/projects">
                                <Projects />
                            </Route>

                            <Route path="/posts">
                                <GoPosts />
                            </Route>

                            <Route path="/contact">
                                <Contact />
                            </Route>


                            <Route path="/">
                                <GoHome />
                            </Route>

                        </Switch>

                </Router>
            </React.Fragment>
        );
    }
}



function GoPosts(){
    let match = useRouteMatch();
    return (
        <Posts match={match}/>
    );

}

function GoTags(){
    let match = useRouteMatch();
    return (
        <Tags match={match}/>
    );

}

function Projects() {

    return (
        <React.Fragment>

            <article><section><h1>Projects</h1><p>Projects</p></section></article>

            <Game/>
        </React.Fragment>

    );
}

function GoHome(){
    return <Home />
}

export default NavBar;