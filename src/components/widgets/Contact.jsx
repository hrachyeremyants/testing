import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import 'react-bootstrap';


class Contact extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    render() {
        return (
            <div className="ui-contact ui-contact--mode_default">{this.props.contactName ? this.props.contactName : this.props.phone}</div>
        )
    }
}

Contact.propTypes = {
    contactName: React.PropTypes.string,
    phone: React.PropTypes.string.isRequired,
    mode: React.PropTypes.string.isRequired
};

export default Contact
