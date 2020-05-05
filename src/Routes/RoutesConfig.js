import MapToSource from '../Components/MapToSource/MapToSource'
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import PageNotFoundComponent from '../Components/PageNotFoundComponent/PageNotFoundComponent';
import Dashboard from '../Components/Dashboard/Dashboard';
import Default from '../Components/Default/Default';
import Execution from '../Components/Execution/Execution';
import RuleSet from '../Components/RuleSet/RuleSet';


export const RouteNames = {
    LANDING_PAGE: "LANDING_PAGE",
    DASHBOARD: "DASHBOARD",
    MAP_TO_SOURCE: "MAP_TO_SOURCE",
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",
    RULESET_ADD: "RULESET_ADD",
    EXECUTION: "EXECUTION",
}


export const RouteUrls = {
    LANDING_PAGE: "/",
    DASHBOARD: "/dashboard",
    MAP_TO_SOURCE: "/MapToSource",
    SIGN_IN: "/signin",
    SIGN_UP: "/signup",
    RULESET_ADD: "/ruleset/add",
    EXECUTION: "/execution",
}

export const routes = [
    {
        name: RouteNames.LANDING_PAGE,
        path: RouteUrls.LANDING_PAGE,
        dashboardcomponent: Dashboard,
        RenderComponent: Default
    },
    {
        name: RouteNames.DASHBOARD,
        path: RouteUrls.DASHBOARD,
        dashboardcomponent: Dashboard,
        RenderComponent: Default
    },
    {
        name: RouteNames.MAP_TO_SOURCE,
        path: RouteUrls.MAP_TO_SOURCE,
        dashboardcomponent: Dashboard,
        RenderComponent: MapToSource
    },
    {
        name: RouteNames.RULESET_ADD,
        path: RouteUrls.RULESET_ADD,
        dashboardcomponent: Dashboard,
        RenderComponent: RuleSet
    },
    {
        name: RouteNames.EXECUTION,
        path: RouteUrls.EXECUTION,
        dashboardcomponent: Dashboard,
        RenderComponent: Execution
    },
    {   
        name: RouteNames.SIGN_IN,
        path: RouteUrls.SIGN_IN,
        component: SignIn
    },
    {
        name: RouteNames.SIGN_UP,
        path: RouteUrls.SIGN_UP,
        component: SignUp
    },{
        path: "/*",
        dashboardcomponent: PageNotFoundComponent
    }
]