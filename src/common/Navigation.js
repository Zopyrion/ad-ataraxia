import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './Navigation.css';
import BlogPost from "../components/BlogPost";
import DynamicRoutes from "./DynamicRouter";
import Home from "../common/Home"
import METADATA from '../autogen/metadeta.json';

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

                            <Route path="/test2">
                                <Test2 />
                            </Route>

                            {routes.data.map((entry) =>
                                {
                                    return (
                                        <Route key={entry.key} path={entry.path}
                                            render={(props) => <BlogPost {...props} title={entry.title} file={entry.file} />}
                                        />
                                        )})
                            }

                            <Route path="/">
                                <Home />
                            </Route>

                        </Switch>

                </Router>
            </div>
        );
    }
}


const routes = {data: [
        {
            key: "test1",
            path: "/31590",
            file: "qwerty.txt"

        },
        {
            key: "test2",
            path: "/46937",
            file: "date.txt"
        }
    ]
}




function Tags(){
    return <article><h2>Tags</h2></article>;
}


function Test2(){
    return <article><h2>Test 2</h2></article>;
}


export default NavBar;