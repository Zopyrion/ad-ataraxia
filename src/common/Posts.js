import React from 'react';
import METADATA from '../autogen/metadeta.json';
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import Toggle from 'react-toggle';
import BlogPost from "../components/BlogPost";
import Filter from "../components/Filter";

class Posts extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const match = this.props.match;
        return (
            <Switch>
                <Route path={`${match.path}/:postId`}>
                    <Post />
                </Route>

                <Route path={match.path}>
                    <article>
                        <section>
                            <h1>Tags</h1><p>Tagger</p>
                            <Filter />
                        </section>
                    </article>
                </Route>
            </Switch>
        );
    }

}

function Post() {
    let { postId } = useParams();
    return <BlogPost path={postId} preview={false} />;
}


export default Posts;