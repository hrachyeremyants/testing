import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import 'react-bootstrap';


/**
 * Widgets
 */
import SearchWidget from './widgets/SearchWidget';
import PhoneWidget from './widgets/PhoneWidget';
import Notices from './widgets/Notices';
import ProfileWidget from './widgets/ProfileWidget';

/**
 * Menu
 */
import Menu from './containers/menu/Menu';
import HomePage from "./containers/pages/HomePage";

class Layout extends Component {

    state = {
        form :{
            name : '',
            email : '',
            password : '',
            passwordConform : '',
        },
        messages : []
    };

    constructor(props) {
        super(props);
        autoBind(this);
    }

    // componentWillMount(){
    //
    //     this.props.fetchAllItems();
    //
    //     this.props.fetchItem('59e4ba6cb9c40c1f402fed11');
    //
    //     this.props.setCurrentStoreId('59e4ba6cb9c40c1f402fed11');
    // }
    handleClickUnsetItem(){
        this.props.unsetCurrentStoreId();
    }

    handleOnChange(e){
        e.preventDefault();

        let {form} = this.state;

        form[e.target.name] = e.target.value;

        this.setState({form:form});

    }
    handleClickCreate(e){

        e.preventDefault();

        let { form } =  this.state;

        console.log(form);
    }
    render() {
        let children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child)
        });
        return (
            <div className={'layout'}>
                <header className="layout__header">
                    <div className={"layout__header_logo"}>Sendway</div>
                    <div className={'layout__header_widgets'}>
                        <SearchWidget />
                        <PhoneWidget />
                        <Notices />
                        <ProfileWidget />
                    </div>
                </header>
                <aside className={"layout__aside"}>
                    <Menu />
                </aside>
                <section className={'layout__content'}>
                    {children ? children : <HomePage />}
                  <footer className={"layout__footer"}>
                        © 2015 Sendway
                        <a>Help</a>
                        <a>FAQ</a>
                        <a>Privacy &amp; Terms</a>
                    </footer>
                </section>
            </div>
        )
    }
}

export default Layout
