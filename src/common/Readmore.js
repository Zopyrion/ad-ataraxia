import React from 'react';
import './Readmore.css';

class Readmore extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="readmore">
                    <a href="https://www.w3schools.com"> Read more ... </a>
                </div>
                <hr />
            </React.Fragment>
        );
    }

}

export default Readmore;