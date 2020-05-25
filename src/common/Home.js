import React from 'react';
import BlogPost from "../components/BlogPost";
import METADATA from '../autogen/metadeta.json';
import MultiPreview from "../components/MultiPreview";


class Home extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        document.title = "Ad Ataraxia";
    }

    render() {
        return (
            <MultiPreview tag="all"/>
        );
    }

}
//<BlogPost path={52288} preview={true} />
export default Home;