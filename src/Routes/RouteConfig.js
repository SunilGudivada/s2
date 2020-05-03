import MapToSource from '../Components/MapToSource/MapToSource'
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';

export const RouteUrls = {
    MAP_TO_SOURCE: "#/MapToSource",
    SIGN_IN: "#/signin",
    SIGN_UP: "#/signup"
}

export const routes = [
    {
        path: RouteUrls.MAP_TO_SOURCE,
        component: MapToSource,
        fullPage: false
    },
    {
        path: RouteUrls.SIGN_IN,
        component: SignIn,
        fullPage: true
    },
    {
        path: RouteUrls.SIGN_UP,
        component: SignUp,
        fullPage: true
    }
]