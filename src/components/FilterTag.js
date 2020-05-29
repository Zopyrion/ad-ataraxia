import React from 'react';


class FilterTag extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onTagToggled(this.props.name)
    }

    render() {
        let style = "btn-on"
        if(!this.props.status){
            style = "btn-off"
        }

        return (
            <button type="button" onClick={this.handleClick} className={'btn ' + style}>
                {this.props.name + " " + this.props.status}
            </button>
        )
    }

}


export default FilterTag;