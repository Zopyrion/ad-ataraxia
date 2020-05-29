import React from 'react';
import METADATA from '../autogen/metadeta.json';
import Toggle from 'react-toggle';
import FilterTag from "../components/FilterTag";
import {Logical} from "../enums";


class Filter extends React.Component {

    constructor(props) {
        super(props);
        const tags = {}
        for (const [key] of Object.entries(METADATA.sorted)) {
            tags[key] = true
        }
        this.state = {
            logical: Logical.OR,
            tags: tags,
            numPossibleTags: Object.keys(tags).length
        }
        this.onLogicalToggled = this.onLogicalToggled.bind(this);
        this.onTagToggled = this.onTagToggled.bind(this);
    }

    onLogicalToggled(){
        if(this.state.logical === 'AND'){
            this.setState({logical: Logical.OR}, this.callback)
        } else {
            this.setState({logical: Logical.AND}, this.callback)
        }
    }

    onTagToggled(name) {
        const tagsCopy = {...this.state.tags};
        const bool = !tagsCopy[name];
        let numSet = 0;

        // Toggle clicked switch
        for (const [key, value] of Object.entries(this.state.tags)) {
            if(name === 'all'){
                tagsCopy[key] = bool
            } else {
                tagsCopy[name] = bool
                if(key !== 'all' && bool === false){
                    tagsCopy['all'] = false
                }
            }
            if(tagsCopy[key] === true){
                numSet++;
            }
        }

        // Check 'all' tag if every other tag selected
        if(numSet === this.state.numPossibleTags - 1){
            if(this.state.tags['all'] === false){
                tagsCopy['all'] = true;
            }
        }
        this.setState({tags: tagsCopy}, this.callback);
    }

    callback(){
        const tags = []
        for (const [key, value] of Object.entries(this.state.tags)) {
            if(key !== 'all' && value === true){
                tags.push(key);
            }
        }
        this.props.onFilterChanged(this.state.logical, tags)
    }

    render() {

        let tags = [];
        for(const tag in METADATA.sorted){
            tags.push(<FilterTag key={tag} name={tag} status={this.state.tags[tag]} onTagToggled={this.onTagToggled}/>);
        }

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

                { tags }

            </React.Fragment>
        );
    }

}


export default Filter;