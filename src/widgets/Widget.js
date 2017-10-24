import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import 'react-bootstrap';
class Widget extends Component {
    state = {
        active : false,
    }
    constructor(props) {
        super(props);
        autoBind(this);
    }
}

export default Widget;