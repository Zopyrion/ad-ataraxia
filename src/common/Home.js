import React from 'react';
import MultiPreview from "../components/MultiPreview";


class Home extends React.Component {

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