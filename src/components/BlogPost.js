import React from 'react';

import Markdown from "./Markdown";

class BlogPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sections: null};
    }

    componentWillMount() {
        const path = require("../posts/readme.txt");
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