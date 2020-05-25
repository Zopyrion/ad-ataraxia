import React from 'react';
import BlogPost from "../components/BlogPost";
import METADATA from '../autogen/metadeta.json';


class MultiPreview extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Ad Ataraxia";
    }

    render() {
        const tag = this.props.tag
        const size = Math.min(METADATA.sorted[tag].length, 3)

        return (
            <React.Fragment>
                {Array(size).fill(1).map((el, i) =>
                    <BlogPost key={i} path={METADATA.routes[METADATA.sorted[tag][i]]} preview={true} />
                )}
                <br /><br /><br /><br /><br /><br />
            </React.Fragment>

        );
    }
}


export default MultiPreview;