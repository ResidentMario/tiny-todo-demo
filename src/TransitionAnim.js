import Transition from 'react-transition-group/Transition';
import React from 'react';


class TransitionAnim extends React.Component {

    render() {
        const duration = 300;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
        };

        const transitionStyles = {
            entering: { opacity: 0 },
            entered:  { opacity: 1 },
        };

        return (
            <Transition in={this.props.in} timeout={duration}>
                {(state) => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        I'm A fade Transition!
                    </div>
                )}
            </Transition>
        )
    }
}

export default TransitionAnim;