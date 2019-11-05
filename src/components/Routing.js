import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from '../routes';
import Navbar from './Navbar';

export default class Routing extends Component {
    state = {
        routes: routes
    }
    render() {
        const routing = this.state.routes.map((x, i) => {
            return <Route key={i} exact={x.exact} path={x.path} component={x.component} />
        });
        const links = this.state.routes.map((x, i) => {
            return <Link key={i} to={x.path}>{x.label}</Link>
        })
        return (
            <>
                <Navbar links={links} />
                <div className='main-container'>
                    <Switch>
                        {routing}
                    </Switch>
                </div>

            </>
        )
    }
}
