import React from 'react';


class FilterTag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onTagToggled(this.props.name, !this.state.isToggleOn)
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        let style = "btn-on"
        if(!this.state.isToggleOn){
            style = "btn-off"
        }

        return (
            <button type="button" onClick={this.handleClick} className={'btn ' + style}>
                {this.props.name}
            </button>
        )
    }

}


export default FilterTag;