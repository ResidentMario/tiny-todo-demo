import React from 'react';
import TransitionAmin from './TransitionAnim';


class TransitionTarget extends React.Component {

    render() {
        return (
            <div className="app-frame">
                <button onClick={() => {this.setState({display_text: !this.state.display_text})}}>
                    Toggle
                </button>
                <div className="target"><TransitionAmin/></div>
            </div>
        )
    }
}

export default App