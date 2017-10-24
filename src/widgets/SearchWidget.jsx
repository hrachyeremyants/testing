import classNames from 'classnames';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import 'react-bootstrap';

class SearchWidget extends Component {
    state = {
        active : false,
        history : [
            "Happiness is",
            "Happiness is a warm gun",
            "Happiness group"
        ]
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
        let history = _.map(this.state.history,(item,i)=>{
            return(
                <li className="search_widget__history_item" key={i}>{item}</li>
            )
        });
        return (
            <div className={this.state.active ? "widget search widget--active" : 'widget search '}>
                <span onClick={this.handleClickShow} className="widget__btn icon-search"></span>
                <div className="widget__main">
                    <div className="search_widget__main">
                        <div className="search_widget__field">
                            <span className="search_widget__field_icon icon-search"></span>
                            <input type="text" className="search_widget__field_input" placeholder="Search..."/>
                            <span className="search_widget__field_clear icon-close"></span>
                        </div>
                        <ul className="search_widget__history">
                            {history}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchWidget
