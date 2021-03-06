import React from 'react';
import TransitionAnim from './TransitionAnim';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display_text: false}
    }

    render() {
        return (
            <div className="app-frame">
                <button onClick={() => {this.setState({display_text: !this.state.display_text})}}>
                    Toggle
                </button>
                <TransitionAnim in={this.state.display_text}/>
            </div>
        )
    }
}

export default App