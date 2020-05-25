import React from 'react';
import Markdown from "./Markdown";
import Readmore from "../common/Readmore";
import Parser from "../util/parser"
import METADATA from '../autogen/metadeta.json';


class BlogPost extends React.Component {

    constructor(props) {
        super(props);
        //let preview = this.props.path !== Parser.get_path(window.location.href);
        this.state = {sections: null, preview: props.preview};


    }

    componentDidMount() {
        const code = METADATA.mappings[this.props.path]
        const path = require("../posts/" + METADATA.all[code].file);
        fetch(path)
            .then(response => {
                return response.text()
            })
            .then(text => {
                const sections = text.split("===");
                this.setState({
                    sections: sections
                })
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