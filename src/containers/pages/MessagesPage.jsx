import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import 'react-bootstrap';

import InDevelopment from '../InDevelopment'

class MessagesPage extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render(){
        return (
            <InDevelopment serviceName={'Messages'}/>
        )
    }
}

export default MessagesPage;