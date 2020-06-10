import React from 'react';
import './Readmore.css';

class Readmore extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="readmore">
                    <a  href={'/posts/' + this.props.url + "#h1"}  > Read more ... </a>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}

export default Readmore;