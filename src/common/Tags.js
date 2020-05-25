import React from 'react';
import METADATA from '../autogen/metadeta.json';
import {Link, Route, Switch, useParams} from "react-router-dom";
import BlogPost from "../components/BlogPost";
import MultiPreview from "../components/MultiPreview";


class Tags extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.match);
    }

    render() {
        const match = this.props.match;
        return (
            <Switch>
                <Route path={`${match.path}/:tag`}>
                    <Tag/>
                </Route>

                <Route path={match.path}>
                    <article><section><h1>Tags</h1><p>Tagger</p></section></article>
                </Route>
            </Switch>
        );
    }

}

function Tag() {
    let {tag} = useParams();
    return (
        <React.Fragment>
            <article>
                <section>
                    <h2>#{tag}</h2>
                    <hr/>
                </section>
            </article>
            <MultiPreview tag={tag}/>
        </React.Fragment>


    );
}


export default Tags;