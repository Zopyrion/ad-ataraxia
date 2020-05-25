import React from 'react';
import {Route, Switch, useParams} from "react-router-dom";
import BlogPost from "../components/BlogPost";
import Filter from "../components/Filter";

class Posts extends React.Component {

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