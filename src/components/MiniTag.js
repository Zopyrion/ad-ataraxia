import React from 'react';


class MiniTag extends React.Component {

    render() {
        return (
            <a href={"/tags/" + this.props.tag} className="minitag">{this.props.tag}</a>
        )
    }

}


export default MiniTag;