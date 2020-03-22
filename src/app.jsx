import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardView from './dashboard/dashboard-view';
import MediaDetail from './media-detail/media-detail-view';

export const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={DashboardView} />
                <Route path="/mediaDetail/:mediaType/:id" component={MediaDetail} />
            </Switch>
        </div>
    </Router>
)

export default App;
