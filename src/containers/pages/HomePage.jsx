import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import 'react-bootstrap';

import InDevelopment from '../InDevelopment'

class CallsPage extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render(){
        return (
            <InDevelopment serviceName={'Home'}/>
        )
    }
}

export default CallsPage;