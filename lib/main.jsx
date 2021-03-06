//all import statements must go at the top of the file.
import React from 'react';
import Board from './example-board';
import Controls from './example-controls';

//get the content DOMElemet create in index.html
let content = document.getElementById('content');

//This is a React class. It's main methods are 'getInitialState', and 'render'.
let Main = React.createClass({

    getInitialState() {
        return {
            size: this.props.size,
            squareSize: this.props.squareSize
        };
    },

    render() {
        return <div>
            <Controls control={this}/>
            <Board size={this.state.size} squareSize={this.state.squareSize}/>
        </div>;
    },

    play() {
        console.log("Play");
    },

    stop() {
        console.log("Stop");
    },

    reset() {
        console.log("Reset");
    },

    setSize() {
        //we update our internal state.
        this.state.size = 7;
        //setting our state forces a rerender, which in turn will call the render() method
        //of this class. This is how everything gets redrawn and how you 'react' to user input
        //to change the state of the DOM.
        this.setState(this.state);
    }
});

//this is the entry point into react. From here on out we deal almost exclusively with the
//virtual DOM. Here we tell React to attach everything to the content DOM element.
React.render(<Main squareSize={80} size={5}/>, content, () => {
    console.log("Rendered!");
});
