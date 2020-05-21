import React from 'react';
import BlogPost from "../components/BlogPost";
import METADATA from '../autogen/metadeta.json';


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    test(){

    }

    render() {
        const test = 0;

        return (

            <React.Fragment>

                <BlogPost path={17190} preview={true} />
                <BlogPost path={52288} preview={true} />
            </React.Fragment>


        );
    }

}
//<BlogPost path={52288} preview={true} />
export default Home;