import React, { Component } from 'react'


export default class Keypad extends Component {

    symbols = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', `*`, '0', `#` ]

    componentWillReceiveProps( props ) {
        this.forceUpdate()
    }
    onPressButton( sym ) {
        if ( this.props.onPressButton ) this.props.onPressButton( sym )
    }
    render() {
        return (
            <div className='ui-keypad' >
                {
                    this.symbols.map(
                        ( sym, i ) => <span key={i} onClick={ () => this.onPressButton( sym ) }>{ sym }</span>
                    )
                }
            </div>
        )
    }
}