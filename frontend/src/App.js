import React from "react";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={AddUser} />
                <Route path="/allusers" component={AllUsers} />
            </Switch>
        </div>
    );
};

export default App;
