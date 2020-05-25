import React from 'react';
import METADATA from '../autogen/metadeta.json';
import Toggle from 'react-toggle';
import FilterTag from "../components/FilterTag";

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {logical: 'AND'}
        this.onLogicalToggled = this.onLogicalToggled.bind(this);
    }

    onLogicalToggled(){
        if(this.state.logical === 'AND'){
            this.setState({logical: 'OR'})
        } else {
            this.setState({logical: 'AND'})
        }
    }

    onTagToggled(name, status) {
        console.log(name, status);
    }

    render() {
        return (
            <React.Fragment>
                <label>
                    <span>OR(∨) {'\u00A0'}</span>
                    <Toggle
                        defaultChecked={false}
                        icons={false}
                        onChange={this.onLogicalToggled}
                    />
                    <span>{'\u00A0'} AND(^)</span>
                    <br/><br/>
                </label>
                {
                    Object.keys(METADATA.sorted).map((key, index) => (
                        <FilterTag key={key} name={key} onTagToggled={this.onTagToggled}/>)
                    )
                }
            </React.Fragment>
        );
    }

}



export default Filter;