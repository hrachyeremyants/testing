import React      from 'react'
import classnames from 'classnames'
import Input      from 'react-input-mask'


export default class PhoneWidget extends React.Component {

    static contextTypes = {
        getPhone: React.PropTypes.func.isRequired
    }

    constructor( props ) {
        super( props )

        this.initState( {
            mode:    'initial',
            calling: false,
            number:  ''
        })
    }

    focusToInput = ( e ) => {
        this.refs.input.refs.input.focus()
    }

    onPressButton = ( sym ) => {
        let input = this.refs.input,
            value = input.state.value,
            selection = input.getSelection()

        if ( value === '' ) value = input.formatValue( value )

        input.pasteText( value, sym, selection )
    }

    recall = ( number ) => {
        let input = this.refs.input
        input.setState( { value: input.formatValue( number ) })
        setTimeout( this.startCall, 300 )
    }

    startCall = () => {
        let number = this.refs.input.getInputValue()
        if ( number.replace( /[^\d]/g, '' ).length === 11 ) {
            this.setState( { calling: true, number: number })
            setTimeout(() => { this.setState( { mode: 'choose', calling: false }) }, 1000 )
        } else
            this.focusToInput()
    }

    onActivate() {
        document.body.addEventListener( 'keydown', this.focusToInput )
    }

    onDeactivate() {
        document.body.removeEventListener( 'keydown', this.focusToInput )
    }

    call( provider ) {
        this.context.getPhone().call( this.state.number, provider )
        this.setState({ mode: 'initial', active: false })
    }

    renderRecentCalls() {

        return CallsStore.getLast( 4 ).map(( item, i ) => {
            return (
                <div onClick={ () => this.recall( item.phone ) } key={i} className='phone_widget__history_item'>
                    <Contact phone={ item.phone } />
                    <time>{ item.date }</time>
                </div>
            )
        })

    }

    render() {

        let { mode, calling, number } = this.state

        let className = classnames(
            'phone_widget__main',
            `phone_widget--mode_${mode}`,
            calling && 'phone_widget--call_start'
        )

        return super.render(
            <div className={ className }>

                <div className='phone_widget__main_section phone_widget__main_section_initial'>

                    <div className='phone_widget__history'>
                        <p>Recent calls</p>
                        { this.renderRecentCalls() }
                    </div>

                    <div className='phone_widget__dialing'>
                        <Input ref='input' placeholder='Enter phone number' className='phone_widget__dialing_field' mask='+9 (999) 999-99-99'/>
                        <Keypad onPressButton={ this.onPressButton }/>
                        <div className='phone_widget__dialing_call_btn' onClick={ this.startCall }>Call now</div>
                    </div>

                </div>

                <div className='phone_widget__main_section phone_widget__main_section_choose phone_widget__choose'>

                    <Contact mode='big' phone={ number } />

                    <p><b>User online.</b> select the method call.</p>

                    <Button color='blue' onClick={ () => this.call( 'Sendway' ) }>Sendway call ( FREE ) </Button>
                    <Button color='blue' onClick={ () => this.call( 'GSM' ) }>GSM call ( 1, 49 RUB ) </Button>
                    <Button color='gray' onClick={ () => this.setState({ mode: 'initial' }) }>Cancel</Button>
                </div>

            </div>
        )

    }

}
