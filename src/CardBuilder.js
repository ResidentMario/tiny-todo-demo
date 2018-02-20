import React from 'react';

class CardBuilder extends React.Component {
    render() {
        return (<div className="card-builder-frame">
            <div className="button-wrapper">
                <button className="clicky" onClick={this.props.onClickCreate}>Create</button>
                <button className="clicky" onClick={this.props.onClickDelete}>Delete</button>
            </div>
        </div>)
    }
}

export default CardBuilder