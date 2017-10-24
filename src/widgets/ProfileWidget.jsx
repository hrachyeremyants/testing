import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import 'react-bootstrap';

class ProfileWidget extends Component {
    state = {
        active : false
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
    render() {

        return (

            <div className={this.state.active ? "widget profile widget--active" : 'widget profile '}>
                <span onClick={this.handleClickShow} className="widget__btn icon-profile"></span>
                <div className="widget__main">
                    <div className={'profile_widget__main'}>
                        <div className={'profile_widget__info'}>
                            <span className="profile_widget__info_avatar" style={{"backgroundImage": "url(/images/avatar.png)"}}></span>
                            <span className="profile_widget__info_name">Yan Tashikov</span>
                            <span className="profile_widget__info_balance">Balance: <b>1000 USD</b></span>
                        </div>
                        <ul className="profile_widget__actions">
                            <li className="profile_widget__actions_item icon-plus">
                                <span>Refill balance</span>
                            </li>
                            <li className="profile_widget__actions_item icon-settings">
                                <span>Account settings</span>
                            </li>
                            <li className="profile_widget__actions_item icon-help">
                                <span>Help</span>
                            </li>
                            <li className="profile_widget__actions_item icon-logout">
                                <span>Logout</span>
                            </li>
                        </ul>
                        <div className="profile_widget__add">
                            <span className="profile_widget__add_icon icon-add"></span>
                            <span className="profile_widget__add_text">Add new account</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileWidget
