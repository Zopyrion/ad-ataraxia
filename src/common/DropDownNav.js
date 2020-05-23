import React from 'react';
import METADATA from '../autogen/metadeta.json';
import {Link} from "react-router-dom";


class DropDownNav extends React.Component {

    render() {
        return <li className="dropdown">
            <Link to="/tags">Posts</Link>
            <div id="TOC">
                <ul>
                    {
                        Object.keys(METADATA.sorted).map((key, index) => (
                            <li><a href={'tags/' + key}><span>#{key}</span></a></li>
                        ))
                    }
                </ul>
            </div>
        </li>
    }

}

export default DropDownNav;