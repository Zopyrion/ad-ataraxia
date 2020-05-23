import React from 'react';
import BlogPost from "../components/BlogPost";
import METADATA from '../autogen/metadeta.json';


class Home extends React.Component {

    constructor(props) {
        super(props);

    }

    test(){

    }

    componentDidMount() {
        document.title = "Ad Ataraxia";
    }

    render() {
        const size = Math.min(METADATA.sorted.all.length, 3)

        return (
            <React.Fragment>
            {Array(size).fill(1).map((el, i) =>
                <BlogPost key={i} path={METADATA.routes[METADATA.sorted.all[i]]} preview={true} />
            )}
            </React.Fragment>

        );
    }

}
//<BlogPost path={52288} preview={true} />
export default Home;