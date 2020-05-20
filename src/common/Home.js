import React from 'react';
import BlogPost from "../components/BlogPost";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <BlogPost title="HOME" file="readme.txt"></BlogPost>;
    }

}

export default Home;