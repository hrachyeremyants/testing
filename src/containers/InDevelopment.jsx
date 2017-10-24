import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import 'react-bootstrap';

class InDevelopment extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render(){
        return (
            <div className="in_development">
                <h1>Service in the development</h1>
                <p>Service <b>{this.props.serviceName}</b> is still at the development stage. We are working hard so that as soon as you can give it to you. More about step development and its promotion you can read in our <span>diaries developer</span>.</p>
                <span className="ui-button ui-button--mode_default ui-button--color_gray icon-none">
                    <span>Read blog</span>
                </span>
                <span className="ui-button ui-button--mode_default ui-button--color_blue icon-none">
                    <span>Start testing</span>
                </span>
            </div>
        )
    }
}

InDevelopment.PropTypes = {
    serviceName : React.PropTypes.string.isRequired
};

export default InDevelopment;