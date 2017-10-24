import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './Layout'

import CallsPage from './containers/pages/CallsPage';
import ContactsPage from "./containers/pages/ContactsPage";
import WalletPage from "./containers/pages/WalletPage";
import StorePage from "./containers/pages/StorePage";
import MessagesPage from "./containers/pages/MessagesPage";

ReactDOM.render(
        <Router history={browserHistory}>
            <Route path={'/'} component={Layout}>
                <Route path={'/calls'} component={CallsPage}/>
                <Route path={'/messages'} component={MessagesPage}/>
                <Route path={'/contacts'} component={ContactsPage}/>
                <Route path={'/wallet'} component={WalletPage}/>
                <Route path={'/store'} component={StorePage}/>
            </Route>
        </Router>,
    document.getElementById('root')
);