import React from 'react';
import Card from './Card';
import CardBuilder from './CardBuilder';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards: []}
    }

    render() {
        let cards = this.state.cards.map(p => <Card text={"HELLO WORLD"}/>);

        return (<div className="app-frame">
            <CardBuilder onClickCreate={() => {
                this.setState({
                    cards: [...this.state.cards,"Howdy"]
                });
            }}
                         onClickDelete={() => console.log("WORLD")}/>
            <div className="cardholder-frame">
                {cards}
            </div>
        </div>)
    }
}

export default App