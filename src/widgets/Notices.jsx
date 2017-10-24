import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import 'react-bootstrap';

import Notice from '../components/widgets/Notice';

class Notices extends Component {
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
            <div className={this.state.active ? "widget notices widget--active" : 'widget notices '}>
                <span onClick={this.handleClickShow} className="widget__btn icon-notices"></span>
                <div className="widget__main">
                    <div className="notices_widget__main">
                        <div className="notices_widget__title">
                            <span className="notices_widget__title_text">Last notifications</span>
                            <span className="notices_widget__title_clear">clear all</span>
                        </div>
                        <Notice
                            text={'Missed call +7 (908) 063-10-07. Try to call later.'}
                            time={'5 minutes ago'}
                            type={'missed_call'}
                        />
                        <Notice
                            text={'Phone number +7 (800) 333-44-55 may be disconnected.'}
                            time={'Todat 00:01'}
                            type={'phone_disconnected'}
                        />
                        <Notice
                            text={'asd'}
                            time={'21 jan 2016'}
                            type={'new_message'}
                        />
                    </div>
                    <div className="notices_widget__all">All notifications ( 123 )</div>
                </div>
            </div>
        )
    }
}

export default Notices
