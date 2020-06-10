import React from 'react';
import MultiPreview from "../../components/MultiPreview";


class Home extends React.Component {

    componentDidMount() {
        document.title = "Ad Ataraxia";
    }

    render() {
        return (
            <MultiPreview tags={['all']} fade={false}/>
        );
    }

}

export default Home;