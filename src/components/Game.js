import React from 'react';
import ReactGodot from 'react-godot'


class Game extends React.Component {
    render () {
        const examplePck = "/godot/normal-dist.pck"
        const exampleEngine = "/godot/normal-dist.js"
        return (
            <ReactGodot pck={examplePck} script={exampleEngine} />
        )
    }
}

export default Game;