import React from 'react';
import Markdown from "./Markdown";
import Readmore from "./Readmore";
import Parser from "../util/parser"
import METADATA from '../autogen/metadeta.json';
import CONTENT from '../autogen/content.json';
import MiniTag from "./MiniTag";


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
            const reducedPlaintext = this.state.sections[0].replace(/.*(?<=@)(.*)(?=@).*/, "");
            return (
                    <article>
                        <Markdown key={-1} plaintext={reducedPlaintext}> </Markdown>
                        <Readmore url={this.props.path} />
                    </article>
            );

        } else {
            const title = METADATA.mappings[this.props.path];
            const url = this.props.path + "/" + Parser.str_clean(title);
            const minitags = [];


            const ref = METADATA.all[title];
            for(const tag of ref.tags){
                minitags.push(
                    <MiniTag key={1} tag={tag}/>
                );
            }

            window.history.replaceState(null, "Nov", "/posts/" + url);
            document.title = title;
            return (
                <article>
                    {this.state.sections.map((value, index) => {
                        return <Markdown key={index} plaintext={value}> </Markdown>
                    })}
                    <section>
                        { minitags }
                    </section>
                </article>
            );
        }
    }
}


export default BlogPost;