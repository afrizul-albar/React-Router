import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Gallery from './gallery';
import Hari from './hari';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/hari" component={Hari} />
    </Switch>
)

export default Main;