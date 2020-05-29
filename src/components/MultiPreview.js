import React from 'react';
import BlogPost from "../components/BlogPost";
import METADATA from '../autogen/metadeta.json';
import {Logical} from '../enums'
import _ from "underscore";
import FadeIn from 'react-fade-in';

class MultiPreview extends React.Component {

    componentDidMount() {
        document.title = "Ad Ataraxia";
    }

    retrievePostsURL(){
        let posts = [];

        for(const [,tag] of Object.entries(this.props.tags)){
            if(tag === 'all'){
                continue;
            }
            if(this.props.logical === Logical.OR){
                posts = _.union(posts, METADATA.sorted[tag]);

            } else if(this.props.logical === Logical.AND){
                if(posts.length === 0){
                    posts = METADATA.sorted[tag]
                } else {
                    posts = _.intersection(posts, METADATA.sorted[tag]);
                }

            }
        }
        return posts;
    }

    retrieveAllURL(){
        return METADATA.sorted['all'];
    }

    componentWillReceiveProps(){
        this.forceUpdate();
    }

    render() {
        let postsURL = [];
        if(this.props.tags.length === 1 && this.props.tags[0] === 'all'){
            postsURL = this.retrieveAllURL();
        } else {
            postsURL = this.retrievePostsURL();
        }


        const size = Math.min(postsURL.length, 3)
        let posts = [];
        for(let i = 0; i < size; i++){
            const path = METADATA.routes[postsURL[i]];
            posts.push(<BlogPost key={path} path={path} preview={true}/>);
        }

        // Filter found no results
        if(posts.length === 0){
            return(
                <FadeIn>
                    <article>
                        <section>
                            <p>No posts found with the search criteria.</p>
                        </section>
                    </article>
                </FadeIn>
            );
        }

        // Render previews
        if(this.props.fade){
            return (
                <React.Fragment>
                    <FadeIn>
                        { posts }
                    </FadeIn>
                    <br /><br /><br /><br /><br /><br />
                </React.Fragment>

            );
        } else{
            return (
                <React.Fragment>
                    { posts }
                    <br /><br /><br /><br /><br /><br />
                </React.Fragment>

            );
        }
    }
}


export default MultiPreview;