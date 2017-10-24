import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';

import 'react-bootstrap';

class Notice extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    getClassName(){
        switch (this.props.type){
            case "missed_call":
                return 'notices_widget__item_icon icon-calls';
                break;
            case "phone_disconnected":
                return 'notices_widget__item_icon icon-calls';
                break;
            case "new_message":
                return 'notices_widget__item_icon icon-messages';
                break;
        }
    }
    getActionType(){
        switch (this.props.type){
            case "missed_call":
                return 'call now';
                break;
            case "phone_disconnected":
                return 'clear';
                break;
            case "new_message":
                return 'write answer';
                break;
        }
    }
    render() {
        return (
            <div className="notices_widget__item">
                <span className={this.getClassName()}></span>
                <span className="notices_widget__item_body">
                    <span className="notices_widget__item_text">{this.props.text}</span>
                    <span className="notices_widget__item_time">{this.props.time}</span>
                    <span className="notices_widget__item_action">{this.getActionType()}</span>
                </span>
            </div>
        )
    }
}

Notice.PropTypes = {
    text: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired
};

export default Notice
