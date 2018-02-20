import React from 'react';
import FadeAndSlideTransition from "./FadeAndSlideTransition";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {in: false};
    }

    render() {
        return (
            <FadeAndSlideTransition in={this.state.in}>
                <div className="card">
                    {this.props.text}
                </div>
            </FadeAndSlideTransition>
        )
    }
}

export default Card