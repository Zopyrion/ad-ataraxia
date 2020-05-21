import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useParams} from "react-router-dom";
import './Navigation.css';
import BlogPost from "../components/BlogPost";
import DynamicRoutes from "./DynamicRouter";
import Home from "../common/Home"
import METADATA from '../autogen/metadeta.json';
import Markdown from "../components/Markdown";
import Readmore from "./Readmore";

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
                                    <Link to="/" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
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
            </div>
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


function Test2(){
    return <article><h2>Test 2</h2></article>;
}


export default NavBar;