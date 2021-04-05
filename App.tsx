import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Howdy</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));