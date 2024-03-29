import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import store from "./store/store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authActions"
import LandingPage from "./components/Pages/Landing/LandingPage"
import ProductsList from "./components/ProductsList/ProductsList";
import DesignLab from "./components/DesignLab/DesignLab";
import ProductDetail from "./components/ProductDetail/ProductDetail"
import Laboratory from "./components/DesignLab/Laboratory";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/HOC/PrivateRoute";
import DemoKeyboard from "./components/DemoKeyboard";




if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/products/:id" component={ProductDetail}/>
                    <Route exact path="/products" component={ProductsList}/>
                    <Route exact path="/design-lab/:id" component={DesignLab}/>
                    <Route exact path="/design-lab" component={Laboratory}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/configurator" component={DemoKeyboard}/>
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        )
    }
}

export default MainRouter;
