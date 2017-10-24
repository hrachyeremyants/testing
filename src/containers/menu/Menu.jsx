import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import 'react-bootstrap';


import MenuLink from '../../components/menuLink/MenuLink'

class Menu extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    getMenuItems(){
        let options = [
            ["Calls","/calls","calls",0],
            ["Messages","/messages","messages",0],
            ["Contacts","/contacts","contacts",0],
            ["Wallet","/wallet","wallet",3],
            ["Store","/store","store",0],
        ];
        return _.map(options,function (item,i) {
            return(
                <MenuLink key={i} options={item} />
            )
        })
    }
    render(){
        return (
            <div className={'menu'}>
                {this.getMenuItems()}
            </div>
        )
    }
}

export default Menu;