import * as React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { routes } from "./RoutesConfig";
import SignIn from "../Components/SignIn/SignIn";

class Routes extends React.Component {

  renderRoutes(routes) {
    let routeList = [];

    routes.forEach(({ dashboardcomponent: Component, path, ...rest }) => {
      routeList.push(
        <Route
          exact={path === "/"}
          key={path}
          path={path}
          render={props => {
            const user =
              localStorage.getItem("user") &&
              localStorage.getItem("user") !== "undefined" &&
              JSON.parse(localStorage.getItem("user"));
            const combinedProps = { ...rest, ...props };
            

            if(user){
                if(combinedProps.name === "SIGN_IN"){
                    window.location.assign("#/dashboard");
                    window.location.reload();
                }else{
                    return <Component {...combinedProps} />;
                }
            }else{
                return <SignIn {...combinedProps} />
            }
          }}
        
        />
      );
    });
    return routeList;
  }

  render() {

    return (
      <HashRouter>
        <div className="main-content">      
          <Switch>
          {/* <Route path="/dashboard" component={Dashboard}></Route> */}
          {this.renderRoutes(routes)}
          
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
