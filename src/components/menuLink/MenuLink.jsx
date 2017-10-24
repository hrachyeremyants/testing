import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {Link} from 'react-router';
import _ from 'lodash';

import 'react-bootstrap';

class MenuLink extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    render(){
        let visable = this.props.options[3] > 0 ? 'menu__link menu__link--counter_visible' : 'menu__link';
        return (
            <Link to={this.props.options[1]} className={visable} activeClassName="menu__link menu__link--active" onlyActiveOnIndex={false} >
                <span className={`menu__link_icon icon-${this.props.options[2]}`}></span>
                <span className="menu__link_title">{this.props.options[0]}</span>
                <span className={'menu__link_counter'}>{this.props.options[3]}</span>
            </Link>
        )
    }
}

MenuLink.PropTypes = {
  options : React.PropTypes.array.isRequired
};
export default MenuLink;