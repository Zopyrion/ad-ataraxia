import React from 'react';
import {Route, Switch, useParams} from "react-router-dom";
import BlogPost from "../../components/BlogPost";
import Filter from "../../components/Filter";
import MultiPreview from "../../components/MultiPreview";
import { Logical } from "../../enums";


class Posts extends React.Component {

    constructor(props) {
        super(props);
        const tags = [];


        for(const tag in props.tags){
            tags.push(tag);
        }


        this.state = {
            logical: Logical.OR,
            tags: tags
        }
        this.onFilterChanged = this.onFilterChanged.bind(this);
    }

    onFilterChanged(logical, tags){
        this.setState({logical: logical, tags: tags})
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
                            <Filter setTags={this.state.tags} onFilterChanged={this.onFilterChanged}/>
                        </section>
                    </article>

                    <MultiPreview tags={ this.state.tags } logical={ this.state.logical } fade={ true }/>
                </Route>

            </Switch>
        );
    }

}

function Post() {
    let { postId } = useParams();
    return(
        <React.Fragment>
            <BlogPost path={postId} preview={false} />
        </React.Fragment>
    );
}


export default Posts;