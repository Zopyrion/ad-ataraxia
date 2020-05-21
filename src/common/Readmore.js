import React from 'react';
import './Readmore.css';

class Readmore extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        //onClick={this.handleClick.bind(this)}
        return (
            <React.Fragment>
                <div className="readmore">
                    <a className="abc" href={'posts/' + this.props.url}  > Read more ... </a>
                </div>
                <hr />
            </React.Fragment>
        );
    }

}

export default Readmore;