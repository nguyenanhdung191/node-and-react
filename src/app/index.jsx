import React from 'react';
import Render from 'react-dom';

class App extends React.Component {
    render () {
        return <p> Hello React!</p>;
    }
}
Render.render(<App/>, document.getElementById("app"));