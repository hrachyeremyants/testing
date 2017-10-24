import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import 'react-bootstrap';
import InputMask from 'react-input-mask';
import Contact from '../components/widgets/Contact';
import Keypad from '../components/widgets/Keypad';

class PhoneWidget extends Component {
    state = {
        active : false,
        calling : false,
        mode : "initial",
        number : "+7 (800) 755-68-98"
    };
    constructor(props) {
        super(props);
        autoBind(this);
    }
    handleClickShow(e){

        e.preventDefault();

        let { active } = this.state;

        this.setState({active:!active});
    }
    handleClickCall(e){
        e.preventDefault();

        console.log(this.state);
    }
    handleEnter(e){
        console.log(e);
    }
    startCall (){
        let number = this.refs.input.getInputValue()
        if ( number.replace( /[^\d]/g, '' ).length === 11 ) {
            this.setState( { calling: true, number: number })
            setTimeout(() => { this.setState( { mode: 'choose', calling: false }) }, 1000 )
        } else
            this.focusToInput()
    }
    onPressButton(sym) {
        // console.log(this.refs.input);
        console.log(this.refs.input.state);return

        let input = this.refs.input,
            value = input.value,
            selection = input.getSelection()
        console.log(input,value,selection);
        if ( value == '' ) value = input.formatValue( value )

        input.pasteText( value, sym, selection )
    }
    focusToInput(e) {
        this.refs.input.focused = true;
        // console.log(this.refs.input.isFocused());return

        // this.refs.input.focus();
        // this.refs.input.focus()
    };
    getContactList(){

        let numbers = [
            {number :"+7 (800) 755-68-98",time : '5 minutes ago'},
            {number : "+7 (800) 222-68-98",time : 'Yesterday'},
            {number : '+7 (450) 755-68-98', time :'April 17, 2016'},
            {number : '+7 (800) 222-68-98' , time : 'April 10, 2016'}
        ];
        return _.map(numbers,(item,i)=>{
            if(i === 0 ){
                return (
                    <div key={i} onClick={this.handleClickCall} className="phone_widget__history_item">
                        <Contact mode={'default'} phone={item.number} contactName={'Megan Fox'} />
                        <time>{item.time}</time>
                    </div>
                )
            }
            return (
                <div key={i} onClick={this.handleClickCall} className="phone_widget__history_item">
                    <Contact mode={'default'} phone={item.number} />
                    <time>{item.time}</time>
                </div>
            )
        });
    }
    render() {
        return (
            <div className={this.state.active ? "widget phone widget--active" : 'widget phone '}>
                <span onClick={this.handleClickShow} className="widget__btn icon-phone"></span>
                <div className="widget__main">
                    <div className="phone_widget__main">
                        <div className="phone_widget__main phone_widget--mode_initial">
                            <div className={'phone_widget__main_section phone_widget__main_section_initial'}>
                                <div className={'phone_widget__history'}>
                                    <p>Recent calls</p>
                                    {this.getContactList()}
                                </div>
                                <div className={'phone_widget__dialing'}>
                                    <InputMask ref="input" placeholder='Enter phone number' className='phone_widget__dialing_field' mask='+9 (999) 999-99-99'/>
                                    <Keypad onPressButton={this.onPressButton} />
                                    <div className='phone_widget__dialing_call_btn' onClick={ this.startCall }>Call now</div>
                                </div>
                            </div>
                            <div className={'phone_widget__main_section phone_widget__main_section_choose phone_widget__choose'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhoneWidget
// import React      from 'react'
// import classnames from 'classnames'
// import Input      from 'react-input-mask'
// import Widget     from 'components/abstract/widget'
// import UI         from 'components/ui'
// import CallsStore from 'stores/calls'
//
// let { Contact, Button, Keypad } = UI


// class PhoneWidget extends Widget {
//
//     static contextTypes = {
//         getPhone: React.PropTypes.func.isRequired
//     };
//
//     constructor( props ) {
//         super( props )
//
//         this.initState( {
//             mode:    'initial',
//             calling: false,
//             number:  ''
//         })
//     }
//

//
//     onPressButton = ( sym ) => {
//         let input = this.refs.input,
//             value = input.state.value,
//             selection = input.getSelection()
//
//         if ( value == '' ) value = input.formatValue( value )
//
//         input.pasteText( value, sym, selection )
//     }
//
//     recall = ( number ) => {
//         let input = this.refs.input
//         input.setState( { value: input.formatValue( number ) })
//         setTimeout( this.startCall, 300 )
//     }
//
//     startCall = () => {
//         let number = this.refs.input.getInputValue()
//         if ( number.replace( /[^\d]/g, '' ).length === 11 ) {
//             this.setState( { calling: true, number: number })
//             setTimeout(() => { this.setState( { mode: 'choose', calling: false }) }, 1000 )
//         } else
//             this.focusToInput()
//     }
//
//     onActivate() {
//         document.body.addEventListener( 'keydown', this.focusToInput )
//     }
//
//     onDeactivate() {
//         document.body.removeEventListener( 'keydown', this.focusToInput )
//     }
//
//     call( provider ) {
//         this.context.getPhone().call( this.state.number, provider )
//         this.setState({ mode: 'initial', active: false })
//     }
//
//     renderRecentCalls() {
//
//         return CallsStore.getLast( 4 ).map(( item, i ) => {
//             return (
//                 <div onClick={ () => this.recall( item.phone ) } key={i} className='phone_widget__history_item'>
//                     <Contact phone={ item.phone } />
//                     <time>{ item.date }</time>
//                 </div>
//             )
//         })
//
//     }
//
//     render() {
//
//         let { mode, calling, number } = this.state
//
//         let className = classnames(
//             'phone_widget__main',
//             `phone_widget--mode_${mode}`,
//             calling && 'phone_widget--call_start'
//         )
//
//         return super.render(
//             <div className={ className }>
//
//                 <div className='phone_widget__main_section phone_widget__main_section_initial'>
//
//                     <div className='phone_widget__history'>
//                         <p>Recent calls</p>
//                         { this.renderRecentCalls() }
//                     </div>
//
//                     <div className='phone_widget__dialing'>
//                         <Input ref='input' placeholder='Enter phone number' className='phone_widget__dialing_field' mask='+9 (999) 999-99-99'/>
//                         <Keypad onPressButton={ this.onPressButton }/>
//                         <div className='phone_widget__dialing_call_btn' onClick={ this.startCall }>Call now</div>
//                     </div>
//
//                 </div>
//
//                 <div className='phone_widget__main_section phone_widget__main_section_choose phone_widget__choose'>
//
//                     <Contact mode='big' phone={ number } />
//
//                     <p><b>User online.</b> select the method call.</p>
//
//                     <Button color='blue' onClick={ () => this.call( 'Sendway' ) }>Sendway call ( FREE ) </Button>
//                     <Button color='blue' onClick={ () => this.call( 'GSM' ) }>GSM call ( 1, 49 RUB ) </Button>
//                     <Button color='gray' onClick={ () => this.setState({ mode: 'initial' }) }>Cancel</Button>
//                 </div>
//
//             </div>
//         )
//
//     }
//
// }

