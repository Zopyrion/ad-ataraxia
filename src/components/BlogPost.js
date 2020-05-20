import React from 'react';
import Markdown from "./Markdown";
import Readmore from "../common/Readmore";

class BlogPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sections: null};
        console.log(props.title)
    }

    componentWillMount() {
        const path = require("../posts/" + this.props.file);
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
        if(this.state.sections === null)
            return null;

        const preview = true;

        if(preview){
            return (
                <div>
                    <article>
                        <Markdown key={-1} plaintext={this.state.sections[0]}> </Markdown>
                        <Readmore></Readmore>

                    </article>
                </div>
            );
        }

        return (
            <article>
                {this.state.sections.map((value, index) => {
                    return <Markdown key={index} plaintext={value}> </Markdown>
                })}
            </article>
        );
    }

}

export default BlogPost;