import React from 'react';
import Markdown from "./Markdown";
import Readmore from "../common/Readmore";
import Parser from "../util/parser"
import METADATA from '../autogen/metadeta.json';
import CONTENT from '../autogen/content.json';


class BlogPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sections: null, preview: props.preview};
    }

    componentDidMount() {
        const title = METADATA.mappings[this.props.path]
        const text = CONTENT[title].toString()
        const sections = text.split("===");
        this.setState({
            sections: sections
        })
    }

    render() {
        if(this.state.sections === null) {
            return null;
        }

        if(this.state.preview){
            return (
                    <article>
                        <Markdown key={-1} plaintext={this.state.sections[0]}> </Markdown>
                        <Readmore url={this.props.path} />
                    </article>
            );

        } else {
            const title = METADATA.mappings[this.props.path];
            const url = this.props.path + "/" + Parser.str_clean(title);
            window.history.replaceState(null, "Nov", "/posts/" + url);
            document.title = title;
            return (
                <article>
                    {this.state.sections.map((value, index) => {
                        return <Markdown key={index} plaintext={value}> </Markdown>
                    })}
                </article>
            );
        }
    }
}


export default BlogPost;