import {Route} from "react-router-dom";
import React from "react";
import METADATA from '../autogen/metadeta.json';
import BlogPost from "../components/BlogPost";


function DynamicRoutes() {
    const routeMap = METADATA['routes']

    return (
        <div>
            {Object.keys(routeMap).map((key, index) => (
                <Route path={routeMap[key]}> </Route>
        ))}
        </div>

    );
}

const dynamicRoutes2 = (
    <Route path="/test">
        <Test/>
    </Route>
)



function Test(){
    return <article><h2>Test</h2></article>;
}






export default DynamicRoutes