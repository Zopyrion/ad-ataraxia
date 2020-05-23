import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useParams} from "react-router-dom";
import BlogPost from "../components/BlogPost";
import Home from "../common/Home"
import DropDownNav from "./DropDownNav";


class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

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

                                <DropDownNav></DropDownNav>

                                <li>
                                    <Link to="/projects">Socials</Link>
                                </li>

                            </ul>


                        </nav>
                    </div>

                        <Switch>
                            <Route path="/tags">
                                <Tags />
                            </Route>

                            <Route path="/projects">
                                <Projects />
                            </Route>

                            <Route path="/posts">
                                <Topics />
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


function Topics() {
    let match = useRouteMatch();
    return (

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>


                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>

    );
}

function Topic() {
    let { topicId } = useParams();
    return <BlogPost path={topicId} preview={false} />;
}

function Projects() {

    return (
        <React.Fragment>

            <BlogPost path={46937} preview={true} />
        </React.Fragment>

    );
}

function GoHome(){
    return <Home />
}


function Tags(){
    return (<article><section><h1>Tags</h1><p>Tagger</p></section></article>);
}



export default NavBar;