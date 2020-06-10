import React from 'react';
import {Route, Switch, useParams} from "react-router-dom";
import MultiPreview from "../../components/MultiPreview";
import {Logical} from "../../enums";


class Tags extends React.Component {

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
                    <hr className="style-double"/>
                </section>
            </article>
            <MultiPreview tags={ [tag] } logical={ Logical.AND } />
        </React.Fragment>
    );
}


export default Tags;